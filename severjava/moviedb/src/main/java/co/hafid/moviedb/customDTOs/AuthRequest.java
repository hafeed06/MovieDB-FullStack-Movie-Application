package co.hafid.moviedb.customDTOs;

import co.hafid.moviedb.entities.User;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 0.0.1
 */

public class AuthRequest {
    private User user;

    public AuthRequest(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "AuthRequest{" +
                "user=" + user +
                '}';
    }
}
