package main
import (
//  "fmt"
//  "github.com/julienschmidt/httprouter"
 "net/http"
 "encoding/json"
 "github.com/gorilla/mux"
 "log"
 "strconv"
//  "testing"
)

type NumberArr struct {
    Arr  []int `json:"arr,omitempty"`
}

func fibonacci() func() int {
    x, y := 0, 1
    return func() (r int) {
        r = x
        x, y = y, x + y
        return 
    }
}

func GetFib(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	params := mux.Vars(r)
	f := fibonacci()
	number, err := strconv.Atoi(params["number"])
	var numberArr NumberArr
	numberArr.Arr = make([]int, number)
	for i := 0; i < number; i++ {
		numberArr.Arr[i] = f()
	}

	if err != nil { } 

    json.NewEncoder(w).Encode(numberArr)
}

func main() {
 router := mux.NewRouter()
 router.HandleFunc("/api/fibonacci/{number}", GetFib).Methods("GET", "OPTIONS")
 log.Fatal(http.ListenAndServe(":8080", router))
}