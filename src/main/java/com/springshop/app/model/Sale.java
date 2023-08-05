package com.springshop.app.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "sales")
public class Sale implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private int saleId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date saleDate;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToMany
    @JoinTable(
            name = "sale_product",
            joinColumns = @JoinColumn(name = "sale_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products;

    private float saleItemPrice;
    private float saleTotal;

    // Constructors

    public Sale() {
    }

    public Sale(int saleId, Date saleDate, Customer customer, List<Product> products, float saleItemPrice, float saleTotal) {
        this.saleId = saleId;
        this.saleDate = saleDate;
        this.customer = customer;
        this.products = products;
        this.saleItemPrice = saleItemPrice;
        this.saleTotal = saleTotal;
    }

    // Getters and Setters

    public int getSaleId() {
        return saleId;
    }

    public void setSaleId(int saleId) {
        this.saleId = saleId;
    }

    public Date getSaleDate() {
        return saleDate;
    }

    public void setSaleDate(Date saleDate) {
        this.saleDate = saleDate;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public float getSaleItemPrice() {
        return saleItemPrice;
    }

    public void setSaleItemPrice(float saleItemPrice) {
        this.saleItemPrice = saleItemPrice;
    }

    public float getSaleTotal() {
        return saleTotal;
    }

    public void setSaleTotal(float saleTotal) {
        this.saleTotal = saleTotal;
    }

    @Override
    public String toString() {
        return "Sale{" +
                "saleId=" + saleId +
                ", saleDate=" + saleDate +
                ", customer=" + customer +
                ", products=" + products +
                ", saleItemPrice=" + saleItemPrice +
                ", saleTotal=" + saleTotal +
                '}';
    }
}