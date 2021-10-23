/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.servicios;

import co.edu.usa.orthesisproject.modelo.Ortopedic;
import co.edu.usa.orthesisproject.repositorios.OrtopedicRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author henry
 */
@Service
public class OrtopedicService {
    
    @Autowired
    private OrtopedicRepository OrtopedicRepository;
    
    public List<Ortopedic> getAll(){
        return OrtopedicRepository.getAll();
    }
    
    public Ortopedic save(Ortopedic Ortopedic){
        return OrtopedicRepository.save(Ortopedic);
    }
    
    public Ortopedic getById(int id){
        Optional<Ortopedic> Ortopedic = OrtopedicRepository.getById(id);
        return Ortopedic.orElse(new Ortopedic());
//        if (categoria.isPresent()){
//            return categoria.get();
//        }else{
//            return new Categoria();
//        }
    }
}

