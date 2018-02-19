<?php

    $db = mysqli_connect("162.214.10.193", "director_diocese", "Password@2018", "director_of_music");
//    $db = mysqli_connect("localhost", "root", "", "dir_of_music");
$firstname = "";


if(isset($_POST["firstname"])){}
    $firstname = mysqli_real_escape_string($db, $_POST["firstname"]);
    $lastname = mysqli_real_escape_string($db, $_POST["lastname"]);
    $status = mysqli_real_escape_string($db, $_POST["status"]);
    $phoneno = mysqli_real_escape_string($db, $_POST["phoneno"]);
    $church = mysqli_real_escape_string($db, $_POST["church"]);
    $arch = mysqli_real_escape_string($db, $_POST["arch"]);
    $pin_edit = mysqli_real_escape_string($db, $_POST["pin_edit"]);

    $sql_check = "SELECT pin, choir_id FROM choir_data WHERE pin = '$pin_edit'";

    function returnId($db, $query){
        $resource_result = mysqli_query($db, $query);
        $refined_array = mysqli_fetch_array($resource_result);
        $id = $refined_array['choir_id'];
        return $id;
    }

        $id = returnId($db, $sql_check);
        if (($id == "") || ($id == null)){
            echo "Pin has not been registered";
        }
        if ($id){
        $new_id = $id;

    $sql_check_for_update = "SELECT count FROM count WHERE choir_id = '$new_id'";
    $resource_result = mysqli_query($db, $sql_check_for_update);
    $refined_array = mysqli_fetch_array($resource_result);
    $count_from_db = $refined_array['count'];
    $current_count = $count_from_db + 1;


    $sql_update = "UPDATE choir_data SET
                          fname = IF(LENGTH('$firstname') = 0, fname, '$firstname'),
                          lname = IF(LENGTH('$lastname') = 0, lname, '$lastname'),
                          phoneno = IF(LENGTH('$phoneno') = 0, phoneno, '$phoneno'),
                          status = IF(LENGTH('$status') = 0, status, '$status'),
                          church = IF(LENGTH('$church') = 0, church, '$church'),
                          arch = IF(LENGTH('$arch') = 0, arch, '$arch')
                       WHERE choir_id = '$new_id'";

    function returnCount($db, $query){
        mysqli_query($db, $query);
        $num = mysqli_affected_rows($db);
        return $num;
    }

    if ($current_count < 4){
        $num = returnCount($db, $sql_update);
        $sql_insert = "UPDATE count SET 
                          choir_id = (SELECT choir_id FROM choir_data WHERE choir_data.choir_id = '$new_id'),  
                          count = '$current_count'
                       WHERE choir_id = $new_id";

        mysqli_query($db, $sql_insert);
        echo $current_count;
    } else {
        echo "You have exceeded the number of edits";
    }
}

