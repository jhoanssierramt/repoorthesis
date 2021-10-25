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
        
        //Criterio de aceptación: El valor de nombre debe ser un texto de no más de 45 caracteres.
        //Criterio de aceptación: El valor de descripción debe ser un texto de máximo 250 caracteres.
        if((category.getName().length()<=45)&&(category.getDescription().length()<=250))
            return categoryRepository.save(category);
        else
            return category;
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
            Optional<Category> categoriaConsultada = categoryRepository.getById(category.getId());
            if (categoriaConsultada.isPresent()) {
                
                //AQUI VA LA LÓGICA DEL NEGOCIO:////////
                
                //Criterio de aceptación: El valor de nombre debe ser un texto de no más de 45 caracteres.
                //También debe ser un valor no nulo.
                if((category.getName()!=null)&&(category.getName().length()<=45))
                    categoriaConsultada.get().setName(category.getName());
                //Criterio de aceptación: El valor de descripción debe ser un texto de máximo 250 caracteres.
                //También debe ser un valor no nulo.
                if((category.getDescription()!=null)&&(category.getDescription().length()<=250))
                    categoriaConsultada.get().setDescription(category.getDescription());
                
                ///FIN LÓGICA//////////////////////////////////
                return categoryRepository.save(categoriaConsultada.get());
            }
        }
        return category;
    }
}
