package co.hafid.moviedb.entities;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity(name = "Role")
@Table(
        name   = "roles",
        schema = "public"
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
            name = "userid"
    )
    private Long userid;


    public Role(String role) {
        this.role = role;
    }

    public Role() {}



    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
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
