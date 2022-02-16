package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.entities.SeenMovie;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.MovieRepository;
import co.hafid.moviedb.repositories.SeenMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    SeenMovieRepository seenMovieRepository;

    public MovieService() {}

    // Get All Movies
    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }

    // Get 1 Movie
    public Movie getMovie(String movieRef) {
        return movieRepository.findMovieByRef(movieRef).orElse(new Movie());
    }

    // Add 1 Movie
    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    // Delete 1 Movie
    public void deleteMovie(Long movieId) {
        movieRepository.deleteById(movieId);
    }

    // Add 1 LastSeen movie Information

    public SeenMovie addSeenMovie(SeenMovie seenMovie) {
        return seenMovieRepository.save(seenMovie);
    }

    // Get 10 LastSeenMovies

    public List<SeenMovie> getTenLastSeenMovies() {
        return seenMovieRepository.findAllByOrderBySeenDateDesc(PageRequest.of(0,10));
    }

    // Get Movie Views by Movie Reference
    public Integer getViewByMovieRef(String movieRef) {
        return seenMovieRepository.countByMovieRef(movieRef);
    }



}
