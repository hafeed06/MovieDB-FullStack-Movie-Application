package co.hafid.moviedb.entities;
import javax.persistence.*;

import java.sql.Timestamp;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "SeenMovie")
@Table(
        name   = "seenmovies",
        schema = "public"
      )
public class SeenMovie {
    @Id
    @GeneratedValue(
            strategy = IDENTITY
    )
    private Long id;
    @Column(
            name = "userid",
            nullable = false
    )
    private Long userid;
    @Column(
            name = "seen_date",
            nullable = false
    )
    private Timestamp seenDate;
    @Column(
            name = "movie_ref",
            nullable = false
    )
    private String movieRef;

    public SeenMovie() {}
    public SeenMovie(Long userid, Timestamp seenDate, String movieRef) {
        this.userid = userid;
        this.seenDate = seenDate;
        this.movieRef = movieRef;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Date getSeenDate() {
        return seenDate;
    }

    public void setSeenDate(Timestamp seenDate) {
        this.seenDate = seenDate;
    }

    public String getMovieRef() {
        return movieRef;
    }

    public void setMovieRef(String movieRef) {
        this.movieRef = movieRef;
    }
}
