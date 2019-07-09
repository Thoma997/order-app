<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$articles = [];
$sql = "SELECT * FROM `test-sortiment`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $articles[$i]['id']    = $row['ID'];
    $articles[$i]['name'] = $row['NAME'];
    $articles[$i]['pe'] = $row['PE'];
    $articles[$i]['price'] = $row['PRICE'];
    $articles[$i]['category'] = $row['CATEGORY'];
    $articles[$i]['subcategory'] = $row['SUBCATEGORY'];
    $articles[$i]['amount'] = $row['AMOUNT'];
    $articles[$i]['imglink'] = $row['IMGLINK'];
    $i++;
  }

  echo json_encode($articles);
}
else
{
  http_response_code(404);
}
