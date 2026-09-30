<?php
require_once __DIR__ . '/../config/database.php';

try {
    $db = new Database();
    $conn = $db->getConnection();

    $stmt = $conn->prepare("SELECT id, week_number, title, description, sort_order FROM journey_milestones WHERE status = 'active' ORDER BY sort_order ASC, id ASC");
    $stmt->execute();
    $milestones = $stmt->fetchAll() ?: [];

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "data" => $milestones
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to retrieve journey milestones."
    ]);
}
