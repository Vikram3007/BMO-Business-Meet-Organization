<?php
require_once __DIR__ . '/../config/database.php';

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed. Use POST."
    ]);
    exit();
}

// Retrieve raw JSON or form-encoded POST
$rawInput = file_get_contents("php://input");
$input = json_decode($rawInput, true);

if (!is_array($input)) {
    $input = $_POST;
}

// Extract and sanitize input fields
$fullName     = isset($input['full_name']) ? trim(strip_tags($input['full_name'])) : '';
$businessName = isset($input['business_name']) ? trim(strip_tags($input['business_name'])) : '';
$phone        = isset($input['phone']) ? trim(strip_tags($input['phone'])) : '';
$email        = isset($input['email']) ? trim(strip_tags($input['email'])) : '';
$message      = isset($input['message']) ? trim(strip_tags($input['message'])) : '';

// Validation errors array
$errors = [];

if (empty($fullName)) {
    $errors[] = "Full Name is required.";
} elseif (mb_strlen($fullName) < 2 || mb_strlen($fullName) > 100) {
    $errors[] = "Full Name must be between 2 and 100 characters.";
}

if (empty($businessName)) {
    $errors[] = "Business Name is required.";
} elseif (mb_strlen($businessName) < 2 || mb_strlen($businessName) > 150) {
    $errors[] = "Business Name must be between 2 and 150 characters.";
}

if (empty($phone)) {
    $errors[] = "Phone Number is required.";
} elseif (!preg_match('/^[0-9+\s\-()]{8,20}$/', $phone)) {
    $errors[] = "Please provide a valid phone number.";
}

if (empty($email)) {
    $errors[] = "Email Address is required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Please provide a valid email address.";
}

if (empty($message)) {
    $errors[] = "Message is required.";
} elseif (mb_strlen($message) < 5 || mb_strlen($message) > 2000) {
    $errors[] = "Message must be between 5 and 2000 characters.";
}

// Return validation errors if any
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => implode(" ", $errors),
        "errors"  => $errors
    ]);
    exit();
}

try {
    $db = new Database();
    $conn = $db->getConnection();

    $stmt = $conn->prepare("
        INSERT INTO contact_messages (full_name, business_name, phone, email, message, status, created_at)
        VALUES (:full_name, :business_name, :phone, :email, :message, 'unread', NOW())
    ");

    $stmt->bindParam(':full_name', $fullName, PDO::PARAM_STR);
    $stmt->bindParam(':business_name', $businessName, PDO::PARAM_STR);
    $stmt->bindParam(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':message', $message, PDO::PARAM_STR);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            "success" => true,
            "message" => "Thank you! Your message has been received by BMO desk."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Something went wrong while saving your message. Please try again."
        ]);
    }
} catch (Exception $e) {
    // Log privately if error logging configured, do not expose SQL error to client
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Something went wrong. Please try again."
    ]);
}
