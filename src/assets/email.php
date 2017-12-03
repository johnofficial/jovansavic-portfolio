<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  $from_email = $request->email;
  $message = $request->project_description;
  $from_name = $request->name;
  $project_name = $request->project_name;
  $project_budget = $request->project_budget;


  $to_email = 'jovan.saviic@gmail.com';

  $contact = "<p><strong>Name:</strong> $from_name</p>
							<p><strong>Email:</strong> $from_email</p>";
  $content = "<h3>$project_name</h3>
              <p>Project budget: <strong>$project_budget</strong></p>
              <p>$message</p>";

  $website = 'Jovan Savic | Portfolio';
  $email_subject = "$website: Hire Me";

  $email_body = '<html><body>';
  $email_body .= "$contact $content";
  $email_body .= '</body></html>';

  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $headers .= "From: $from_email\n";
  $headers .= "Reply-To: $from_email";

  mail($to_email,$email_subject,$email_body,$headers);

  $response_array['status'] = 'success';
  $response_array['from'] = $from_email;
  echo json_encode($response_array);
  echo json_encode($from_email);
  header($response_array);
  return $from_email;
} else {
  $response_array['status'] = 'error';
  echo json_encode($response_array);
  header('Location: /error.html');
}
?>
