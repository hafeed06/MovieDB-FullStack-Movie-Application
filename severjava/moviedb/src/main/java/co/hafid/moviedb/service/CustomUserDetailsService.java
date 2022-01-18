//package co.hafid.moviedb.service;
//
//import co.hafid.moviedb.entities.User;
//import co.hafid.moviedb.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
///**
// * @author Abdelhafid Elbekkaoui hafid.co
// * @version 1.0
// */
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username);
//        if(user == null) {
//            throw new UsernameNotFoundException("User Not Found");
//        }
//        return new CustomUserDetails(user);
//    }
//}
