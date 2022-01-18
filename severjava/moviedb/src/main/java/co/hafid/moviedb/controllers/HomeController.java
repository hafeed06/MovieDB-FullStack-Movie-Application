package co.hafid.moviedb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 1.0
 */

@RestController
public class HomeController {


    @GetMapping("/")
    public String home() {
        return "Welcome to the homepage of your API";
    }

//    @PostMapping("/authenticate")
//    public JWTResponse authenticate(@RequestBody JWTRequest jwtRequest) throws Exception{
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
