package co.hafid.moviedb.entities;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Role")
@Table(
        name   = "roles",
        schema = "public",
        uniqueConstraints = {
                @UniqueConstraint(name = "roles_user_id_unique", columnNames = "userid")
        }
)
public class Role {

    @Id
    @GeneratedValue(
            strategy = IDENTITY
    )
    @Column(
            name = "role_id"
    )
    private Long roleId;
    @Column(
            name = "role",
            nullable = false
    )
    private String role;
    @Column(
            name = "userid",
            nullable = false
    )
    private Integer userid;


    public Role(String role, Integer userid) {
        this.role = role;
        this.userid = userid;
    }

    public Role() {}

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

//    public Integer getUserid() {
//        return userid;
//    }
//
//    public void setUserid(Integer userid) {
//        this.userid = userid;
//    }
}
