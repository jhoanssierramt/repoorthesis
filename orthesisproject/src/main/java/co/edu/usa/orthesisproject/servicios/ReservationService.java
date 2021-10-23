/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.servicios;

import co.edu.usa.orthesisproject.modelo.Reservation;
import co.edu.usa.orthesisproject.repositorios.ReservationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Y40-70
 */
@Service
public class ReservationService {
    @Autowired
    private ReservationRepository ReservationRepository;
    
    public List<Reservation> getAll(){
        return ReservationRepository.getAll();
    }
    
    public Reservation save(Reservation Reservation){
        return ReservationRepository.save(Reservation);
    }
    
    public Reservation getById(int id){
        Optional<Reservation> Reservation = ReservationRepository.getById(id);
        return Reservation.orElse(new Reservation());
//        if (client.isPresent()){
//            return client.get();
//        }else{
//            return new Client();
//        }
    }
}
