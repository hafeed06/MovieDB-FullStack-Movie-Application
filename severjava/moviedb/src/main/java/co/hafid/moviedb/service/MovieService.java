package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

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



}
