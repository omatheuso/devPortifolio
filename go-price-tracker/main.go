package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)
func OnPage(link string)(string) {
    res, err := http.Get(link)
    if err != nil {
        log.Fatal(err)
    }
    content, err := ioutil.ReadAll(res.Body)
    res.Body.Close()
    if err != nil {
        log.Fatal(err)
    }
    return string(content)
}

func main() {
    fmt.Println(OnPage("http://www.bbc.co.uk/news/uk-england-38003934"))
}