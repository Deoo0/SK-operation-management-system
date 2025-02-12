CREATE TABLE usertype (
    id INT(10) PRIMARY KEY,
    name VARCHAR(15)
);

CREATE TABLE `position` (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(12) NOT NULL,
    usertype_id INT,
    FOREIGN KEY (usertype_id) REFERENCES usertype(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    middle_name VARCHAR(255),
    suffix VARCHAR(255),
    login_id INT UNIQUE,
    position_id INT,
    email VARCHAR(255) UNIQUE NOT NULL,
    contact_number VARCHAR(255),
    date_created DATE,
    last_updated DATE,
    FOREIGN KEY (login_id) REFERENCES login(id),
    FOREIGN KEY (position_id) REFERENCES `position`(id)
);

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    status INT CHECK (status IN (1, 2, 3)),
    start_date DATE,
    end_date DATE,
    allocated_budget DECIMAL(10,2),
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    date DATE,
    allocated_budget DECIMAL(10,2),
    status INT CHECK (status IN (1, 2, 3)),
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE transaction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT NULL,
    event_id INT NULL,
    amount DECIMAL(10,2),
    type INT CHECK (type IN (1, 2)),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_by INT,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (processed_by) REFERENCES users(id)
);

CREATE TABLE budget (
    id INT PRIMARY KEY AUTO_INCREMENT,
    total_budget DECIMAL(10,2) DEFAULT 0.00,
    last_updated DATE
);
