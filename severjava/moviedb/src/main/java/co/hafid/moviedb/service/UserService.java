package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.Role;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.ContactRepository;
import co.hafid.moviedb.repositories.RoleRepository;
import co.hafid.moviedb.repositories.UserRepository;
import org.hibernate.criterion.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    public UserService() {
    }

    // Get All Users
    @Transactional
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // Get 1 User
    public User getUser(Long userid) {
        return userRepository.findById(userid).orElse(new User());
    }

    // Add 1 User
    public User addUser(User user) {
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(10)));
        return userRepository.save(user);
    }

//    // Add 1 User Test
//    public User addUser2(User user) {
//        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(10)));
//        System.out.println(user.toString());
//        return userRepository.save(user);
//    }

    // Delete 1 User
    public void deleteUser(Long userid) {
        userRepository.deleteById(userid);
    }

    // Check if Username is Already Registered
    public boolean isUsernameRegistered(User user) {
        return userRepository.findUserByUsername(user.getUsername()).isPresent();
    }
    // Add 1 User Role
    public Role addRole(Role role) {
        return roleRepository.save(role);
    }

    // --------------------------------------//
    // ------- User Authentication ---------- //
    // --------------------------------------//
    public boolean Authenticate(User user) {
        User dbUser = userRepository.getUserCredentials(user.getUsername());
        if (dbUser != null) {
            // If the passwords match it will return true, otherwise false
            return BCrypt.checkpw(user.getPassword(), dbUser.getPassword());
        }
        else return false;
    }

    public User getByUsername(String username) {
        User user = userRepository.findUserByUsername(username).orElse(null);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        co.hafid.moviedb.entities.User dbUser = userRepository.findByUsername(username);
        // Here I fetched the roles from the database for the specific user
        // and added them or SpringSecurity userDetails
        List<Role> roles = dbUser.getRoles();
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for(Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getRole()));
        }
        return new org.springframework.security.core.userdetails.User(dbUser.getUsername(), dbUser.getPassword(), authorities);
    }
}

