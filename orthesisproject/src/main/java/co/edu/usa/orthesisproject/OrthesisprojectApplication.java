package co.edu.usa.orthesisproject;

import co.edu.usa.orthesisproject.modelo.Category;
import co.edu.usa.orthesisproject.modelo.Client;
import co.edu.usa.orthesisproject.modelo.Message;
import co.edu.usa.orthesisproject.modelo.Ortopedic;
import co.edu.usa.orthesisproject.modelo.Reservation;
import co.edu.usa.orthesisproject.repositorios.CategoryRepository;
import co.edu.usa.orthesisproject.repositorios.ClientRepository;
import co.edu.usa.orthesisproject.repositorios.MessageRepository;
import co.edu.usa.orthesisproject.repositorios.OrtopedicRepository;
import co.edu.usa.orthesisproject.repositorios.ReservationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"co.edu.usa.orthesisproject"})
public class OrthesisprojectApplication {

    @Autowired
    private OrtopedicRepository repoOrtopedic;
    @Autowired
    private CategoryRepository repoCategory;
    @Autowired
    private ClientRepository repoClient;
    @Autowired
    private MessageRepository repoMessage;
    @Autowired
    private ReservationRepository repoReservation;
    
	public static void main(String[] args) {
		SpringApplication.run(OrthesisprojectApplication.class, args);
	}
      
    @Bean
    ApplicationRunner applicationRunner() {
        return args -> {
            List<Ortopedic> or = repoOrtopedic.getAll();
            System.out.println("Ortopedic: "+or.size());
            
            List<Category> cr = repoCategory.getAll();
            System.out.println("Category: "+cr.size());
            
            List<Client> clr = repoClient.getAll();
            System.out.println("Client: "+clr.size());
            
            List<Message> mr = repoMessage.getAll();
            System.out.println("Message: "+mr.size());
            
            List<Reservation> rr = repoReservation.getAll();
            System.out.println("Reservation: "+rr.size());
        };
    }
}
