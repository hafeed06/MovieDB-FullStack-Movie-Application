package co.hafid.moviedb.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {
    @RequestMapping(path = "/", method = RequestMethod.GET)
        public String Greeting() {
        return "Hello Folks";
    }
}
