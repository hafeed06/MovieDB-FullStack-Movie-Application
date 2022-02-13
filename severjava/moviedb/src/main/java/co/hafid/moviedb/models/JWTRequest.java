package co.hafid.moviedb.models;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 1.0
 */

public class JWTRequest {

    private String username;
    private String password;

    public JWTRequest() {}

    public JWTRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
