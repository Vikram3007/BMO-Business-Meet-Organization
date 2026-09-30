<?php
/**
 * BMO — Business Meet Organization
 * Database Connection Configuration (PDO)
 * 
 * Instructions for cPanel / phpMyAdmin:
 * 1. Create a MySQL Database in cPanel (e.g., cpaneluser_bmo).
 * 2. Create a MySQL User and assign ALL PRIVILEGES to that database.
 * 3. Update the credentials below with your cPanel values.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

class Database {
    // Replace these values with your cPanel MySQL Database credentials
    private $host = "localhost";
    private $db_name = "bmo_celebration"; // Change to your cPanel database name (e.g. username_bmodb)
    private $username = "root";           // Change to your cPanel database user (e.g. username_bmouser)
    private $password = "";               // Change to your cPanel database user password
    public $conn = null;

    public function getConnection() {
        if ($this->conn !== null) {
            return $this->conn;
        }

        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];
            $this->conn = new PDO($dsn, $this->username, $this->password, $options);
        } catch (PDOException $exception) {
            // Clean JSON error response - NEVER leak DB passwords or stack traces
            http_response_code(500);
            echo json_encode([
                "success" => false,
                "message" => "Database connection failure. Please verify database configuration."
            ]);
            exit();
        }

        return $this->conn;
    }
}
