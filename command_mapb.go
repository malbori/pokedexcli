package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

func commandMapb(config *Config) {

	url := config.Previous

	if url == "" {
		url = "https://pokeapi.co/api/v2/location-area/"
	}
	res, err := http.Get(url)

	if err != nil {
		log.Fatal(err)
	}

	body, err := io.ReadAll(res.Body)
	defer res.Body.Close()

	if err != nil {
		log.Fatal(err)
	}

	var locations LocationAreaBatch
	err = json.Unmarshal(body, &locations)

	if err != nil {
		log.Fatal(err)
	}

	config.Next = locations.Next
	if locations.Previous != nil {
		config.Previous = *locations.Previous
	} else {
		config.Previous = ""
	}

	for i := range len(locations.Results) {
		fmt.Println(locations.Results[i].Name)
	}

}
