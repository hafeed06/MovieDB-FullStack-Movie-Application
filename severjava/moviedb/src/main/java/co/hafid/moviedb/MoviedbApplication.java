package co.hafid.moviedb;

import co.hafid.moviedb.repositories.ContactRepository;
import co.hafid.moviedb.repositories.MovieRepository;
import co.hafid.moviedb.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@SpringBootApplication
public class MoviedbApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoviedbApplication.class, args);
    }

    @Bean
    CommandLineRunner cmdRunner(UserRepository userRepository) {
        return args -> {
            System.out.println(userRepository.checkAuth("zezef", "dotezfeztk2**"));

        };
    }

}
