package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    ContactService contactService;

    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getAllContacts();
    }

    @PostMapping("/contacts/isEmailRegistered")
    public boolean isEmailRegistered(@RequestBody Contact contact) {
        return contactService.isEmailRegistered(contact);
    }

    // Add 1 Movie
    @PostMapping(path = "/contacts/addContact")
    public Contact addContact(@RequestBody Contact contact) {
        return contactService.addContact(contact);
    }
}
