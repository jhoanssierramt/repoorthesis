/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.repositorios;

import co.edu.usa.orthesisproject.modelo.Client;
import co.edu.usa.orthesisproject.modelo.Reservation;
import co.edu.usa.orthesisproject.modelo.custom.CountClient;
import co.edu.usa.orthesisproject.modelo.custom.CountStatusReservation;
import co.edu.usa.orthesisproject.repositorios.crud.ClientCrudRepository;
import co.edu.usa.orthesisproject.repositorios.crud.ReservationCrudRepository;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jhoan Sierra
 */
@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrudRepository crud;
    
    @Autowired
    private ClientCrudRepository crudClient;
    
    public List<Reservation> getAll(){
        return (List<Reservation>) crud.findAll();
    }
    public Optional<Reservation> getById(int id){
        return crud.findById(id);
    }

    public Reservation save(Reservation reservation){
        return crud.save(reservation);
    }
    public void delete(Reservation reservation){
       crud.delete(reservation);
    }
     public List<Reservation> getReservationByPeriod(Date a, Date b) {
        return crud.findAllByStartDateAfterAndDevolutionDateBefore(a, b);
    }
     
    public CountStatusReservation getCountStatusReservation() {
        Integer reporteCompletado = crud.obtenerTipoReservas("completed");
        Integer reporteCancelado = crud.obtenerTipoReservas("cancelled");
        
        return new CountStatusReservation(reporteCompletado,reporteCancelado);
    }
    
    public List<CountClient> getReservationByClient(){       
        List<CountClient> resultado = new ArrayList<>();
        List<Client> subReporte = (List<Client>) crudClient.findAll();
        
        for (int i = 0; i < subReporte.size(); i++) {
            Client linea = subReporte.get(i);
            Integer total = crud.obtenerReservasCliente(linea.getIdClient());
            resultado.add(new CountClient(total,linea));
        }
        resultado.sort(Comparator.comparing(CountClient::getTotal).reversed());
        return resultado;  
    }
}
