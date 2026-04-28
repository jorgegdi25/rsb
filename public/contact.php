<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get JSON data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $company = strip_tags(trim($data["company"]));
    $message = strip_tags(trim($data["message"]));

    // DESTINATION EMAIL (Change this to your actual email)
    $recipient = "info@rsbgreentech.com"; 

    $subject = "New Contact from RSB Web: $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Company: $company\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: RSB Green Tech Web <noreply@rsbgreentech.com>\r\n";
    $email_headers .= "Reply-To: $email\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Success"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error sending email"]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
