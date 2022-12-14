package com.hamitmizrak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//exclude:dahil etmemek
@SpringBootApplication(exclude = {
        //SecurityAutoConfiguration.class
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        // org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class
}
)
//@SpringBootApplication
public class BilgincJavaScriptApplication {

    public static void main(String[] args) {
        SpringApplication.run(BilgincJavaScriptApplication.class, args);
    }

}
