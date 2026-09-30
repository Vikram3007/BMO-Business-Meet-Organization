<?php
require_once __DIR__ . '/../config/database.php';

try {
    $db = new Database();
    $conn = $db->getConnection();

    $stmt = $conn->prepare("SELECT id, event_name, event_date, event_time, venue, location, description, hero_title, hero_subtitle, phone, email, whatsapp, google_maps_url FROM event_settings ORDER BY id ASC LIMIT 1");
    $stmt->execute();
    $event = $stmt->fetch();

    if ($event) {
        http_response_code(200);
        echo json_encode([
            "success" => true,
            "data" => $event
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            "success" => false,
            "message" => "No event details found."
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to retrieve event information."
    ]);
}
