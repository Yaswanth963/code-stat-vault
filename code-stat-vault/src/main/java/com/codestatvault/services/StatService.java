package com.codestatvault.services;

import com.codestatvault.models.DummyModel;
import com.codestatvault.repositories.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatService {

    @Autowired
    StatRepository statRepository;

    public List<DummyModel> getUserStats() {
        return statRepository.findAll();
    }

    public void addUserStat(DummyModel dummyModel) {
        statRepository.save(dummyModel);
    }
}
