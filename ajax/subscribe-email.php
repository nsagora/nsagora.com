<?php

define('WP_ACCESS', '450066915');

require_once ('mailchimp/MCAPI.class.php');
require_once ('mailchimp/config.inc.php');

header('Content-Type: application/json');

$output     = array('status'=>true);
$access     = isset($_POST['access'])   ? $_POST['access']  : null;
$email      = isset($_POST['email'])    ? $_POST['email']   : null;

if ($access != WP_ACCESS) {
    $output['status'] = false;
} else {
    $apikey = '32b35ebd8c2d7ebdba0afb5e7fa7a136-us3';
    $api = new MCAPI($apikey);

    $listId = '0196722540';
    $api->listSubscribe($listId, $email, null, null, false);
}

echo json_encode($output);