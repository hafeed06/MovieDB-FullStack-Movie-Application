package co.hafid.moviedb.models;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 1.0
 */

public class JWTResponse {

    private String jwtToken;

    public JWTResponse() {
    }

    public JWTResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
