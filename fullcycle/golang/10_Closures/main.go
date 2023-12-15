package main 

import(
	"fmt"
)

//Closures são basicamente, funções dentro de outras funções
func main () {
	total := func() int {
		return sum(1, 33, 4, ,555, 4) * 2
	}()
	fmt.Println(total)
}

func sum(numeros ...int) int {
	total := 0
	for _, numero := range numeros {
		total += numero
	}
	return total
}