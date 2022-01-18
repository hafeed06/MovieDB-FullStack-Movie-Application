package co.hafid.moviedb.controllers;

import co.hafid.moviedb.models.JWTRequest;
import co.hafid.moviedb.models.JWTResponse;
import co.hafid.moviedb.service.UserService2;
import co.hafid.moviedb.utilities.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 1.0
 */

@RestController
public class HomeController {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService2 userService2;

    @GetMapping("/")
    public String home() {
        return "Welcome to the homepage of your API";
    }

    @PostMapping("/authenticate")
    public JWTResponse authenticate(@RequestBody JWTRequest jwtRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getUsername(),
                            jwtRequest.getPassword()
                    )
            );
        }
        catch (BadCredentialsException e){
            throw new Exception("INVALID CREDENTIALS",e);
        }

        final UserDetails userDetails
                = userService2.loadUserByUsername(jwtRequest.getUsername());

        final String token =
                jwtUtility.generateToken(userDetails);

        return  new JWTResponse(token);

    }

        //        try {
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            jwtRequest.getUsername(),
//                            jwtRequest.getPassword()
//                    )
//            );
//        }
//        catch(BadCredentialsException e) {
//            throw new Exception("Username or Password Invalid ... ",e);
//        }
//
//        final UserDetails userDetails
//                = userService2.loadUserByUsername(jwtRequest.getUsername());
//        final String token
//                = jwtUtility.generateToken(userDetails);
//        return new JWTResponse(token);
//    }
}
