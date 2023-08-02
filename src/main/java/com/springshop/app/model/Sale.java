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

    @ElementCollection
    @CollectionTable(name = "sale_products", joinColumns = @JoinColumn(name = "sale_id"))
    @Column(name = "product_id")
    private List<Integer> productIds;

    private float saleItemPrice;
    private float saleTotal;

    // Constructors

    public Sale() {}

    public Sale(int saleId, Date saleDate, Customer customer, List<Integer> productIds, float saleItemPrice, float saleTotal) {
        this.saleId = saleId;
        this.saleDate = saleDate;
        this.customer = customer;
        this.productIds = productIds;
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

    public List<Integer> getProductIds() {
        return productIds;
    }

    public void setProductIds(List<Integer> productIds) {
        this.productIds = productIds;
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
                ", productIds=" + productIds +
                ", saleItemPrice=" + saleItemPrice +
                ", saleTotal=" + saleTotal +
                '}';
    }
}