/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios.crud;

import co.edu.usa.orthesisproject.modelo.Client;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Jeison Altamar
 */
public interface ClientCrudRepository extends CrudRepository<Client,Integer>{
    
}
