

-- Example ko ra inen 

CREATE DATABASE POMS;

USE POMS;

-- Table for Budget Management
CREATE TABLE budgets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    total_budget DECIMAL(10, 2) NOT NULL,
    remaining_funds DECIMAL(10, 2) NOT NULL,
    expenses DECIMAL(10, 2) NOT NULL
);

-- Table for Tasks
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    assigned_to VARCHAR(255),
    deadline DATE,
    priority ENUM('Low', 'Medium', 'High') NOT NULL,
    status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending'
);

-- Table for Documents
CREATE TABLE documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    upload_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES budgets(id)
);

-- Table for Team Collaboration
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT,
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id)
);
