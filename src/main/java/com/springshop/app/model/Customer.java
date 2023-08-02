package com.springshop.app.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private int customerId;
    private String customerImage;
    private String customerName;
    private char customerGender;
    private Date customerDob;
    private String customerAddress;
    private String customerPhone;
    private String customerEmail;
    private String customerCreditCard;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private List<Product> customerOrderHistory;

    public Customer() {}

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getCustomerImage() {
        return customerImage;
    }

    public void setCustomerImage(String customerImage) {
        this.customerImage = customerImage;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public char getCustomerGender() {
        return customerGender;
    }

    public void setCustomerGender(char customerGender) {
        if (customerGender == 'm' || customerGender == 'f') {
            this.customerGender = customerGender;
        } else {
            throw new IllegalArgumentException("Invalid gender. Gender must be male or female.");
        }
    }

    public Date getCustomerDob() {
        return customerDob;
    }

    public void setCustomerDob(Date customerDob) {
        this.customerDob = customerDob;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerCreditCard() {
        return customerCreditCard;
    }

    public void setCustomerCreditCard(String customerCreditCard) {
        this.customerCreditCard = customerCreditCard;
    }

    public List<Product> getCustomerOrderHistory() {
        return customerOrderHistory;
    }

    public void setCustomerOrderHistory(List<Product> customerOrderHistory) {
        this.customerOrderHistory = customerOrderHistory;
    }

    public Customer(int customerId, String customerImage, String customerName, char customerGender, Date customerDob, String customerAddress, String customerPhone, String customerEmail, String customerCreditCard, List<Product> customerOrderHistory) {
        this.customerId = customerId;
        this.customerImage = customerImage;
        this.customerName = customerName;
        this.customerGender = customerGender;
        this.customerDob = customerDob;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
        this.customerEmail = customerEmail;
        this.customerCreditCard = customerCreditCard;
        this.customerOrderHistory = customerOrderHistory;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerImage='" + customerImage + '\'' +
                ", customerName='" + customerName + '\'' +
                ", customerGender=" + customerGender +
                ", customerDob=" + customerDob +
                ", customerAddress='" + customerAddress + '\'' +
                ", customerPhone=" + customerPhone +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerCreditCard='" + customerCreditCard + '\'' +
                ", customerOrderHistory=" + customerOrderHistory +
                '}';
    }
}