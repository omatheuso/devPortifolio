package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"
)

const deskURL string = "https://www.flexform.com.br/cadeiras/cadeiras-fixas/mork-sandy-black-piramidal"
const stringTarget string = "AVISE-ME"

func main () {
	feedBack, _ := accessPage(deskURL)
	isNotAvailable := checkAvailable(feedBack)
	if isNotAvailable {
		theresNoChair := "The chair is not avaiable."
		fmt.Print(theresNoChair)
	} else{

		fmt.Print("Congrats, there's a chair for you to buy!")
	}
}

func accessPage (page string) (string, error) {
	resp, err := http.Get(page)
	if err != nil {
        return "", err
    }
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
        return "", err
    }
	return string(body), nil
}

func timer () {
	time.NewTicker(d time.Duration)
}

func checkAvailable (feedBack string) bool {
	return strings.Contains(feedBack, stringTarget) // true
}


func maaain() {
    go heartBeat()
    time.Sleep(time.Second * 5)
}

func heartBeat() {
    for range time.Tick(time.Second * 1) {
        fmt.Println("Foo")
    }
}