package co.hafid.moviedb.controllers;

import co.hafid.moviedb.entities.Address;
import co.hafid.moviedb.entities.Contact;
import co.hafid.moviedb.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AddressesController {

    @Autowired
    AddressService addressService;

    // ---- FETCH ALL ADDRESSES --- //

    @GetMapping(path = "/addresses")
    public ResponseEntity<List> getAllAddresses() {
        return ResponseEntity.status(200).body(addressService.getAllAddresses());
    }

    // Get Address by contactID

    @GetMapping(path = "/addresses/{id}")
    public ResponseEntity<Address> getAddressByContact(@PathVariable("id") Long id) {
        Address address = addressService.getAddressByContactId(id);
        if(address.getAddressId() != null) {
            return ResponseEntity.status(200).body(address);
        }
        else {
            return ResponseEntity.status(400).body(address);
        }
    }

    // ---- ADD 1 ADDRESS ---- //

    @PostMapping(path = "/addresses/addAddress")
    public Address addAddress(@RequestBody Address address) {
        System.out.println(address);
        return addressService.addAddress(address);
    }


}
