(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

/***********Custom Script for Ajax************/


$("#pin_submit").click(function () {
    var pin = $("#pin1");
    var pinValue = pin.val();

// Checks if the pin exists and if it is unique
    $.ajax({
        url: "pin_verify.php",
        beforeSend: function () {
            $("#spin").html("<i class='fa fa-spinner fa-spin'></i>");
        },
        complete: function () {
            $("#spin").html("");
        },
        type: "post",
        data: {pin: pinValue},
        success: function (res) {
            if (isNaN(res)){
                $("#op").html(res);
            }else{
                $("#op").html("");
                window.location = "#portfolio";
            }
        }
    });

    pin.focusin(function () {
        $("#op").html("");
    })
});

function populate(arch) {

    var select = $("#church");
    select.find("option").remove();
    $.each(arch, function (key, value) {
        $("<option>").val(value).text(value).appendTo(select);
    });
}

function populateEdit(arch) {

    var select = $("#churchEdit");
    select.find("option").remove();
    $.each(arch, function (key, value) {
        $("<option>").val(value).text(value).appendTo(select);
    });
}

// Populates the option values
$("#arch").blur(function () {
    var arch = $("#arch").val();

    var churches = {
        "Babamuboni" : [
            "Babamuboni Memorial Church, Iyin Ekiti",
            "St. John the Evangelist Church, Iyin Ekiti",
            "Christ Ang. Church, Iyin Ekiti"
        ],
        "Basiri" : [
            "St. Silas’ Church, Basiri, Ado-Ekiti",
            "Goodnews Ang. Church, Ifelere, Ado",
            "All Soul’s Ang. Church, Better Life, Ado"
        ],
        "Ijelu" : [
            "St. Paul’s Church, Ijelu Ekiti",
            "St. John’s Church Iyemero Ekiti",
            "St. Andrew’s Church Omu Odo Ekiti",
            "St. Andrew’s Church, Omuo-oko Ekiti",
            "St. Matthew’s Ang. Ch. Itapaji"
        ],
        "IjesaIsu" :  [
            "Holy Trinity Church, Ijesa Isu Ekiti",
            "St. Peter’s Church. Isaba Ikole Ekiti",
            "St. John’s Church, Asin Ekiti",
            "Christ Redeemer Church, Otunja",
            "Emmanuel Church, Fatunla",
            "New Era Ang. Church, Ijesa Isu"
        ],
        "Ire" : [
            "St. John’s Church,Ire",
            "St. Andrew’s Church, Osin Ekiti",
            "Emmanuel Ang. Church, Itapa Ekiti",
            "St. Peter’s Church, Ire Ekiti",
            "St. Peter’s Church, Ire Ekiti"
        ],
        "Erinwa" : [
            "St. Stephen’s Church, Erinwa Ise",
            "Church of Pentecost, Olele, Ise Ekiti",
            "St. Andrew’s Church, Ogbese Ise",
            "St. John’s Church, Afolu Ise Ekiti",
            "St. Luke’s Church, Obada",
            "Oke Oniyo Church, Odole, Ise Ekiti"
        ],
        "OdoOja" : [
            "Holy Trinity Church, Odo-Oja, Ikere Ekiti",
            "St. James’ Church, Moshood Rd., Ikere-Ekiti",
            "New Life Ang. Church, Eewe, Okeosun",
            "New Era Ang. Church, Okeosun"
        ],
        "Ogotun" : [
            "St. Bartholomew’s Ch. Ogotun Ekiti",
            "St. David’s Church, Ogotun Ekiti",
            "St. Jude’s Ch. Kajola Ogotun",
            "St. Peter’s Church, Edetedo",
            "Holy Trinity Church Alagbede, Ogotun",
            "St. Peter’s Church Edunabon Ogotun",
            "United Church Aba- Osogbon Ogotun",
            "St. Paul’s Church, Ogotun",
            "Chapel of Mercy, Oke Owena"
        ],
        "Uro" : [
            "St. Luke’s Church, Uro Ikere",
            "St. Stephen’s Ch. Anaye, Ikere Ekiti",
            "St. Andrew’s Church, Agbado, Ikere",
            "St. Michael’s Ch. Oke Osun Ikere",
            "Church of Advert, Ikoyi Uro, Ikere"
        ],
        "Opopogbooro" : [
            "All Saint’s Church,  Opopogboroo",
            "Church of Ascession, Ile-Ileri, Ado Ekiti",
            "New Life Ang. Church, Ado-Ekiti",
            "Christ the King Church, Nova Rd, Ado Ekiti",
            "Church of Transfiguration, Housing Estate, Ado",
            "The Grace Of God Ang. Ch. Bawa, Ado",
            "Ang. Church of Advent, Olorunsogo",
            "Amazing Grace Ang. Church, Ilokun, Ado"
        ],
        "Omuooke" : [
            "St. Silas Church, Omuo-Oke Ekiti",
            "St. Paul’s Ang. Church, Omuooke",
            "St. Barnaba’s Ang. Church, Omuooke",
            "Christ Ang. Church, Omuooke",
            "St. David’s Ang. Church, Omuooke",
            "St. Peter’s Ang. Church, Omuooke"
        ],
        "Omuo" : [
            "Emmanuel Ang. Church Omuo Ekiti",
            "St. John’s Ch. Araromi Ekiti",
            "St. Andrew’s Church Ilodofin, Omuo",
            "St. Mark’s Church, Kota Omuo Ekiti",
            "St. Paul’s Church Omuo",
            "Calvary Ang. Church, Omuo Ekiti",
            "St. Luke’s Ang. Church, Omuo Oke",
            "Ang. Church of Ascension, Omuo"
        ],
        "Isokan" : [
            "Emmanuel Church, Awo",
            "St. Peter’s Church, Iropora",
            "St. Paul’s Church, Eyio",
            "St. Peter’s Church, Awo",
            "Our Saviours Church Esure"
        ],
        "IseNorth" : [
            "St. Paul Ang. Church, Omuooke",
            "St. Peter’s Church Temidire Ise Ekiti",
            "Ang. Ch. of the Good Shepherd,Oraye",
            "St. Paul’s Ang. Ch. Kajola",
            "St. John’s Ang. Ch. Ajibamidele",
            "St. James’ Church, Odole, Ise Ekiti"
        ],
        "Ise" : [
            "All Saint’s Church, Iyin-Ekiti",
            "Emmanuel Church, Orun Ekiti",
            "Emmanuel Church, Ise Orun Ekiti",
            "St. David’s Church, Oke Ise Ekiti",
            "St. Peter’s Church, Ajegunle",
            "All Saints Ang. Church, Isoko, Ise",
            "Living Soul’s Ch. Ise-Ekiti"
        ],
        "Cathedral" : ["Cathedral Church of Emmanuel, Ado-Ekiti"],
        "Ado" : [  "St. Paul’s Church, Odo Ado, Ado Ekiti",
        "St. Peter’s Church, Oke-Ureje, Poly Road, Ado Ekiti",
        "Christ Church, Ureje, Ado Ekiti",
        "St. James’ Church, Oke Oniyo, Ado-Ekiti",
        "St. Michael’s Church, Temidire, Esunmo",
        "St. John’s Church, Erinfun, Ado Ekiti",
        "St. Paul’s Church, Aso, Ayegunle",
        "Church of Resurrection, Moferere, Ado Ekiti",
        "The Living Soul’s Church, Moferere, Ado Ekiti",
        "Faith Anglican Church, Ajebamidele, Ado Ekiti",
        "Church of Advent, Ajebamidele, Ado Ekiti"],
        "AdoNorth" : ["St. Andrew’s Anglican Church, Oke Ila, Ado-Ekiti",
        "Henry Dallimore Memorial Church, Ado Ekiti",
        "Ebenezer Anglican Church, Housing Estate, Oke Ila, Ado Ekiti",
        "Messiah Anglican Church, EKSUTH Road, Ado Ekiti",
        "New Era Anglican Church, Onala, Ado Ekiti",
        "Ang. Church of Pentecost, Ado Ekiti",
        "Grace of God Church, Ado Ekiti",
        "Amazing Grace (Urhobo/Isoko) Church, Ado Ekiti"
        ],
        "Aisegba" : [
        "Holy Trinity Church, Aisegba Ekiti",
        "St. Peter’s Church Ilumoba",
        "Emmanuel Church, Agbado",
        "St. James Church, Imesi",
        "St. Peter’s Church, Iro-Ekiti",
        "St. Paul’s Ang. Church, Aisegba Ekiti",
        "St. Paul’s Church Bolorunduro",
        "St. Peter’s Church, Ayegunle",
        "Church of Resurrection, Egbe Ekiti",
        "Our Saviour’s Church, Ipole Agbado",
        "Grace of God Ang. Ch. Iluomoba"
        ],
        "Ayede" : [
        "St. Peter’s Church, Ayede Ekiti",
        "St. Paul’s Church, Isan",
        "St. Mathias Church, Ilafon Ekiti",
        "St. Paul’s Church, Ayede Ekiti",
        "St. Silas Church, Ogilolo, Isan Ekiti",
        "St. Andrew’s Church, Itaji Ekiti",
        "All Saints’ Church, Oloje",
        "St. James Church, Ilemeso Ekiti",
        "St. David’s Ch. Orisunmibare"
    ],
        "Ekamefa" : [
        "St. John’s Church, Ilasa Ekiti",
        "St. Luke’s Church, Ikun Araromi Ekiti",
        "Stephen’s Church, Ayebode Ekiti",
        "Amos Memorial Church, Ilasa Ekiti",
        "St. Paul’s Eda-Ile Ekiti",
        "St. Philip’s Church Ilasa Ekiti"
    ],
        "EkitiNorthEast" : [
        "St. Mary’s Church, Ode Ekiti",
        "All Saint’s Ang. Church Ode Ekiti",
        "Messiah Ang. Church, Ode Ekiti"
    ],
        "Emure" : [
        "St. Paul’s Church, Emure Ekiti",
        "St. Andrew’s Church, Emure Ekiti",
        "St. Peter’s Church, Emure Ekiti",
        "Emmanuel Church, Eporo Ekiti",
        "New Life Church, Emure",
        "St. James Church Aba Sasere",
        "St. Peter’s Church Oge",
        "Redemption Church, Emure",
        "St. Michael Church Alapoto Emure",
        "St. Paul’s Church, Igbo, Emure Ekiti"
        ],
        "GreatCommission" : [
        "St. Jude’s Church, Iyin Road, Ado Ekiti",
        "St. James the Evangelist Church, Sec. Road, Ado",
        "New Testament Ang. Church, Ado Ekiti",
        "Mercy of God Ang. Church, Ilawe Rd., Ado",
        "Covenant Ang. Church, Ado Ekiti",
        "Ang. Church of the Advent, Egbewa Qrts, Ado",
        "New Church, Ile Aanu Qtrs"
    ],
        "Ido" : [
        "St. John’s Ang. Church, Ido Ekiti",
        "St. David’s Church, Ido",
        "St. Peter’s Church, Ido",
        "St. Andrew’s Church, Ido",
        "Ebenezer Ang. Church, Ido"
    ],
        "Ife" : [
        "All Saints’ Church, Iyin",
        "Christ the Light Ang. Church",
        "Amazing Grace Ang. Church Iyin",
        "St. John Church, Igede Ekiti",
        "Emmanuel Church Iyin"
    ],
        "Ifeoluwa" : [
        "St. Andrew’s Church, Are Ekiti",
        "St. James’ Church, Iworoko Ekiti",
        "St. David’s Church, Afao Ekti",
        "Emmanuel Church, Araromi Obo Ekiti",
        "New Calvary Ang. Church, Osekita, Iworoko"
    ],
        "IgbalaOtun" : [
        "St. James Church, Igbara-Odo Ekiti",
        "St. Andrew’s Church Igbara Odo, Ekiti",
        "All Saint Ch. Bolorunduro,Ogotun Ekiti",
        "Grace of God Ang. Ch. Igbara-Odo",
        "All Soul’s Ang. Ch. Igbara-Odo"
    ],
        "Igbemo" : [
        "St. John’s Church, Igbemo Ekiti",
        "St. Paul’s Church, Orun Ekiti",
        "St. Paul’s Church, Igbemo Ekiti"
    ],
        "Ijan" : [
        "St. Paul’s Church, Ijan Ekiti",
        "St. Peter’s Church, Ilupeju Ijan",
        "Our Saviour Ch. Ijan – Ekiti",
        "St. Luke’s Church, Ijan Ekiti"
    ],
        "Ikere" : [
        "St. Peter’s Church, Ikere Ekiti",
        "St. John’s Church, Are Ikere Ekiti",
        "The Light of Christ Ang. Church, Ikere",
        "Our Saviour’s Church, Fagbohun",
        "St. Andrew’s Church, Araromi, Ikere"
    ],
        "Ikole" : [
        "St. Paul’s Church, Ikole Ekiti",
        "St. Andrew’s Church Odo Oro Ekiti",
        "All Saint’s Church Okebola",
        "St. Mark’s Church, Imila-Ayedun Ekiti",
        "St. James’ Church, Ikoyi Ekiti",
        "St. Luke’s Church, Esun Ekiti",
        "Christ Ang. Church (Igbo), Ikole",
        "St. Paul’s Church Ipao-Ekiti"
    ],
        "Ilawe" : [
        "Holy Trinity church Ilawe Ekiti",
        "Archdeacon Olowomeye Mem, Ang. Church",
        "St. Mathew’s Church, Ilawe Ekiti",
        "Christ Church Ilawe"
    ],
        "Irona" : [
        "Our Saviour’s Church, Irona Ado Ekiti",
        "Church of the Good Shepherd, Ekute",
        "St. Peter’s Church Falegan Ado Ekiti",
        "Church of Redemption, Ado Ekiti",
        "St. Luke’s Ang. Church, Ile-Abiye",
        "St. John’s Ang. Igbo Church",
        "St. Stephen’s Ang. Church Odo",
        "Jesus is the Lord Ang. Church",
        "Mount Zion Ch. New Irona"
    ]
    };

    switch (arch){
        case "Basiri":
            populate(churches.Basiri);
            break;
        case "Babamuboni":
            populate(churches.Babamuboni);
            break;
        case "Cathedral":
            populate(churches.Cathedral);
            break;
        case "Ado":
            populate(churches.Ado);
            break;
        case "Ado North":
            populate(churches.AdoNorth);
            break;
        case "Aisegba":
            populate(churches.Aisegba);
            break;
        case "Ayede":
            populate(churches.Ayede);
            break;
        case "Ekamefa":
            populate(churches.Ekamefa);
            break;
        case "Ekiti North East":
            populate(churches.EkitiNorthEast);
            break;
        case "Emure":
            populate(churches.Emure);
            break;
        case "Great Commission":
            populate(churches.GreatCommission);
            break;
        case "Ido":
            populate(churches.Ido);
            break;
        case "Ife":
            populate(churches.Ife);
            break;
        case "Ifeoluwa":
            populate(churches.Ifeoluwa);
            break;
        case "Igbala Otun":
            populate(churches.IgbalaOtun);
            break;
        case "Igbemo":
            populate(churches.Igbemo);
            break;
        case "Ijan":
            populate(churches.Ijan);
            break;
        case "Ikere":
            populate(churches.Ikere);
            break;
        case "Ikole":
            populate(churches.Ikole);
            break;
        case "Ilawe":
            populate(churches.Ilawe);
            break;
        case "Irona":
            populate(churches.Irona);
            break;
        case "Ise":
            populate(churches.Ise);
            break;
        case "Ise North":
            populate(churches.IseNorth);
            break;
        case "Isokan":
            populate(churches.Isokan);
            break;
        case "Omuo":
            populate(churches.Omuo);
            break;
        case "Omuooke":
            populate(churches.Omuooke);
            break;
        case "Opopogbooro":
            populate(churches.Opopogbooro);
            break;
        case "Uro":
            populate(churches.Uro);
            break;
        case "Ogotun":
            populate(churches.Ogotun);
            break;
        case "Erinwa":
            populate(churches.Erinwa);
            break;
        case "Ire":
            populate(churches.Ire);
            break;
        case "Ijesa Isu":
            populate(churches.IjesaIsu);
            break;
        case "Ijelu":
            populate(churches.Ijelu);
            break;
    }

});
// End of Population

// Checks if a pin has been entered
$("#pin_reset2").click(function () {
    $("#error-margin").html("");
    $("#success-margin").html("");
    $("#firstname").val("");
    $("#secondname").val("");
});

$("#register").click(function () {
  var chkpin = $("#pin2").val();
  if (chkpin === null || chkpin === ""){
    $("#error-margin").html("<a class='btn btn-danger text-uppercase js-scroll-trigger' href='#services'>You must use a pin</a>");
  }
    var firstname = $("#firstname").val();
    var lastname = $("#secondname").val();
    var phoneno = $("#number").val();
    var status = $("input:radio[name=status]:checked").val();
    var church = $("#church").val();
    var arch = $("#arch").val();
// alert(status);
    $.ajax({
        url: "register.php",
        beforeSend: function () {
            $("#spin2").html("<i class='fa fa-spinner fa-spin'></i>");
        },
        complete: function () {
            $("#spin2").html("");
        },
        type: "post",
        data: {
            firstname: firstname,
            lastname: lastname,
            phoneno: phoneno,
            status: status,
            church: church,
            arch: arch,
            chkpin: chkpin
        },
        success: function (success) {
            if (isNaN(success)){
                window.location = "#back";
                $("#error-margin").html(success);
            }
            else window.location = "success.html";
        }
    });
});
$("#pin_edit").focusin(function () {
    $("#error-margin").html("");
});

$("#update").click(function () {
//First clear the previous message
    $("#margin").html("");
    var firstname = $("#firstname").val();
    var lastname = $("#secondname").val();
    var phoneno = $("#number").val();
    var status = $("input:radio[name=status]:checked").val();
    var church = $("#church").val();
    var arch = $("#arch").val();
    var pin_edit = $("#pin_edit").val();
    
    $.ajax({
        url: "edit.php",
        beforeSend: function () {
            $("#spin4").html("<i class='fa fa-spinner fa-spin'></i>");
        },
        complete: function () {
            $("#spin4").html("");
        },
        type: "post",
        data: {
            firstname: firstname,
            lastname: lastname,
            phoneno: phoneno,
            status: status,
            church: church,
            arch: arch,
            pin_edit: pin_edit
        },
        success: function (response) {
            console.log(response);
            if (response === "Pin has not been registered"){
                window.location = "#portfolio";
                $("#margin").html(response).addClass("error-margin danger-color");
            } else if (response === "You have exceeded the number of edits"){
                window.location = "#portfolio";
                $("#margin").html(response).addClass("error-margin danger-color white-text");
            }
            else if(response === "1" || response === "2"){
                window.location = "#portfolio";
                $("#margin").html("Updated Successfully.<br> You have edited " +response+ " time(s)").addClass("success-margin success-color white-text");
            }
            else if(response === "3"){
                window.location = "#portfolio";
                $("#margin").html("Updated Successfully.<br> You have now used up your edits").addClass("success-margin");
            }
        }
    });
});