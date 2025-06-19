package main

import (
	"errors"
	"fmt"
)

func commandMapf(config *config) error {

	locationsResp, err := config.pokeapiClient.ListLocations(config.nextLocUrl)
	if err != nil {
		return err
	}

	config.nextLocUrl = locationsResp.Next
	config.prevLocUrl = locationsResp.Previous

	for _, location := range locationsResp.Results {
		fmt.Println(location.Name)
	}

	return nil
}

func commandMapb(config *config) error {
	if config.prevLocUrl == nil {
		return errors.New("you're on the first page")
	}

	locationResp, err := config.pokeapiClient.ListLocations(config.prevLocUrl)
	if err != nil {
		return err
	}

	config.nextLocUrl = locationResp.Next
	config.prevLocUrl = locationResp.Previous

	for _, loc := range locationResp.Results {
		fmt.Println(loc.Name)
	}
	return nil
}
