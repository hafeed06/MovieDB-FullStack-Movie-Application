package co.hafid.moviedb;

import co.hafid.moviedb.entities.Role;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.UserRepository;
import co.hafid.moviedb.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 0.0.1
 */

public class AddUserWithRoles {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Test
    public void addUserWithRoles() {
//        User user = new User("John", "Snow");
//        List<Role> roles = new ArrayList<>();
//        roles.add(new Role("ADMIN"));
//        roles.add(new Role("USER"));
//        user.setRoles(roles);
//        userService.addUser(user);
    }

}
