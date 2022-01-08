package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    //TODO Change Origin before Production

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")

    // ----- FETCH ALL THE USERS  ----- //
    @GetMapping(path = "/users")
    public ResponseEntity<List> getAllUsers() {
        return ResponseEntity.status(200).body(userService.getUsers());
    }
    // ----- FETCH 1 USER  ----- //
    @GetMapping(path = "/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
        User user = userService.getUser(id);
        return ResponseEntity.status(200).body(user);
    }
    // ----- ADD 1 USER  ----- //
    @PostMapping(path = "/users/addUser")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    // ----- DELETE 1 USER  ----- //
    @DeleteMapping(path = "/users/deleteUser")
    public void delUser(@RequestBody User user) {
        userService.deleteUser(user.getUserid());
        // TODO : Response Management
    }
    // ----- CHECK IF USERNAME IS ALREADY REGISTERED  ----- //
    @PostMapping("/users/isUsernameRegistered")
    // TODO On the front end make sure to register usernames in lowercase
    public boolean isEmailRegistered(@RequestBody User user) {
        return userService.isUsernameRegistered(user);
    }
}
