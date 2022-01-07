package co.hafid.moviedb.service;

import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public List<Movie> showAll() {
        return movieRepository.findAll();
    }

}
