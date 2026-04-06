package com.fsd.exp7.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsd.exp7.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
