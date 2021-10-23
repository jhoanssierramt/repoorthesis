/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios;

import co.edu.usa.orthesisproject.modelo.Message;
import co.edu.usa.orthesisproject.repositorios.crud.MessageCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Santiago
 */
@Repository
public class MessageRepository {
    @Autowired
    private MessageCrudRepository crud;
    
    public List<Message> getAll(){
        return (List<Message>) crud.findAll();
    }
    public Optional<Message> getById(int id){
        return crud.findById(id);
    }

    public Message save(Message Message){
        return crud.save(Message);
    }
    public void delete(Message Message){
       crud.delete(Message);
    }
    
}
