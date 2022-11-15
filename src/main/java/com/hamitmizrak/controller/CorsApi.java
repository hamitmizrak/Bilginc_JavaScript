package com.hamitmizrak.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class CorsApi {

    // http://localhost:9090/api/v1/cors
    @GetMapping("/cors")
    public String message(){
        return "Merhabalar ben Java api geldim";
    }
}
