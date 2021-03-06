package co.hafid.moviedb.repositories;

import co.hafid.moviedb.entities.Address;
import co.hafid.moviedb.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

//    @Query("SELECT c FROM Contact c WHERE c.email = ?1")
//    Optional<Contact> findContactByEmail(String s);

    Address getAddressByContactId(Long contactId);

}
