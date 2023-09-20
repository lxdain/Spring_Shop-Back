package com.springshop.app.service;

import com.springshop.app.exception.SaleNotFoundException;
import com.springshop.app.model.Sale;
import com.springshop.app.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    @Autowired
    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }

    public Sale getSaleById(int id) {
        return saleRepository.findById(id)
                .orElseThrow(() -> new SaleNotFoundException("Sale with ID " + id + " not found."));
    }

    public Sale addSale(Sale sale) {
        return saleRepository.save(sale);
    }

//    public Sale updateSale(int id, Sale updatedSale) {
//        Sale existingSale = getSaleById(id);
//        if (existingSale == null) {
//            throw new SaleNotFoundException("Sale not found with id: " + id);
//        }
//
//        existingSale.setSaleDate(updatedSale.getSaleDate());
//        existingSale.setProductPrice(updatedSale.getProduct().getProductPrice()); // Update productPrice
//        existingSale.setTotalPrice(updatedSale.getTotalPrice()); // Update total price
//
//        return saleRepository.save(existingSale);
//    }

    public Sale updateSale(int id, Sale updatedSale) {
        Sale existingSale = getSaleById(id);
        if (existingSale == null) {
            throw new SaleNotFoundException("Sale not found with id: " + id);
        }

        // Update saleDate
        existingSale.setSaleDate(updatedSale.getSaleDate());

        // Update productPrice from the associated Product
        existingSale.setProduct(updatedSale.getProduct()); // Update the associated Product

        // Recalculate totalPrice based on the updated productPrice and quantity
        existingSale.setTotalPrice(existingSale.calculateTotalPrice());

        return saleRepository.save(existingSale);
    }

    public void deleteSale(int id) {
        Sale existingSale = getSaleById(id);
        if (existingSale == null) {
            throw new SaleNotFoundException("Sale not found with id: " + id);
        } else {
            saleRepository.deleteById(id);
        }
    }
}