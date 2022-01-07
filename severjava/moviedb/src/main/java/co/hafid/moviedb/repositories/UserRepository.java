package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
// <User, Long> : User is the name of the entity object, Long is the type of the ID column.
public interface UserRepository extends JpaRepository<User, Long> {

}
