<?php
require_once __DIR__ . '/../config/database.php';

try {
    $db = new Database();
    $conn = $db->getConnection();

    // Fetch primary organization contact settings
    $stmt = $conn->prepare("SELECT phone, email, whatsapp, location, google_maps_url FROM event_settings ORDER BY id ASC LIMIT 1");
    $stmt->execute();
    $settings = $stmt->fetch() ?: [];

    // Fetch active social links
    $socialStmt = $conn->prepare("SELECT platform, url FROM social_links WHERE status = 'active' ORDER BY sort_order ASC");
    $socialStmt->execute();
    $settings['social_links'] = $socialStmt->fetchAll() ?: [];

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "data" => $settings
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to retrieve settings."
    ]);
}
