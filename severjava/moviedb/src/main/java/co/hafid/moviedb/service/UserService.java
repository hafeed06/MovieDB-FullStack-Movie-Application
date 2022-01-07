package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.UserRepository;
import org.hibernate.criterion.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public UserService() {

    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
    // If ID is definined in the jSON then it's a new record, else it's an update
    public User addUser(User user) {
        return userRepository.save(user);
    }

    public String deleteUser(Long userid) {
       userRepository.deleteById(userid);
       return "User id " + userid + "Successfully deleted";
    }

    public void DeleteUser() {

    }



}
