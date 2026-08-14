-- Run this in XAMPP phpMyAdmin or MySQL CLI
-- =============================================
--  VIBI PLUMBING & REMODELING — Database Setup
-- =============================================

CREATE DATABASE IF NOT EXISTS vibi_plumbing
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE vibi_plumbing;

CREATE TABLE IF NOT EXISTS service_requests (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  first_name  VARCHAR(100)  NOT NULL,
  last_name   VARCHAR(100)  NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  phone       VARCHAR(30)   DEFAULT NULL,
  address     VARCHAR(255)  DEFAULT NULL,
  service     VARCHAR(150)  NOT NULL,
  message     TEXT          DEFAULT NULL,
  status      ENUM('new', 'contacted', 'scheduled', 'completed')
              NOT NULL DEFAULT 'new',
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
              ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

ALTER TABLE service_requests
  ADD COLUMN IF NOT EXISTS address VARCHAR(255) DEFAULT NULL AFTER phone;

CREATE TABLE IF NOT EXISTS users (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  full_name      VARCHAR(150) NOT NULL,
  email          VARCHAR(255) NOT NULL UNIQUE,
  password_hash  VARCHAR(255) NOT NULL,
  role           ENUM('admin', 'staff') NOT NULL DEFAULT 'admin',
  is_active      TINYINT(1) NOT NULL DEFAULT 1,
  created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
                 ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS appointments (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  service_request_id  INT NULL,
  first_name          VARCHAR(100) NOT NULL,
  last_name           VARCHAR(100) NOT NULL,
  email               VARCHAR(255) NOT NULL,
  phone               VARCHAR(30) DEFAULT NULL,
  address             VARCHAR(255) DEFAULT NULL,
  city                VARCHAR(100) DEFAULT NULL,
  state               VARCHAR(100) DEFAULT NULL,
  zip                 VARCHAR(20) DEFAULT NULL,
  notes               TEXT DEFAULT NULL,
  appointment_date    DATETIME NOT NULL,
  status              ENUM('scheduled', 'confirmed', 'completed', 'canceled') NOT NULL DEFAULT 'scheduled',
  created_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
                      ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_appointments_service_request
    FOREIGN KEY (service_request_id) REFERENCES service_requests(id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_service_request_id ON appointments(service_request_id);

-- Optional seed admin account
-- Email: admin@vibiplumbing.com
-- Password: ChangeMe123! (change immediately after first login)
INSERT INTO users (full_name, email, password_hash, role)
VALUES ('Vibi Admin', 'admin@vibiplumbing.com', '$2b$10$5zG8Doq9iApvWmOlrpUI3eJnjNv5Gtd8UD6f0EkPV1adRDSf5aR0y', 'admin')
ON DUPLICATE KEY UPDATE updated_at = updated_at;
