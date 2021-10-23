/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios.crud;


import co.edu.usa.orthesisproject.modelo.Category;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author henry
 */
public interface CategoryCrudRepository extends CrudRepository<Category,Integer> {
    
}
