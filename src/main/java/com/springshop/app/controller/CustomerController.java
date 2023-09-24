package com.springshop.app.controller;

import com.springshop.app.model.Customer;
import com.springshop.app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/all")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/search/{id}")
    public Customer getCustomerById(@PathVariable int id) {
        return customerService.getCustomerById(id);
    }

    @PostMapping("/add")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @PutMapping("/update/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCustomer(@PathVariable int id) {
        System.out.println("Deleting customer with ID: " + id);
        customerService.deleteCustomerById(id);
    }
}