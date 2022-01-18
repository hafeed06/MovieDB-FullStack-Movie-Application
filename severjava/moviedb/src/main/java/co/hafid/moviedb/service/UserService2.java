package co.hafid.moviedb.service;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService2 implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        //TODO : Logic to get the user form the Database
        return new User("admin","$2a$10$MO.OgOnmou0jfzAbsPZaWu0vU8z7t8D47up6dAL6V4l5f3BDZ6PJm",new ArrayList<>());
    }
}