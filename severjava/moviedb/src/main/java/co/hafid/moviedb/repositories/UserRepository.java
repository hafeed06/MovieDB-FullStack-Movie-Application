package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.entities.Role;
import co.hafid.moviedb.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;


@Repository
// <User, Long> : User is the name of the entity object, Long is the type of the ID column.
public interface UserRepository extends JpaRepository<User, Long> {

//    @Query("SELECT u FROM User u WHERE u.username = ?1")
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    Optional<User> findUserByUsername(String s);

    @Query("SELECT u FROM User u WHERE u.username = ?1 and u.password = ?2")
    User checkAuth(String username, String password);

    @Query("SELECT u FROM User u WHERE u.username = ?1")
    User getUserCredentials(String s);

    User findByUsername(String s);



//    @Query(
//            value = "SELECT * FROM users",
//            nativeQuery = true
//    )
//    List<String> showMeAllUsers();
//
//    @Query(
//            value="SELECT users.username,contacts.email, roles.role \n" +
//                    "FROM users \n" +
//                    "INNER JOIN contacts ON users.userid = contacts.userid \n" +
//                    "INNER JOIN roles ON users.userid = roles.userid\n" +
//                    "WHERE users.userid = ?",
//            nativeQuery = true
//    )
//    Optional<User> Authenticate(Long userid);

}
