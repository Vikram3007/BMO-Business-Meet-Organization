<?php
require_once __DIR__ . '/../config/database.php';

try {
    $db = new Database();
    $conn = $db->getConnection();

    $category = isset($_GET['category']) ? trim($_GET['category']) : null;

    if ($category && strtolower($category) !== 'all') {
        $stmt = $conn->prepare("SELECT id, title, image, category, type FROM gallery WHERE status = 'active' AND LOWER(category) = LOWER(:category) ORDER BY id DESC");
        $stmt->bindParam(':category', $category, PDO::PARAM_STR);
    } else {
        $stmt = $conn->prepare("SELECT id, title, image, category, type FROM gallery WHERE status = 'active' ORDER BY id DESC");
    }

    $stmt->execute();
    $gallery = $stmt->fetchAll() ?: [];

    http_response_code(200);
    echo json_encode([
        "success" => true,
        "data" => $gallery
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to retrieve gallery images."
    ]);
}
