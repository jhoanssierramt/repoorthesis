/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.web;

import co.edu.usa.orthesisproject.modelo.Reservation;
import co.edu.usa.orthesisproject.modelo.custom.CountClient;
import co.edu.usa.orthesisproject.modelo.custom.CountStatusReservation;
import co.edu.usa.orthesisproject.servicios.ReservationService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jhoan Sierra
 */
@RestController
@RequestMapping("/api/Reservation")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    
    @GetMapping("/all")
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Reservation> getById(@PathVariable("id") int id) {
        return reservationService.getById(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation reservation){
        return reservationService.save(reservation);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") int id) {
        return new ResponseEntity<>(reservationService.delete(id), HttpStatus.NO_CONTENT);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation reservation) {
        return reservationService.update(reservation);
    }
    
    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getReservationReportDates(@PathVariable("dateOne") String dateOne, @PathVariable("dateTwo") String dateTwo) {
        return reservationService.getReservationByPeriod(dateOne, dateTwo);
    }
    @GetMapping("/report-status")
    public CountStatusReservation getCountReservation() {
        return reservationService.getCountStatusReservation();
    }
    
    @GetMapping("/report-clients")
    public List<CountClient> getReservationByClient() {
        return reservationService.getReservationByClient();
    }
}
