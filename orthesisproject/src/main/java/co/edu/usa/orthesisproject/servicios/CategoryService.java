/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.servicios;

import co.edu.usa.orthesisproject.modelo.Category;
import co.edu.usa.orthesisproject.repositorios.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author henry
 */
@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    public List<Category> getAll(){
        return categoryRepository.getAll();
    }
    
    public Category save(Category category){
        return categoryRepository.save(category);
    }
    
    public Optional<Category> getById(int id){
        Optional<Category> category = categoryRepository.getById(id);
        return category;
        //return category.orElse(new Category());
//        if (categoria.isPresent()){
//            return categoria.get();
//        }else{
//            return new Categoria();
//        }
    }
    
    public boolean delete(int id) {
        System.out.println("deleting Reservation with id: " + id);
        boolean del = categoryRepository.getById(id).map(category -> {
            categoryRepository.delete(category);
            return true;
        }).orElse(false);
        return del;
    }

    public Category update(Category category) {
        if (category.getId() != null) {
            Optional<Category> reservaConsultada = categoryRepository.getById(category.getId());
            if (reservaConsultada.isPresent()) {
                
                //AQUI VA LA LÓGICA DEL NEGOCIO:////////
                
                if(category.getName()!=null){
                    reservaConsultada.get().setName(category.getName());
                }
                if(category.getDescription()!=null){
                    reservaConsultada.get().setDescription(category.getDescription());
                }
                
                
                ///FIN LÓGICA//////////////////////////////////
                return categoryRepository.save(reservaConsultada.get());
            }
        }
        return category;
    }
}
