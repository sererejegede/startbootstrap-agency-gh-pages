<?php

$db = mysqli_connect("localhost", "root", "", "dir_of_music");
//$pina = $_POST["pin"];
//if (isset($_POST["pin_submit"])){
    $pin = mysqli_real_escape_string($db, $_POST["pin"]);

    if ($pin == null || $pin == ""){
        echo "Please enter your unique pin";
        return;
    }


//    echo $pin;


$sql = "SELECT * FROM unique_pin WHERE pin = '$pin'";
$sql2 = "SELECT * FROM choir_data WHERE pin = '$pin'";
$result = mysqli_query($db, $sql);
$result2 = mysqli_query($db, $sql2);

$pin_check = $result->num_rows;
$pin_duplicate = $result2->num_rows;

//echo $pin;

if ($pin_check != 1){
    echo "Pin does not exist";
} elseif ($pin_duplicate == 1){
    echo "Pin has already been used";
}
if ($pin_check == 1 && $pin_duplicate != 1){
//    echo "Success";
    echo $pin;
}

//echo $result->num_rows .'<br>';
//echo $result2->num_rows;
