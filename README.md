# ✈️ Airline Booking System – Microservices Backend Project

A production-ready backend system designed using **Node.js**, **Sequelize ORM**, and **MySQL**, following a **microservices architecture**. This project simulates a real-world airline booking platform with flight scheduling, seat management, secure bookings, payment processing, and automated job handling using cron jobs.

---

##  Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Architecture**: Microservices (Flight Service & Booking Service)
- **Utilities**: Cron Jobs, Row-Level Locking, Transactions, Idempotency Keys
- **Testing Tools**: Postman

---

##  Microservices Structure

### 1. 🚀 Flight Service
Manages all core entities:

- **Models**: Cities, Airports, Airplanes, Flights, Seats
- **Features**:
  - Fully connected using **foreign keys**
  - **CRUD operations** for all models

### 2. 📦 Booking Service
Handles booking and payments:

- **Booking Creation**
- **Seat Locking Mechanism** using transactions and row-level locks
- **Payment Integration** with **idempotency key** logic
- **Cron Jobs** for:
  - Auto-cancelling expired bookings
  - Releasing locked seats

---

## 💡 Key Features

-  **Concurrency-safe Booking**: Seat-level locking using DB transactions
-  **Automated Booking Management**: Cron job to cancel bookings if payment isn’t completed
-  **Idempotent Payment Handling**: Avoids duplicate payment processing
-  **Fault Tolerance**: Booking system works independently of flight service uptime
-  **Clean & Modular Codebase** for easy scalability and testing

---

## 📁 Project Structure

