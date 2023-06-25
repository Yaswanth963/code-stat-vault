package com.codestatvault.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CodeController {
    @GetMapping("/healthcheck")
    public ResponseEntity<Map<String, Object>> healthcheck() {
        Map<String, Object> healthCheckMap = new HashMap<>();
        healthCheckMap.put("App Status", "Running...");
        return ResponseEntity.ok(healthCheckMap);
    }
}
