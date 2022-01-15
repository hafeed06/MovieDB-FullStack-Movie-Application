/** This Controller controls both User and Role Entities **/

package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Role;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    //TODO Change Origin before Production

    @Autowired
    UserService userService;


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

    // ---- ADD 1 USER ROLE --- //

    @PostMapping(path = "/users/addRole")
    public Role addRole(@RequestBody Role role) {
        return userService.addRole(role);
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

    // ------- AUTHENTICATION FOR USER ----------- //

    @PostMapping(path = "/users/authUser")
    public ResponseEntity<Boolean> authUser(@RequestBody User user) {
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        if(userService.Authenticate(user) == true) return ResponseEntity.status(200).body(true);
        else return ResponseEntity.status(401).body(false);
    }



}
