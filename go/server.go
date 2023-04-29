package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/gofiber/fiber/v2"
)

func main() {

	app := fiber.New()

	var responses []string

	for i := 0; i < 1000; i++ {
		resp, err := http.Get("")
		if err != nil {
			fmt.Println("Error:", err)
		}

		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			fmt.Println("Error:", err)
		}

		responses = append(responses, string(body))
	}

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString(strings.Join(responses, "\n"))
	})

	app.Listen(":3000")
}
