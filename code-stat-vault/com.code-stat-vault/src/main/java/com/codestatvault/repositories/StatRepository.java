package com.codestatvault.repositories;

import com.codestatvault.models.DummyModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatRepository extends MongoRepository<DummyModel, String> {

}
