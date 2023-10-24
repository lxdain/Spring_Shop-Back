# Springular Shop
 This is a full-stack mock web-shop project.
 
 The project utilizes Angular, Boostrap, Spring Boot, Java & MySQL.

 ## Setup & Run
 The first time you clone and try to run the project you might run into some issues booting it up so let's start from the beginning.
 1) Make sure to set the appropriate JDK, here I used ***Temurin JDK v17.0.8***.
 2) Make sure to mark the ```src``` folder as ```Sources Root``` folder.
 3) Make sure to create a MySQL schema called ```springular_shop```, here is the necessary **SQL create schema command**:
    ```SQL
    CREATE DATABASE `springular_shop`;
    ```
    The necessary tables will get created automatically due to Spring Boot's utilization of Hibernate, so you don't need to worry about that!
4) Make sure to run ```npm install -g @angular/cli``` on your terminal to install Angular globally on your machine.
5) Make sure to navigate to ```src/angular``` and once again, just run an ```npm install``` command for the necessary packages to be installed.
6) Run the backend code (step 2 should have created a file called ```Springular-Shop.iml``` which will take care of setting up the project **in IntelliJ**, so you can simply click the Run command now and the server should start running).
7) Run the frontend code by entering ```ng serve``` into the terminal (you can use your IDE's terminal and make sure to navigate to ```src/angular``` beforehand, as shown previously in step 5).

## Developer Notes
In the near future I will try to Dockerize this project so that it runs smoothly on any enviroment.
