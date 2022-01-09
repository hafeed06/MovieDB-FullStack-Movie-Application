package co.hafid.moviedb.entities;
import javax.persistence.*;

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
    private Integer userid;
    @Column(
            name = "seen_date",
            nullable = false
    )
    private Date seenDate;
    @Column(
            name = "movie_ref",
            nullable = false
    )
    private String movieRef;

    public SeenMovie() {}
    public SeenMovie(Integer userid, Date seenDate, String movieRef) {
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

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Date getSeenDate() {
        return seenDate;
    }

    public void setSeenDate(Date seenDate) {
        this.seenDate = seenDate;
    }

    public String getMovieRef() {
        return movieRef;
    }

    public void setMovieRef(String movieRef) {
        this.movieRef = movieRef;
    }
}
