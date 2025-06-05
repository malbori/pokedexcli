package main

import (
	"reflect"
	"testing"
)

func TestCleanInput(t *testing.T) {
	cases := []struct {
		input	string
		expected []string
	}{
			{
		input:    "  hello  world  ",
		expected: []string{"hello", "world"},
	},
	{
			input:    "Charmander Bulbasaur PIKACHU",
			expected: []string{"charmander", "bulbasaur", "pikachu"},
		},
		{
			input:    "  multiple   spaces   ",
			expected: []string{"multiple", "spaces"},
		},
		{
			input:    "no leading or trailing space",
			expected: []string{"no", "leading", "or", "trailing", "space"},
		},
		{
			input:    "", // Empty string
			expected: []string{},
		},
		{
			input:    "   ", // String with only spaces
			expected: []string{},
		},
	}

	for _, c := range cases {
		actual := cleanInput(c.input)

		if !reflect.DeepEqual(actual, c.expected) {
			t.Errorf("Input: '%s', Expected: %v, Actual: %v", c.input, c.expected, actual)
		}
	}
}

