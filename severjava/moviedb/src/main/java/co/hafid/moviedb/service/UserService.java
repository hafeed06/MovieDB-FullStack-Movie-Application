package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired UserRepository userRepository;

    public UserService() {

    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }


}
