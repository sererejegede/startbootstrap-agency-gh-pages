<?php
$db = mysqli_connect("localhost", "root", "", "dir_of_music");

$AdoNorth = array (  "St. Paul’s Church, Odo Ado, Ado Ekiti",
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
);
foreach ($AdoNorth as $item){
    $sql = "INSERT IGNORE INTO unique_pin (pin) VALUES ('$item')";
    if (!mysqli_query($db, $sql)){
        echo "Something went wrong";
    }
}

//for ($num = 0; $num < 2000; $num++){
//    $random = rand(34978628, 99999999);
//    $sql = "INSERT IGNORE INTO unique_pin (pin) VALUES ('$random')";
//    if (!mysqli_query($db, $sql)){
//        echo "Something went wrong";
//    }
//}