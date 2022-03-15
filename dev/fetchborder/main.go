package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
)

func queryURL(gemeinde string) string {
	u, err := url.Parse(`https://services-eu1.arcgis.com/COgyL97RL54KYdTZ/ArcGIS/rest/services/Gemeindegrenzen_Bayern_vereinfacht/FeatureServer/0/query`)
	if err != nil {
		log.Fatal(err)
	}

	values := u.Query()
	values.Add("where", fmt.Sprintf(`BEZ_GEM='%s'`, gemeinde))
	values.Add("f", "pgeojson")
	u.RawQuery = values.Encode()

	return u.String()
}

func main() {
	gemeinde := os.Args[1]

	res, err := http.Get(queryURL(gemeinde))
	if err != nil {
		log.Fatal(err)
	}

	if res.StatusCode != 200 {
		log.Fatalf("failed with status: %s", res.Status)
	}

	featurecollection := featurecollection{}
	json.NewDecoder(res.Body).Decode(&featurecollection)

	if len(featurecollection.Features) == 0 {
		log.Fatalf("did not find a result for: %s", queryURL(gemeinde))
	}

	for i, feature := range featurecollection.Features {
		log.Printf("Result[%d]:\n", i)

		ll := feature.Geometry.Coordinates[0]

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
	Geometry polygon `json:"geometry"`
}

type polygon struct {
	Coordinates [][]lonlat `json:"coordinates"`
}

type lonlat [2]float64

func (ll lonlat) LatLon() LatLon {
	return LatLon{
		Lat: ll[1],
		Lon: ll[0],
	}
}
