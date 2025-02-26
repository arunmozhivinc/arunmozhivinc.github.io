---
author: Oct 2024 | present
pubDatetime: 2024-10-01T18:16:00.000Z
modDatetime: 
title: Transaction Monitoring System
featured: false
draft: false
tags:
  - FAQ
description: Transaction Monitoring System to check AML
---

The Transaction Monitoring System (TMS) is designed to track and analyze financial transactions in real-time or batch mode to identify suspicious activities, detect fraud, and ensure compliance with regulatory policies. The system applies business rules and **risk-based scoring models** to flag transactions for further review.

## Table of contents

## Technology Stack

| Technology           | Purpose                                      |
|----------------------|----------------------------------------------|
| Spring Boot (Java 17) | Backend framework for microservices         |
| React.js / Next.js   | Frontend for UI (if applicable)              |
| MySQL   | Relational database for storing transaction data |
| Git                 | Version control                              |
| Redux & TypeScript  | State management and frontend typing         |
| AWS                 | Cloud hosting, storage, and deployment       |


## Core Functionalities
### A. Transaction Processing
- Handles incoming transactions (from an external system, API, or batch file).
- Parses and validates transaction data (amount, sender, receiver, location, currency, etc.).
- Stores transaction details in the database.

### B. Rule-Based Risk Scoring
- Uses Drools Rules Engine to apply predefined AML rules.  
- Assigns a risk score to each transaction based on:  
  - **Customer Type** (e.g., Individual vs. Corporate)  
  - **Transaction Amount** (e.g., Large sum transfers)  
  - **Geographical Location** (e.g., High-risk countries)  
  - **Transaction Frequency** (e.g., Repeated transactions to the same account)  
  - **Sanctions List Check** (e.g., Whether sender/receiver is on a watchlist)  

### **C. Scenario Management**
- Allows admins to define **custom rules** for fraud detection.
- Supports different **scenarios** like:
  - "High-Value Transactions"
  - "Multiple Transactions to the Same Account in a Short Period"
  - "Unusual Cross-Border Transactions"

### **D. Alert Generation & Investigation**
- If a transaction is flagged, it generates an **alert**.
- Investigators can review flagged transactions manually.
- Integration with a **case management system** to track flagged transactions.

### **E. API & Integration**
- Exposes REST APIs for **third-party systems** to fetch transaction statuses.
- Swagger integration for API documentation.
- Webhooks for real-time notifications.

### **F. Reporting & Audit Logs**
- Generates compliance reports for regulators.
- Maintains a log of all **monitored transactions**.
- Tracks investigator actions (who reviewed which transaction and when).

---

## **4. Database Design**

### **Tables & Relationships**

| **Table**      | **Description**                                                               |
| -------------- | ----------------------------------------------------------------------------- |
| `transactions` | Stores transaction details (ID, amount, sender, receiver, risk score, status) |
| `customers`    | Stores customer details (ID, name, risk level)                                |
| `rules`        | Defines risk-scoring rules for transaction monitoring                         |
| `alerts`       | Stores flagged transactions that need investigation                           |
| `audit_logs`   | Tracks all actions on flagged transactions                                    |

### **No Direct Entity Relationships**
- You have designed the system **without defining direct entity relationships**, instead storing IDs as separate columns.
- This allows flexibility but requires careful query optimization.

---

## **5. System Workflow**

1. **Transaction Ingestion:**
   - Transactions are received via API or batch processing.
   - Data is validated and stored in the database.

2. **Risk Assessment:**
   - Drools rules are applied.
   - A **risk score** is assigned to the transaction.

3. **Alert Generation:**
   - If a risk score exceeds a **threshold**, the transaction is flagged.
   - An **alert is generated** for investigation.

4. **Review & Decision:**
   - Compliance officers investigate flagged transactions.
   - Transactions can be **approved, rejected, or escalated**.

5. **Reporting & Compliance:**
   - Generates compliance reports for **regulatory bodies**.
   - Stores all logs for future audits.

---

## **6. Security & Performance Considerations**

### **Security Measures**
- **JWT authentication** for API access.
- **Role-based access control (RBAC)** for investigators and admins.
- **Data encryption** for sensitive transaction details.

### **Performance Optimizations**
- **Batch processing** for large transaction loads.
- **Indexing** on high-usage columns (e.g., `transaction_id`, `customer_id`).
- **Caching strategies** (Redis or AWS ElastiCache) for frequently accessed data.

---

## **7. Deployment Strategy**

| **Component**               | **Deployment Method**                                |
| --------------------------- | ---------------------------------------------------- |
| Backend (Spring Boot)       | deployed on AWS                   |
| Frontend (React.js) | Hosted on **AWS S3**                       |
| Database (MySQL) | AWS RDS                                              |

---

## **8. Future Enhancements**
- **Machine Learning Integration:** Train ML models for anomaly detection.
- **Graph-Based Fraud Detection:** Analyze relationships between accounts.
- **Real-Time Streaming:** Use Apache Kafka for real-time transaction processing.

---