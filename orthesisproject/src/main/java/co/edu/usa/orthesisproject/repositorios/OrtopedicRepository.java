/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios;

import co.edu.usa.orthesisproject.modelo.Ortopedic;
import co.edu.usa.orthesisproject.repositorios.crud.OrtopedicCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author henry
 */
@Repository
public class OrtopedicRepository {
    
    @Autowired
    private OrtopedicCrudRepository crud;
    public List<Ortopedic> getAll(){
        return (List<Ortopedic>) crud.findAll();
    }
    
    public Optional<Ortopedic> getById(int id){
        return crud.findById(id);
    }

    public Ortopedic save(Ortopedic Ortopedic){
        return crud.save(Ortopedic);
    }
    public void delete(Ortopedic Ortopedic){
       crud.delete(Ortopedic);
    }
    
}
