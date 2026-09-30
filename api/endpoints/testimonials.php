<?php
require_once __DIR__ . '/../config/database.php';

try {
    $db = new Database();
    $conn = $db->getConnection();

    $stmt = $conn->prepare("SELECT id, name, business_name, designation, photo, quote FROM testimonials WHERE status = 'active' ORDER BY id ASC");
    $stmt->execute();
    $testimonials = $stmt->fetchAll() ?: [];

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "data" => $testimonials
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to retrieve testimonials."
    ]);
}
