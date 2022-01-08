package co.hafid.moviedb;

import co.hafid.moviedb.repositories.ContactRepository;
import co.hafid.moviedb.repositories.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MoviedbApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoviedbApplication.class, args);
    }

    @Bean
    CommandLineRunner cmdRunner(ContactRepository contactRepository) {
        return args -> {
            System.out.println(contactRepository.findContactByEmail("obito@email.com"));
        };
    }

}
