<?php
require 'vendor/autoload.php';

class ConnectDB
{
    private $client;

    public function __construct()
    {
        $this->client =  new MongoDB\Client("mongodb://localhost:27017");
    }

    private function conn($collection)
    {
        $database = $this->client->selectDatabase("ecommerce");

        $results = $database->selectCollection($collection);

        return $results;
    }

    public function result($collection)
    {
        return $this->conn($collection);
    }
}


$conn = new ConnectDB();
