/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.semana3g26.repositorios.crud;

import co.edu.usa.semana3g26.modelo.Compra;
import java.util.Date;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author juvinao
 */
public interface CompraCrudRepository extends CrudRepository<Compra, Integer> {
    
    //@Query("Select c from Compra AS c where c.fechaCompra > ?1 AND c.fechaCompra <?2")
    public List<Compra> findAllByFechaCompraAfterAndFechaCompraBefore(Date dateOne, Date dateTwo);
    
}
