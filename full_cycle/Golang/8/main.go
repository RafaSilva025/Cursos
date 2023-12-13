package main 

import (
	"fmt"
	"errors"
)

func main() {
	valor, err := sum(50, 10)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(valor)
}

func sum(a, b int) (int, errors) {
	if a+b >= 50 {
		return 0, errors.new("A soma é maior que 50")
	}
	return a + b, nil
}

