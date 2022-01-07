package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.repositories.ContactRepository;
import co.hafid.moviedb.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactTempService {
    @Autowired
    ContactRepository contactRepository;

    public ContactTempService() {}

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public void checkContact(Contact contact) {
        if(!contactRepository.findContactByEmail(contact.getEmail()).isPresent()) {
            throw new IllegalStateException("Email Doesn't Exist");
        }
        else {
            System.out.println(contactRepository.findContactByEmail(contact.getEmail()));
        }
    }

}
