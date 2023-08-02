package com.springshop.app.service;

import com.springshop.app.exception.ProductNotFoundException;
import com.springshop.app.model.Product;
import com.springshop.app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        return optionalProduct.orElse(null);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(int id, Product updatedProduct) {
        Product existingProduct = getProductById(id);
        if (existingProduct == null) {
            throw new ProductNotFoundException("Product not found with id: " + id);
        }

        existingProduct.setProductName(updatedProduct.getProductName());
        existingProduct.setProductDescription(updatedProduct.getProductDescription());
        existingProduct.setProductImage(updatedProduct.getProductImage());
        existingProduct.setProductPrice(updatedProduct.getProductPrice());
        existingProduct.setProductQuantity(updatedProduct.getProductQuantity());

        return productRepository.save(existingProduct);
    }

    public void deleteProduct(int id) {
        Product existingProduct = getProductById(id);
        if (existingProduct == null) {
            throw new ProductNotFoundException("Product not found with id: " + id);
        } else {
            productRepository.deleteById(id);
        }
    }
}