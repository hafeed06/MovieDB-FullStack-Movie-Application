package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.ContactTempService;
import co.hafid.moviedb.service.UserService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    ContactTempService contactTempService;

    @GetMapping(path = "/users")
    //TODO Remove this route before moving to production.
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List> getUsers() {
        return ResponseEntity.status(200).body(userService.getUsers());
    }

    @PostMapping(path = "/addUsers")
    @CrossOrigin(origins = "http://localhost:3000")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
    // Example: localhost:8080/deleteUser {"userid":6}
    @PostMapping(path = "/deleteUser")
    //TODO Change this address with the Front End Server Before Moving to Production
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteUser(@RequestBody Map<String, Long> request) {
        JSONObject jsonObject = new JSONObject(request);
        Long id = request.get("userid");
        userService.deleteUser(id);
    }


    @GetMapping("contacts")
    public List<Contact> getContacts() {
        return contactTempService.getAllContacts();
    }

    @PostMapping("contacts/checkContact")
    public void checkContact(Contact contact) {
        contactTempService.checkContact(contact);
    }










}
