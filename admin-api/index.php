<?php
require_once "./database/database.php";


$collection = $conn->result("registers");

$results = $collection->find([]);

foreach ($results as $result) {
    var_dump($result);
}
