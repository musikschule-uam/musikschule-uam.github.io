package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
)

func queryURL(landkreis string) string {
	u, err := url.Parse(`https://services-eu1.arcgis.com/COgyL97RL54KYdTZ/ArcGIS/rest/services/StMB_AGOL_Landkreisgrenzen_Bayern_vereinfacht/FeatureServer/0/query`)
	if err != nil {
		log.Fatal(err)
	}

	values := u.Query()
	values.Add("where", fmt.Sprintf(`BEZ_KRS LIKE '%%%s%%'`, landkreis))
	values.Add("f", "pgeojson")
	u.RawQuery = values.Encode()

	return u.String()
}

func main() {
	landkreis := os.Args[1]

	res, err := http.Get(queryURL(landkreis))
	if err != nil {
		log.Fatal(err)
	}

	if res.StatusCode != 200 {
		log.Fatalf("failed with status: %s", res.Status)
	}

	featurecollection := featurecollection{}
	json.NewDecoder(res.Body).Decode(&featurecollection)

	if len(featurecollection.Features) == 0 {
		log.Fatalf("did not find a result for: %s", queryURL(landkreis))
	}

	for i, feature := range featurecollection.Features {
		log.Printf("Result[%d]:\n", i)

		for _, coords := range feature.Geometry.Coordinates {

			ll := coords[0]
			table := JSONTable{
				Header: []string{"lat", "lon"},
				Values: make([][]any, len(ll)),
			}
			for i := range ll {
				latlon := ll[i].LatLon()
				table.Values[i] = []any{latlon.Lat, latlon.Lon}
			}
			encoder := json.NewEncoder(os.Stdout)
			encoder.SetIndent("", "")
			encoder.Encode(table)

		}

	}

	log.Printf("Found %d results", len(featurecollection.Features))

}

type JSONTable struct {
	Header []string
	Values [][]any
}

type LatLon struct {
	Lat float64
	Lon float64
}

type featurecollection struct {
	Features []feature `json:"features"`
}

type feature struct {
	Geometry multiPolygon `json:"geometry"`
}

type multiPolygon struct {
	Coordinates [][][]lonlat `json:"coordinates"`
}

type lonlat [2]float64

func (ll lonlat) LatLon() LatLon {
	return LatLon{
		Lat: ll[1],
		Lon: ll[0],
	}
}
