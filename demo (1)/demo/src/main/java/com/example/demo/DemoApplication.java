package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class DemoApplication {

	@GetMapping("test")
	public String[] test() {
		String[] responses = new String[1000];
		RestTemplate template = new RestTemplate();
		String url = "";
		for (int i = 0; i < 1000; i++) {
			responses[i] = template.getForObject(url, String.class);
		}
		return responses;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
