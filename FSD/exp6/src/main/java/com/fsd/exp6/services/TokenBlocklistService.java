package com.fsd.exp6.services;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Service;

@Service
public class TokenBlocklistService {

    private final Set<String> invalidatedTokens = ConcurrentHashMap.newKeySet();

    public void invalidate(String token) {
        invalidatedTokens.add(token);
    }

    public boolean isInvalidated(String token) {
        return invalidatedTokens.contains(token);
    }
}
