package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    UserService userService;


    @GetMapping(path = "/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }
    @PostMapping(path = "/addusers")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }


}
