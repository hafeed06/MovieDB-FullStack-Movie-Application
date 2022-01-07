package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface MovieRepository extends JpaRepository<Movie, Long> {

}
