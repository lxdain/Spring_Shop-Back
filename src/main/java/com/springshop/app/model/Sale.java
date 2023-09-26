package com.springshop.app.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "sales", schema = "springular_shop")
public class Sale implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int id;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private int quantity;
    @Temporal(TemporalType.DATE)
    private Date saleDate;
    private double totalPrice;

    public Sale() {}

    public Sale(Customer customer, Product product, int quantity, Date saleDate) {
        this.customer = customer;
        this.product = product;
        this.quantity = quantity;
        this.saleDate = saleDate;
        this.totalPrice = calculateTotalPrice();
    }

    public double calculateTotalPrice() {
        return product.getProductPrice() * quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Date getSaleDate() {
        return saleDate;
    }

    public void setSaleDate(Date saleDate) {
        this.saleDate = saleDate;
    }

    public double getTotalPrice() {
        return calculateTotalPrice();
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = calculateTotalPrice();
    }

    @Override
    public String toString() {
        return "Sale{" +
                "id=" + id +
                ", customer=" + customer +
                ", product=" + product +
                ", quantity=" + quantity +
                ", saleDate=" + saleDate +
                ", totalPrice=" + totalPrice +
                '}';
    }
}