package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.SeenMovie;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeenMovieRepository extends JpaRepository<SeenMovie, Long> {

    List<SeenMovie> findAllByOrderBySeenDateDesc(Pageable pageable);


}
