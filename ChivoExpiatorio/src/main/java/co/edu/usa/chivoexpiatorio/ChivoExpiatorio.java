/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.chivoexpiatorio;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author Y40-70
 */
public class ChivoExpiatorio {
        public static void main(String[] args) {
            
            ///////Fecha de inicio:
            SimpleDateFormat formatoDelReto = new SimpleDateFormat("yyyy-MM-dd");
            String fechaString = formatoDelReto.format(new Date());
            try 
            {
                Date fechaActual = formatoDelReto.parse(fechaString);
                System.out.println("Fecha actual: "+formatoDelReto.format(fechaActual));
            }catch(Exception e)
            {
                System.out.println("Error al transformar fecha:"+e);
            }

            ///////Fecha de entrega:
            SimpleDateFormat formatoErrado = new SimpleDateFormat("yyyy-MMM-dd");
            String fechaErrada = formatoErrado.format(new Date());            
            try
            {
                Date fromFechaErrada = formatoErrado.parse(fechaErrada);
                String fechaCorregidaString = formatoDelReto.format(fromFechaErrada);
                System.out.println("Fecha corregida: "+fechaCorregidaString);
            }catch(Exception e)
            {
                System.out.println("Error al transformar fecha:"+e);
            }
	}
}
