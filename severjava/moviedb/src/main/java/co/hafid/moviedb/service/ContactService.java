package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    @Autowired
    ContactRepository contactRepository;

    public ContactService() {}

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    /* TODO: It would return false if contact email is null as well, needs to be improved */
    // Check if an Email is Already Registered
    public boolean isEmailRegistered(Contact contact) {
        return contactRepository.findContactByEmail(contact.getEmail()).isPresent();
    }

    // Add 1 Contact
    public Contact addContact(Contact contact) {
        return contactRepository.save(contact);
    }

    // Get Contact by User ID

    public Contact getContactByUserId(Long userid) {
        return contactRepository.findContactByUserid(userid);
    }

}
