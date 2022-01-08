package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.entities.User;
import co.hafid.moviedb.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    MovieService movieService;

    // Get All Movies
    @GetMapping(path = "/movies")
    public ResponseEntity<List> getAllMovies() {
        return ResponseEntity.status(200).body(movieService.getMovies());
    }
    // Get 1 Movie
    @GetMapping(path = "/movies/{movieRef}")
    public ResponseEntity<Movie> getUser(@PathVariable("movieRef") String movieRef) {
        Movie movie = movieService.getMovie(movieRef);
        return ResponseEntity.status(200).body(movie);
    }
    // Add 1 Movie
    @PostMapping(path = "/movies/addMovie")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    // ----- DELETE 1 MOVIE  ----- //
    @DeleteMapping(path = "/movies/deleteMovie")
    public void delUser(@RequestBody Movie movie) {
        System.out.println("___________________________");
        System.out.println(movie.getMovieRef());
        movieService.deleteMovie(movie.getMovieId());
        // TODO : Response Management
    }

}
