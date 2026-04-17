package com.fsd.exp6.config;

import com.fsd.exp6.models.User;
import com.fsd.exp6.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner seedUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> userRepository.findByUsername("user123")
                .orElseGet(() -> userRepository.save(
                        new User("user123", passwordEncoder.encode("password123"), "USER")));
    }
}
