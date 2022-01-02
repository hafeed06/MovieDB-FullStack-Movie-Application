package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping(path = "/users")
    //TODO Remove this route before moving to production.
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getUsers() {
        return userService.getUsers();
    }
    @PostMapping(path = "/addusers")
    //TODO Change this address with the Front End Server Before Moving to Production
    @CrossOrigin(origins = "http://localhost:3000")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
}
