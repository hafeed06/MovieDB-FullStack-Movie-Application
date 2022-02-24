package co.hafid.moviedb.entities;
import javax.persistence.*;
import static javax.persistence.GenerationType.IDENTITY;

@Entity(name = "Address")
@Table(
        name   = "addresses",
        schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(name = "address_contact_id_unique", columnNames = "contact_id")
        }
)
public class Address {
    @Id
    @GeneratedValue(
            strategy = IDENTITY
    )
    @Column(name="address_id")
    private Long addressId;
    @Column(name="country")
    private String country;
    @Column(name="area")
    private String area;
    @Column(name="city")
    private String city;
    @Column(name="street")
    private String street;
    @Column(name = "number")
    private Integer number;
    @Column(name = "contact_id")
    private Long contactId;

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Long getContactId() {
        return contactId;
    }

    public void setContactId(Long contactId) {
        this.contactId = contactId;
    }

    public Address(
            String country,
            String area,
            String city,
            String street,
            Integer number,
            Long contactId
    ) {
        this.country = country;
        this.area = area;
        this.city = city;
        this.street = street;
        this.number = number;
        this.contactId = contactId;
    }

    public Address() {}


}
