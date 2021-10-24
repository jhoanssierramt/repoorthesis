/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.orthesisproject.servicios;

import co.edu.usa.orthesisproject.modelo.Reservation;
import co.edu.usa.orthesisproject.repositorios.ReservationRepository;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    
    public Reservation save(Reservation reservation){
        //Lógica idReservation no nulo:
        if (reservation.getIdReservation() != null) {
            
            //Criterio de aceptación: idClient debe ser un valor númerico entero:
            //Criterio de aceptación: id (Orthesis) debe ser un valor numérico entero:
            if((reservation.getClient().getIdClient() == (int)reservation.getClient().getIdClient())
                    && (reservation.getOrtopedic().getId() == (int)reservation.getOrtopedic().getId()))
            {
                //Criterio de aceptación: La fecha de creación debe ser tomada del reloj del sistema.
                SimpleDateFormat formatoDelReto = new SimpleDateFormat("yyyy-MM-dd");
                String fechaString = formatoDelReto.format(new Date());
                System.out.println("Current date: " + fechaString);
                
                //El siguiente try-catch se hace por protocolo, pero se sabe que nunca va a fallar:
                try
                {
                    Date fechaActual = formatoDelReto.parse(fechaString);
                    //Se añade al query la fecha actual del sistema:
                    reservation.setStartDate(fechaActual);
                }
                catch(Exception e)
                {
                    System.out.println("Error al transformar la fecha de inicio: "+e);
                    return reservation;
                }
                
                //Criterio de aceptación: Fecha inicio y Fecha entrega deben ser fechas en el formato yyyy-MM-dd.
                Date posibleFechaErrada = reservation.getDevolutionDate();
                String fechaCorregidaString = formatoDelReto.format(posibleFechaErrada);
                
                //En cambio este try-catch es posible que falle en algún momento:
                try
                {
                    Date fechaEntregaCorregida = formatoDelReto.parse(fechaCorregidaString);
                    //Se añade al query la fecha entrega con el formato requerido por el Reto:
                    reservation.setDevolutionDate(fechaEntregaCorregida);
                }
                catch(Exception e)
                {
                    System.out.println("Error al transformar la fecha de entrega: "+e);
                    return reservation;
                }
            }
            
            //Si todo funciona se realiza el POST:
            return ReservationRepository.save(reservation);
        }
        return reservation;
    }
    
    public Optional<Reservation> getById(int id){
        Optional<Reservation> reservation = ReservationRepository.getById(id);
        return reservation;
        //return Reservation.orElse(new Reservation());
//        if (client.isPresent()){
//            return client.get();
//        }else{
//            return new Client();
//        }
    }
    
    public boolean delete(int id) {
        System.out.println("deleting Reservation with id: " + id);
        boolean del = ReservationRepository.getById(id).map(reserva -> {
            ReservationRepository.delete(reserva);
            return true;
        }).orElse(false);
        return del;
    }

    public Reservation update(Reservation reservation) {
        if (reservation.getIdReservation() != null) {
            Optional<Reservation> reservaConsultada = ReservationRepository.getById(reservation.getIdReservation());
            if (reservaConsultada.isPresent()) {
                
                //AQUI VA LA LÓGICA DEL NEGOCIO:////////
                SimpleDateFormat formatoDelReto = new SimpleDateFormat("yyyy-MM-dd");
                Date fechaInicio = reservation.getStartDate();
                Date fechaEntrega = reservation.getDevolutionDate();
                
                //Aunque estas fechas son inicializadas con las fechas por defecto.
                //mas adelante se cambia sus valores con el formato adecuado
                Date fechaInicioConFormato = fechaInicio;
                Date fechaEntregaConFormato = fechaEntrega;
                
                if(reservation.getStartDate()!=null){
                    //reservaConsultada.get().setStartDate(reservation.getStartDate());
                    //Criterio de aceptación: Fecha inicio debe tener formato yyyy-MM-dd.
                    
                    String fechaInicioString = formatoDelReto.format(fechaInicio);

                    try
                    {
                        fechaInicioConFormato = formatoDelReto.parse(fechaInicioString);
                        //Se añade al query la fecha inicio con el formato requerido por el Reto:
                        reservaConsultada.get().setStartDate(fechaInicioConFormato);
                    }
                    catch(Exception e)
                    {
                        System.out.println("Error al transformar la fecha de inicio: "+e);
                        return reservation;
                    }
                }
                if(reservation.getDevolutionDate()!=null){
                    //reservaConsultada.get().setDevolutionDate(reservation.getDevolutionDate());
                     //Criterio de aceptación: Fecha entrega debe tener formato yyyy-MM-dd.
                    
                    String fechaEntregaString = formatoDelReto.format(fechaEntrega);

                    try
                    {
                        fechaEntregaConFormato = formatoDelReto.parse(fechaEntregaString);
                        //Se añade al query la fecha entrega con el formato requerido por el Reto:
                        reservaConsultada.get().setDevolutionDate(fechaEntregaConFormato);
                    }
                    catch(Exception e)
                    {
                        System.out.println("Error al transformar la fecha de entrega: "+e);
                        return reservation;
                    }
                }
                
                //Criterio de aceptación: Fecha inicio debe ser anterior a la fecha entrega:
                if(fechaInicioConFormato.before(fechaEntregaConFormato))
                    System.out.println("La fecha de inicio es menor que la fecha de entrega. Ok");
                else
                    return reservation;
                    
                
                if(reservation.getStatus()!=null){
                    //reservaConsultada.get().setStatus(reservation.getStatus());
                    //Criterio de aceptación: Status debe ser "Programado", "cancelado" o "Realizado":
                    String statusQuery = reservation.getStatus();
                    if((statusQuery=="Programado")||(statusQuery=="cancelado")||(statusQuery=="Realizado"))
                        reservaConsultada.get().setStatus(statusQuery);
                    else
                        return reservation;
                }               
                
                ///FIN LÓGICA//////////////////////////////////
                return ReservationRepository.save(reservaConsultada.get());
            }
        }
        return reservation;
    }
}
