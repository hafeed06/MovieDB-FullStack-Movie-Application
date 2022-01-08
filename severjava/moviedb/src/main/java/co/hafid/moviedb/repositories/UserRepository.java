package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
// <User, Long> : User is the name of the entity object, Long is the type of the ID column.
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.username = ?1")
    Optional<User> findUserByUsername(String s);

}
