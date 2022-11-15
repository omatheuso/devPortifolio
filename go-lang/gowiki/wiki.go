package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

type Page struct {
    Title string
    Body  []byte //means "a byte slice" The Body element is a []byte rather than string because that is the type expected by the io libraries
}

func (p *Page) save() error {
    filename := p.Title + ".txt"
    return os.WriteFile(filename, p.Body, 0600)
}

func loadPage(title string) (*Page, error) {
    filename := title + ".txt"
    body, err := os.ReadFile(filename)
    if err != nil {
        return nil, err
    }
    return &Page{Title: title, Body: body}, nil
}

func loadHTMLPage(title string) (string, error) { //first the function arguments than return type
    filename := title
    body, err := os.ReadFile(filename)
    if err != nil {
        return "", err
    }
    return string(body), nil
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
    title := r.URL.Path[len("/view/"):]
    p, _ := loadHTMLPage(title)
    fmt.Fprintf(w, p)
}

func main() {
    // p1 := &Page{Title: "TestPage", Body: []byte("This is a sample Page.")}
    // p1.save()
    // p2, _ := loadPage("TestPage")
    // fmt.Println(string(p2.Body))

    http.HandleFunc("/view/", viewHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}