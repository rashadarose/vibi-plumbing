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
  service     VARCHAR(150)  NOT NULL,
  message     TEXT          DEFAULT NULL,
  status      ENUM('new', 'contacted', 'scheduled', 'completed')
              NOT NULL DEFAULT 'new',
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
              ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;
