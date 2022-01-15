package co.hafid.moviedb.repositories;
import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query("SELECT m FROM Movie m WHERE m.movieRef = ?1")
    Optional<Movie> findMovieByRef(String s);
}
