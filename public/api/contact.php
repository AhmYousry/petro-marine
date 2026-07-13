<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request body']);
    exit;
}

$name    = trim($input['name']    ?? '');
$email   = trim($input['email']   ?? '');
$phone   = trim($input['phone']   ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');

$errors = [];
if ($name === '')    $errors[] = 'Name is required';
if ($email === '')   $errors[] = 'Email is required';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email';
if ($subject === '') $errors[] = 'Subject is required';
if ($message === '') $errors[] = 'Message is required';
elseif (mb_strlen($message) < 10) $errors[] = 'Message must be at least 10 characters';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(', ', $errors)]);
    exit;
}

$sanitized = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');

$emailBody  = "New contact form submission\n";
$emailBody .= "===========================\n\n";
$emailBody .= "Name:    {$sanitized}\n";
$emailBody .= "Email:   {$email}\n";
$emailBody .= "Phone:   " . ($phone !== '' ? $phone : 'Not provided') . "\n";
$emailBody .= "Subject: {$subject}\n\n";
$emailBody .= "Message:\n{$message}\n";

$emailSubject = "Contact Form: {$subject}";
$emailHeaders  = "From: noreply@petromarine-alex.com\r\n";
$emailHeaders .= "Reply-To: {$email}\r\n";
$emailHeaders .= "X-Mailer: Petromarine-Website/1.0";

$sent = @mail('info@petromarine-alex.com', $emailSubject, $emailBody, $emailHeaders);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email. Please try again later.']);
}
