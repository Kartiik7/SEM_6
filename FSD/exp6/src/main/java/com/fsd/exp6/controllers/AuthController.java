package com.fsd.exp6.controllers;

import com.fsd.exp6.dto.AuthResponse;
import com.fsd.exp6.dto.LoginRequest;
import com.fsd.exp6.dto.MessageResponse;
import com.fsd.exp6.routes.AuthRoutes;
import com.fsd.exp6.services.JwtService;
import com.fsd.exp6.services.TokenBlocklistService;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final TokenBlocklistService tokenBlocklistService;

    public AuthController(
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            TokenBlocklistService tokenBlocklistService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.tokenBlocklistService = tokenBlocklistService;
    }

    @PostMapping(AuthRoutes.LOGIN)
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.password()));
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            return ResponseEntity.ok(new AuthResponse(jwtService.generateToken(userDetails)));
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Invalid username or password"));
        }
    }

    @GetMapping(AuthRoutes.PROTECTED)
    public ResponseEntity<MessageResponse> protectedResource(Authentication authentication) {
        return ResponseEntity.ok(
                new MessageResponse("Access granted to protected resource for " + authentication.getName()));
    }

    @PostMapping(AuthRoutes.LOGOUT)
    public ResponseEntity<MessageResponse> logout(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new MessageResponse("Authorization header with Bearer token is required"));
        }

        String token = authorizationHeader.substring(7);
        tokenBlocklistService.invalidate(token);
        return ResponseEntity.ok(new MessageResponse("Token invalidated successfully"));
    }
}
