/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.edu.usa.orthesisproject.web;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Santiago
 */
@RestController
public class UserController {

    @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        //return principal.getAttributes(); <=NO SE RECOMIENDA! EXPONE DATOS PRIVADOS
//        for (Map.Entry<String, Object> entry : principal.getAttributes().entrySet()) {
//            System.out.println(entry.getKey() + ":" + entry.getValue());
//        }
//
//        return Collections.singletonMap("name", principal.getAttribute("name"));

        Map<String, Object> map = new HashMap<>();
        map.put("name", principal.getAttribute("name"));
        map.put("username", principal.getAttribute("login"));
        map.put("avatar_url", principal.getAttribute("avatar_url"));
        return map;
    }
}
