<?php

//$db = mysqli_connect("162.214.10.193", "director_diocese", "Password@2018", "director_of_music");
$db = mysqli_connect("localhost", "root", "", "dir_of_music");


    $firstname = mysqli_real_escape_string($db, $_POST["firstname"]);
    $lastname = mysqli_real_escape_string($db, $_POST["lastname"]);
    $phoneno = mysqli_real_escape_string($db, $_POST["phoneno"]);
    $status = mysqli_real_escape_string($db, $_POST["status"]);
    $arch = mysqli_real_escape_string($db, $_POST["arch"]);
    $church = mysqli_real_escape_string($db, $_POST["church"]);
    $pin = mysqli_real_escape_string($db, $_POST["chkpin"]);



    if (($firstname != null || $firstname != "") && ($lastname != null || $lastname != "") && ($status != null || $status != "") && ($arch != null || $arch != "") && ($church != null || $church != "") && ($phoneno != null || $phoneno != "")) {

        $sql = "INSERT INTO choir_data (pin, fname, lname, phoneno, status, church, arch) VALUES ('$pin', '$firstname', '$lastname', '$phoneno', '$status', '$church', '$arch')";
        if ($pin == null || $pin == "") {
            echo "<a class='btn btn-danger text-uppercase js-scroll-trigger' href='#services'>You must use a pin</a>";
            return;
        }
        if (!mysqli_query($db, $sql)) {
            die ("An error occurred");
        }
        echo "1";
    } elseif ($firstname == null || $firstname == ""){
        echo "Surname required";
    } elseif ($lastname == null || $lastname == ""){
        echo "Input at least one other name";
    } elseif ($status == null || $status == "" || $phoneno == null || $phoneno == ""){
        echo "You must fill all!";
    } elseif ($arch == null || $arch == ""){
        echo "Choose your archdeaconry ";
    } elseif ($church == null || $church == ""){
        echo "Choose your church";
    }



//    echo $firstname . " " . $lastname . " " . $arch . " " . $church;
