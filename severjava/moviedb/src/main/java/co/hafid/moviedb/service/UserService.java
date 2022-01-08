package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.ContactRepository;
import co.hafid.moviedb.repositories.UserRepository;
import org.hibernate.criterion.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ContactRepository contactRepository;

    public UserService() {
    }
    // Get All Users
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    // Get 1 User
    public User getUser(Long userid) {
        return userRepository.findById(userid).orElse(new User());
    }
    // Add 1 User
    public User addUser(User user) {
        return userRepository.save(user);
    }
    // Delete 1 User
    public void deleteUser(Long userid) {
       userRepository.deleteById(userid);
    }
    // Check if Username is Already Registered
    public boolean isUsernameRegistered(User user) {
        return userRepository.findUserByUsername(user.getUsername()).isPresent();
    }

}
