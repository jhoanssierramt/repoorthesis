package co.edu.usa.semana3g26;

import co.edu.usa.semana3g26.modelo.Categoria;
import co.edu.usa.semana3g26.modelo.Producto;
import co.edu.usa.semana3g26.repositorios.CategoriaRepository;
import co.edu.usa.semana3g26.repositorios.ProductoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"co.edu.usa.semana3g26"})
public class Semana3G26Application {

    @Autowired
    private ProductoRepository repoProducto;
    @Autowired
    private CategoriaRepository repoCategoria;
    
    public static void main(String[] args) {
        SpringApplication.run(Semana3G26Application.class, args);
    }
    
    @Bean
    ApplicationRunner applicationRunner() {
        return args -> {
            List<Producto> ps = repoProducto.getAll();
            System.out.println("Productos: "+ps.size());
            
            List<Categoria> cs = repoCategoria.getAll();
            System.out.println("Categorias: "+cs.size());
        };
    }

}
