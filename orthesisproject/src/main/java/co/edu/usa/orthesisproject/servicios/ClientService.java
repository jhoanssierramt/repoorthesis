/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.servicios;

import co.edu.usa.orthesisproject.modelo.Client;
import co.edu.usa.orthesisproject.modelo.custom.CountClient;
import co.edu.usa.orthesisproject.repositorios.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jeison Altamar
 */
@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;
    
    public List<Client> getAll(){
        return clientRepository.getAll();
    }
    
    public Client save(Client client){
        return clientRepository.save(client);
    }
    
//    public Client getById(int id){
//        Optional<Client> client = clientRepository.getById(id);
//        return client.orElse(new Client());
//        if (client.isPresent()){
//            return client.get();
//        }else{
//            return new Client();
//        }
//    }
    
    public Optional<Client> getById(int id) {                   //modificado
        Optional<Client> Client = clientRepository.getById(id);
        return Client;
    }    
    
    public boolean delete(int id){
        System.out.println("deleting Categoria with id: "+id);
        boolean del = clientRepository.getById(id).map(Client -> {
            clientRepository.delete(Client);
            return true;
        }).orElse(false);
        return del;       
    }
    
    public Client update(Client client) {
        if (client.getName() != null) {
            Optional<Client> clientConsultada = clientRepository.getById(client.getIdClient());
            if (clientConsultada.isPresent()) {
                
                if (client.getName() != null) {
                    clientConsultada.get().setName(client.getName());
                }
                
                if (client.getEmail() != null) {
                    clientConsultada.get().setEmail(client.getEmail());
                }
                
                if (client.getPassword() != null) {
                    clientConsultada.get().setPassword(client.getPassword());
                }
                
                if (client.getAge() != null) {
                    clientConsultada.get().setAge(client.getAge());
                }
                
                return clientRepository.save(clientConsultada.get());
            }
            
        }
        return client;
    }
}

