package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/twpayne/go-geom"
	shapefile "github.com/twpayne/go-shapefile"

	"github.com/icholy/utm"
)

type Gemeinde struct {
	Name    string
	Borders []JSONTable
}

type GemeindeName struct {
	Name                    string
	Verwaltungsgemeinschaft string
}

var gemeindeNamen = []GemeindeName{
	{Name: "Breitenbrunn"},
	{Name: "Erkheim"},
	{Name: "Holzgünz"},
	{Name: "Lauben", Verwaltungsgemeinschaft: "Verwaltungsgemeinschaft Erkheim"},
	{Name: "Oberrieden"},
	{Name: "Pfaffenhausen"},
	{Name: "Salgen"},
	{Name: "Sontheim"},
	{Name: "Markt Rettenbach"},
	{Name: "Legau"},
	{Name: "Lautrach"},
	{Name: "Kronburg"},
	{Name: "Westerheim"},
	{Name: "Ungerhausen"},
	{Name: "Kammlach"},
}

func main() {

	gemeinden := make([]Gemeinde, 0)

	for _, name := range gemeindeNamen {
		var g = Gemeinde{
			Name: name.Name,
		}

		polygon, err := findGemeinde(name)
		if err != nil {

			// https://geodaten.bayern.de/opengeodata/OpenDataDetail.html?pn=verwaltung
			scanner, err := shapefile.NewScannerFromZipFile("alkis-verwaltung.zip", nil)
			if err != nil {
				log.Fatal(err)
			}

			for scanner.Next() {
				_, _, dbf := scanner.Scan()
				if len(dbf) < 5 {
					continue
				}
				fmt.Println(dbf)
			}

			log.Fatalln(err)

		}

		for _, coords := range polygon.Coords() {

			table := JSONTable{
				Header: []string{"lat", "lon"},
				Values: make([][]any, len(coords)),
			}
			for i, coord := range coords {
				zone, _ := utm.ParseZone("32N")
				zone.Letter = 'N'
				latitude, longitude := zone.ToLatLon(coord.X(), coord.Y())
				table.Values[i] = []any{latitude, longitude}
			}

			g.Borders = append(g.Borders, table)
		}

		gemeinden = append(gemeinden, g)
	}

	encoder := json.NewEncoder(os.Stdout)
	encoder.SetIndent("", "")
	encoder.Encode(gemeinden)

}

func findGemeinde(gemeinde GemeindeName) (*geom.Polygon, error) {

	// https://geodaten.bayern.de/opengeodata/OpenDataDetail.html?pn=verwaltung
	scanner, err := shapefile.NewScannerFromZipFile("alkis-verwaltung.zip", nil)
	if err != nil {
		log.Fatal(err)
	}

	for scanner.Next() {
		shp, _, dbf := scanner.Scan()
		if len(dbf) < 5 {
			continue
		}
		name := dbf[4].(string)
		if gemeinde.Name != name {
			continue
		}

		verwaltungsgemeinschaft := dbf[8].(string)
		v := gemeinde.Verwaltungsgemeinschaft
		if v != "" && v != verwaltungsgemeinschaft {
			continue
		}

		return shp.Geom.(*geom.Polygon), nil

	}
	return nil, fmt.Errorf("gemeinde %s not found", gemeinde)
}

type JSONTable struct {
	Header []string
	Values [][]any
}

type LatLon struct {
	Lat float64
	Lon float64
}
