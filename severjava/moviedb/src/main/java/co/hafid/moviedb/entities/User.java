package co.hafid.moviedb.entities;
import javax.persistence.*;

import java.util.*;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.GenerationType.IDENTITY;

@Entity(name = "User")
@Table(
        name   = "users",
        schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(name = "user_username_unique", columnNames = "username"),
        }
)
public class User {
    @Id
    @GeneratedValue(
            strategy = IDENTITY
    )
    @Column(name="userid")
    private Long userid;
    @Column(
            name = "username",
            nullable = false
    )
    private String username;
    @Column(
            name = "password",
            nullable = false
    )
    private String password;
    @OneToMany(
            targetEntity = Role.class,
            fetch = FetchType.EAGER,
            cascade = ALL
    )
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private List<Role> roles;

    @OneToMany(
            cascade = ALL,
            targetEntity = Contact.class
    )
    @JoinColumn(name = "userid", referencedColumnName = "userid")
    private List<Contact> contacts;

    public List<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contact> contacts) {
        this.contacts = contacts;
    }

    public User(
            String username,
            String password,
            List<Role> roles,
            List<Contact> contacts
    ) {
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.contacts = contacts;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }


    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public void setPassword(String password) {

        this.password = password;
    }
//
//    public User(String username, String password) {
//        this.username = username;
//        this.password = password;
//    }

    public User() {}


    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                ", contact=" + contacts+
                '}';
    }
}
