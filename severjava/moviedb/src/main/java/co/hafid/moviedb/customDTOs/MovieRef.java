package co.hafid.moviedb.customDTOs;

/**
 * @author Abdelhafid Elbekkaoui hafid.co
 * @version 0.0.1
 */

// This DTO was used but then aborted because I used a different route in the end
// I kept its implementation in case it's ever needed again

public class MovieRef {

    public MovieRef() {
    }

    private String movieRef;
    private Long userid;

    public MovieRef(String movieRef, Long userid) {
        this.movieRef = movieRef;
        this.userid = userid;
    }

    public String getMovieRef() {
        return movieRef;
    }

    public void setMovieRef(String movieRef) {
        this.movieRef = movieRef;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }
}
