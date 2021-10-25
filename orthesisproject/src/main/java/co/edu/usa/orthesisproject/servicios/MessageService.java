/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.servicios;

import co.edu.usa.orthesisproject.modelo.Message;
import co.edu.usa.orthesisproject.repositorios.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Santiago
 */
@Service
public class MessageService {

    @Autowired
    private MessageRepository MessageRepository;

    public List<Message> getAll() {
        return MessageRepository.getAll();
    }

    public Message save(Message Message) {
        return MessageRepository.save(Message);
    }

    public Optional<Message> getById(int id) {
        Optional<Message> Message = MessageRepository.getById(id);
        return Message;
       // return Message.orElse(new Message());
//        if (client.isPresent()){
//            return client.get();
//        }else{
//            return new Client();
//        }
    }
    ///////////////////////////////////////////////////////////////////////

    public boolean delete(int id) {
        Boolean d = MessageRepository.getById(id).map(message -> {
            MessageRepository.delete(message);
            return true;
        }).orElse(false);
        return d;

    }

    public Message update(Message message) {
        if (message.getIdMessage() != null) {
            Optional<Message> cat = MessageRepository.getById(message.getIdMessage());
            return MessageRepository.save(message);
        }
        return message;
    }
}
