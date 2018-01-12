<?php

$db = mysqli_connect("localhost", "root", "", "dir_of_music");



    $firstname = mysqli_real_escape_string($db, $_POST["firstname"]);
    $lastname = mysqli_real_escape_string($db, $_POST["lastname"]);
    $arch = mysqli_real_escape_string($db, $_POST["arch"]);
    $church = mysqli_real_escape_string($db, $_POST["church"]);
    $pin = mysqli_real_escape_string($db, $_POST["chkpin"]);

    $Cathedral = ["Cathedral Church of Emmanuel, Ado-Ekiti"];
    $AdoNorth = [  "St. Paul’s Church, Odo Ado, Ado Ekiti",
                    "St. Peter’s Church, Oke-Ureje, Poly Road, Ado Ekiti",
                    "Christ Church, Ureje, Ado Ekiti",
                    "St. James’ Church, Oke Oniyo, Ado-Ekiti",
                    "St. Michael’s Church, Temidire, Esunmo",
                    "St. John’s Church, Erinfun, Ado Ekiti",
                    "St. Paul’s Church, Aso, Ayegunle",
                    "Church of Resurrection, Moferere, Ado Ekiti",
                    "The Living Soul’s Church, Moferere, Ado Ekiti",
                    "Faith Anglican Church, Ajebamidele, Ado Ekiti",
                    "Church of Advent, Ajebamidele, Ado Ekiti"
        ];

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
        echo "First name required";
    } elseif ($lastname == null || $firstname == ""){
        echo "Last name required";
    } elseif ($arch == null || $arch == ""){
        echo "Choose your archdeaconry ";
    } elseif ($church == null || $firstname == ""){
        echo "Choose your church";
    }



//    echo $firstname . " " . $lastname . " " . $arch . " " . $church;
