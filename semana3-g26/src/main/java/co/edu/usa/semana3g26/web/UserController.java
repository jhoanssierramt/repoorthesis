/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.semana3g26.web;

import java.util.Collections;
import java.util.Map;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author juvinao
 */
@RestController
public class UserController {

    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        //return principal.getAttributes(); <=NO SE RECOMIENDA! EXPONE DATOS PRIVADOS
        //        for (Map.Entry<String, Object> entry : principal.getAttributes().entrySet()) {
//            System.out.println(entry.getKey() + ":" + entry.getValue());
//        }

        return Collections.singletonMap("name", principal.getAttribute("name"));
    }

}