package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Address;
import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AddressesController {

    @Autowired
    AddressService addressService;

    // ---- FETCH ALL ADDRESSES --- //

    @GetMapping(path = "/users/getAddresses")
    public ResponseEntity<List> getAllAddresses() {
        return ResponseEntity.status(200).body(addressService.getAllAddresses());
    }

    // ---- ADD 1 ADDRESS ---- //

    @PostMapping(path = "/users/addAddress")
    public Address addAddress(@RequestBody Address address) {
        System.out.println(address);
        return addressService.addAddress(address);
    }


}
