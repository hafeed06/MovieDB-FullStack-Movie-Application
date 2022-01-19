package co.hafid.moviedb.service;
import co.hafid.moviedb.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService2 implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        co.hafid.moviedb.entities.User dbUser = userRepository.findByUsername(username);
        // TODO -- Fetch Roles as Well
        return new User(dbUser.getUsername(), dbUser.getPassword(), new ArrayList<>());
    }
}