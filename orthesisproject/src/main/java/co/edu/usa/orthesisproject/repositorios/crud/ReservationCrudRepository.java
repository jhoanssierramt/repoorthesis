/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios.crud;

import co.edu.usa.orthesisproject.modelo.Reservation;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Jhoan Sierra
 */
public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer>{
    
     //@Query("Select c from Compra AS c where c.fechaCompra > ?1 AND c.fechaCompra <?2")
    public List<Reservation> findAllByStartDateAfterAndDevolutionDateBefore(Date dateOne, Date dateTwo);
    
    @Query(value ="Select count(r.status) from reservation AS r where r.status like ?", nativeQuery=true)
    public Integer obtenerTipoReservas(String status);   
    
    @Query(value = "SELECT count(r.idClient) FROM reservation AS r where r.idClient = ?", nativeQuery=true)
    public Integer obtenerReservasCliente(Integer idClient); 
}
