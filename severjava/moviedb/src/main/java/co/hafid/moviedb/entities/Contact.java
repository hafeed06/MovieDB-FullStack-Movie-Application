package co.hafid.moviedb.entities;


import javax.persistence.*;
import java.sql.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Contact")
@Table(
        name   = "contacts",
        schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(name = "contact_email_unique", columnNames = "email"),
        }
)
public class Contact {

    @Id
    @GeneratedValue(
            strategy = IDENTITY
    )
    @Column(
            name = "contact_id"
    )
    private Long contactId;
    @Column(
            name = "name",
            nullable = false
    )
    private String name;
    @Column(
            name = "birthdate",
            nullable = false
    )
    private Date birthdate;
    @Column(
            name = "gender",
            nullable = false
    )
    private String gender;
    @Column(
            name = "email",
            nullable = false
    )
    private String email;

    @Column(name = "userid")
    private Long userid;

    @OneToMany(
            cascade = ALL,
            targetEntity = Address.class,
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "contact_id", referencedColumnName = "contact_id")
    private List<Address> addresses;

    public Contact() {}

    public Contact(
            String name,
            Date birthdate,
            String gender,
            String email,
            Long userid,
            List<Address> addresses
    ) {
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.email = email;
        this.userid = userid;
        this.addresses = addresses;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }


    public Long getContactId() {
        return contactId;
    }

    public void setContactId(Long contactId) {
        this.contactId = contactId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
