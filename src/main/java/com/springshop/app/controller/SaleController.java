package com.springshop.app.controller;

import com.springshop.app.model.Sale;
import com.springshop.app.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleController {

    private final SaleService saleService;

    @Autowired
    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping("/all")
    public List<Sale> getAllSales() {
        return saleService.getAllSales();
    }

    @GetMapping("/search/{id}")
    public Sale getSaleById(@PathVariable int id) {
        return saleService.getSaleById(id);
    }

    @PostMapping("/add")
    public Sale addSale(@RequestBody Sale sale) {
        return saleService.addSale(sale);
    }

    @PutMapping("/update/{id}")
    public Sale updateSale(@PathVariable int id, @RequestBody Sale updatedSale) {
        return saleService.updateSale(id, updatedSale);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSale(@PathVariable int id) {
        saleService.deleteSale(id);
    }
}