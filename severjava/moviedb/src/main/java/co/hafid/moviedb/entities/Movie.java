package co.hafid.moviedb.entities;

import javax.persistence.*;
import java.sql.Date;

import static javax.persistence.GenerationType.SEQUENCE;



@Entity
@Table(
        name="movies",
        schema="public"
)
public class Movie {

    @Id
    @SequenceGenerator(
            name="movie_sequence",
            sequenceName = "movie_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "movie_sequence"
    )
    @Column(name = "movie_id")
    private Long movieId;
    @Column(name = "title")
    private String title;
    @Column(name = "added_date")
    private Date addedDate;
    @Column(name = "movie_ref")
    private String movieRef;

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public String getMovieRef() {
        return movieRef;
    }

    public void setMovieRef(String movieRef) {
        this.movieRef = movieRef;
    }

    public Movie(String title, Date addedDate, String movieRef) {
        this.title = title;
        this.addedDate = addedDate;
        this.movieRef = movieRef;
    }

    public Movie() {}
}