/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.semana3g26.servicios;

import co.edu.usa.semana3g26.modelo.Categoria;
import co.edu.usa.semana3g26.repositorios.CategoriaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author juvinao
 */
@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> getAll() {
        return categoriaRepository.getAll();
    }

    public Categoria save(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public Categoria getById(int id) {
        Optional<Categoria> categoria = categoriaRepository.getById(id);
        return categoria.orElse(new Categoria());
//        if (categoria.isPresent()){
//            return categoria.get();
//        }else{
//            return new Categoria();
//        }
    }

    public boolean delete(int id) {
        System.out.println("deleting Categoria with id: " + id);
        boolean del = categoriaRepository.getById(id).map(categoria -> {
            categoriaRepository.delete(categoria);
            return true;
        }).orElse(false);
        return del;
    }

    public Categoria update(Categoria categoria) {
        if (categoria.getCodigo() != null) {
            Optional<Categoria> categoriaConsultada = categoriaRepository.getById(categoria.getCodigo());
            if (categoriaConsultada.isPresent()) {
                if (categoria.getNombre() != null) {
                    categoriaConsultada.get().setNombre(categoria.getNombre());
                }
                return categoriaRepository.save(categoriaConsultada.get());
            }
        }
        return categoria;
    }

}
