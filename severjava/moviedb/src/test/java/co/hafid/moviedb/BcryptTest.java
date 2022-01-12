package co.hafid.moviedb;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCrypt;

public class BcryptTest {

    public String password = "myeidkpass";

    public String hashPassword = BCrypt.hashpw(password, BCrypt.gensalt(10));


    @Test
    public void AuthenticationTest() {
        if(BCrypt.checkpw(password, hashPassword)) {
            System.out.println("Successful Authentication");
        }
        else System.out.println("Authentication Failed ");
    }



}
