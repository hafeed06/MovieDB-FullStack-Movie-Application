package co.hafid.moviedb.service;


import co.hafid.moviedb.entities.Address;
import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    AddressRepository addressRepository;
    // Get all Addresses
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }
    // Add 1 Address
    public Address addAddress(Address address) {
        return addressRepository.save(address);
    }

}
