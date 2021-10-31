/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios;

import co.edu.usa.orthesisproject.modelo.Client;
import co.edu.usa.orthesisproject.repositorios.crud.ClientCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jeison Altamar
 */
@Repository
public class ClientRepository {
    @Autowired
    private ClientCrudRepository crud;
    
    public List<Client> getAll(){
        return (List<Client>) crud.findAll();
    }
    
    public Optional<Client> getById(int id){    //modificado
        return crud.findById(id);
    }

    public Client save(Client Client){
        return crud.save(Client);
    }
    
    public void delete(Client Client){
       crud.delete(Client);
    }
    
}
