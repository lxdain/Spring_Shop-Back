package com.springshop.app.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "customers", schema = "springular_shop")
public class Customer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private int customerId;
    private String customerImage;
    private String customerName;
    @Temporal(TemporalType.DATE)
    private Date customerDob;
    private String customerAddress;
    private String customerPhone;
    private String customerEmail;
    private String customerCreditCard;

    public Customer() {}

    public Customer(int customerId, String customerImage, String customerName, Date customerDob, String customerAddress, String customerPhone, String customerEmail, String customerCreditCard) {
        this.customerId = customerId;
        this.customerImage = customerImage;
        this.customerName = customerName;
        this.customerDob = customerDob;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
        this.customerEmail = customerEmail;
        this.customerCreditCard = customerCreditCard;
    }

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

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerImage='" + customerImage + '\'' +
                ", customerName='" + customerName + '\'' +
                ", customerDob=" + customerDob +
                ", customerAddress='" + customerAddress + '\'' +
                ", customerPhone='" + customerPhone + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerCreditCard='" + customerCreditCard + '\'' +
                '}';
    }
}