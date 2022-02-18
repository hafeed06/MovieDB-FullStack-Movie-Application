package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    ContactService contactService;

    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactService.getAllContacts();
    }

    // Get Contact by userID

    @GetMapping(path = "/contacts/{id}")
    public ResponseEntity<Contact> getContact(@PathVariable("id") Long id) {
        Contact contact = contactService.getContactByUserId(id);
        return ResponseEntity.status(200).body(contact);
    }

    @PostMapping("/contacts/isEmailRegistered")
    public boolean isEmailRegistered(@RequestBody Contact contact) {
        return contactService.isEmailRegistered(contact);
    }

    // Add 1 Contact
    @PostMapping(path = "/contacts/addContact")
    public Contact addContact(@RequestBody Contact contact) {
        return contactService.addContact(contact);
    }
}
