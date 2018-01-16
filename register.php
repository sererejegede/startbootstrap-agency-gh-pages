<?php

//$db = mysqli_connect("162.214.10.193", "director_diocese", "Password@2018", "director_of_music");
$db = mysqli_connect("localhost", "root", "", "dir_of_music");


    $firstname = mysqli_real_escape_string($db, $_POST["firstname"]);
    $lastname = mysqli_real_escape_string($db, $_POST["lastname"]);
    $arch = mysqli_real_escape_string($db, $_POST["arch"]);
    $church = mysqli_real_escape_string($db, $_POST["church"]);
    $pin = mysqli_real_escape_string($db, $_POST["chkpin"]);



    if (($firstname != null || $firstname != "") && ($lastname != null || $lastname != "") && ($arch != null || $arch != "") && ($church != null || $church != "")) {

        $sql = "INSERT INTO choir_data (pin, fname, lname, church, arch) VALUES ('$pin', '$firstname', '$lastname', '$church', '$arch')";
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
    } elseif ($lastname == null || $firstname == ""){
        echo "Input at least one other name";
    } elseif ($arch == null || $arch == ""){
        echo "Choose your archdeaconry ";
    } elseif ($church == null || $firstname == ""){
        echo "Choose your church";
    }



//    echo $firstname . " " . $lastname . " " . $arch . " " . $church;
