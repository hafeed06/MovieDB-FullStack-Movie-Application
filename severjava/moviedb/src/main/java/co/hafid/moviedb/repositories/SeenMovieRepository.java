package co.hafid.moviedb.repositories;

import co.hafid.moviedb.customDTOs.MovieRef;
import co.hafid.moviedb.entities.SeenMovie;
import co.hafid.moviedb.entities.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SeenMovieRepository extends JpaRepository<SeenMovie, Long> {

    List<SeenMovie> findAllByOrderBySeenDateDesc(Pageable pageable);

    List<SeenMovie> getSeenMoviesByUseridOrderBySeenDateDesc(Long userid, Pageable pageable);

    /***
     * This Query will return a list of Arrays of Objects
     * which are casted in the movieService to the MovieRef DTO
     * It is fully functional however I decided not to use it
     * Because I found a work around to return SeenMovie with accurate results
     * instead
     */

    @Query("SELECT DISTINCT s.movieRef, s.userid FROM SeenMovie s WHERE s.userid = ?1 GROUP BY s.movieRef, s.userid")
    List<Object[]> getUniqueSeenMoviesByUser(Long userid);

    /*** This is the final get Latest Movies Seen by User, it has multiple contraints
     * 1st: It has to get the latest seenMovies by userid
     * 2nd: It has to have a limit of the resultSet
     * 3rd: the returned results must be ordered by seen_date descending
     * 4th: the movies returned must be unique, otherwise the user will see
     * the same movie twice on the front if they watched it twice recently
     * Implementation requires the use of a nested PGSQL query
     * @return List<SeenMovie>
     */
    @Query(
            value="SELECT * FROM (SELECT DISTINCT ON (movie_ref) movie_ref, * FROM seenmovies WHERE userid=?1) uniques ORDER BY seen_date DESC LIMIT ?2",
            nativeQuery = true
    )
    List<SeenMovie> getUniqueSeenMoviesByUserId(Long userid, Integer limit);

    Integer countByMovieRef(String movieRef);

}
