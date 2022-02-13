package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.models.JWTRequest;
import co.hafid.moviedb.models.JWTResponse;
import co.hafid.moviedb.service.UserService;
import co.hafid.moviedb.utilities.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 1.0
 */

@RestController
//TODO Change Origin to real backend URL in all of the controllers.
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String home() {
        return "Test ....";
    }

    @GetMapping("/test")
    public String test() {
        return "This is the test place";
    }

    @PostMapping("/authenticate")
    public JWTResponse authenticate(@RequestBody JWTRequest jwtRequest) throws Exception{

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getUsername(),
                            jwtRequest.getPassword()
                    )
            );
            System.out.println("SUCCESSFUL AUTHENTICATION");
        } catch (BadCredentialsException e) {
            System.out.println("AUTHENTICATION FAILED");
            throw new Exception("INVALID_CREDENTIALS", e);

        }

        final UserDetails userDetails
                = userService.loadUserByUsername(jwtRequest.getUsername());

        final String token =
                jwtUtility.generateToken(userDetails);

        return  new JWTResponse(token);
    }


}