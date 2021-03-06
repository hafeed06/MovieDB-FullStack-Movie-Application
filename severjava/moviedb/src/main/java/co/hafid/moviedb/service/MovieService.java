package co.hafid.moviedb.service;

import co.hafid.moviedb.customDTOs.MovieRef;
import co.hafid.moviedb.entities.Movie;
import co.hafid.moviedb.entities.SeenMovie;
import co.hafid.moviedb.repositories.MovieRepository;
import co.hafid.moviedb.repositories.SeenMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    // Get 10 LastSeenMovies by User ID

    public List<SeenMovie> getTenLastSeenMoviesByUserId(Long userid, Integer limit) {
        return seenMovieRepository.getSeenMoviesByUseridOrderBySeenDateDesc(userid, PageRequest.of(0,limit));
    }


    public List<MovieRef> getTenLastSeenMoviesByUserIdUniqueMovies(Long userid) {
        List<Object[]> rawMoviesList = seenMovieRepository.getUniqueSeenMoviesByUser(userid);
        List<MovieRef> movieReferences = new ArrayList<>();
        for(Object[] movie : rawMoviesList) {
            movieReferences.add(
                    new MovieRef(
                            String.valueOf(movie[0]), Long.valueOf(movie[1].toString())));
        }
        return movieReferences;
    }


    public List<SeenMovie> getLastSeenCustom(Long userid, Integer limit) {
        return seenMovieRepository.getUniqueSeenMoviesByUserId(userid, limit);
    }


    // Get Movie Views by Movie Reference
    public Integer getViewByMovieRef(String movieRef) {
        return seenMovieRepository.countByMovieRef(movieRef);
    }



}
