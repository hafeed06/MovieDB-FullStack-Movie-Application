package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.Role;
import co.hafid.moviedb.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {


}