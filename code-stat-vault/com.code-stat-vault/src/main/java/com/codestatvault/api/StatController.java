package com.codestatvault.api;

import com.codestatvault.models.DummyModel;
import com.codestatvault.services.StatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stats")
public class StatController {
    @Autowired
    StatService statService;

    @GetMapping("/all")
    public ResponseEntity<List<DummyModel>> getUserStats() {
        var userStats = statService.getUserStats();
        return ResponseEntity.ok(userStats);
    }

    @PostMapping("/add")
    public ResponseEntity<DummyModel> addUserStats(@RequestBody DummyModel dummyModel) {
        statService.addUserStat(dummyModel);
        return ResponseEntity.ok(dummyModel);
    }
}
