package com.springshop.app.service;

import com.springshop.app.exception.CustomerNotFoundException;
import com.springshop.app.model.Customer;
import com.springshop.app.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(int id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        return optionalCustomer.orElseThrow(() -> new CustomerNotFoundException("Customer with ID " + id + " not found."));
    }

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(int id, Customer customer) {
        Customer existingCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Customer with ID " + id + " not found."));

        existingCustomer.setCustomerImage(customer.getCustomerImage());
        existingCustomer.setCustomerName(customer.getCustomerName());
        existingCustomer.setCustomerGender(customer.getCustomerGender());
        existingCustomer.setCustomerDob(customer.getCustomerDob());
        existingCustomer.setCustomerAddress(customer.getCustomerAddress());
        existingCustomer.setCustomerPhone(customer.getCustomerPhone());
        existingCustomer.setCustomerEmail(customer.getCustomerEmail());
        existingCustomer.setCustomerCreditCard(customer.getCustomerCreditCard());

        return customerRepository.save(existingCustomer);
    }

    public void deleteCustomerById(int id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            customerRepository.deleteById(id);
        } else {
            throw new CustomerNotFoundException("Customer with ID " + id + " not found.");
        }
    }
}