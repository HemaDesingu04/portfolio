package com.portfolio.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${mail.to}")
    private String mailTo;

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> sendEmail(@RequestBody ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailTo);
        message.setSubject("Portfolio Message from " + request.getName());
        message.setText(
            "Name: " + request.getName() + "\n" +
            "Email: " + request.getEmail() + "\n\n" +
            "Message:\n" + request.getMessage()
        );
        message.setReplyTo(request.getEmail());
        mailSender.send(message);
        return ResponseEntity.ok(Map.of("status", "Message sent successfully"));
    }
}
