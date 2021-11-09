function copyText(){
    var navn = document.getElementById("navn").value;
    var adresse = document.getElementById("adresse").value;
    var email = document.getElementById("email").value;
    var mobil = document.getElementById("mobil").value;
    var x = document.getElementById("sivilstand").value;
    /* var sivilstand = x.options[x.selectedIndex].text; */
    var fodt = document.getElementById("fodt").value;
    var kompetanse = document.getElementById("kompetanse").value;
    
    localStorage.setItem("navn", navn);
    localStorage.setItem("adresse", adresse);
    localStorage.setItem("email", email);
    localStorage.setItem("mobil", mobil);
    /* localStorage.setItem("sivilstand", sivilstand); */
    localStorage.setItem("fodt", fodt);
    localStorage.setItem("kompetanse", kompetanse);

}

function getText(){
    document.getElementById("cvNavn").innerHTML=localStorage.getItem("navn");
    document.getElementById("cvAdresse").innerHTML=localStorage.getItem("adresse");
    document.getElementById("cvEmail").innerHTML=localStorage.getItem("email");
    document.getElementById("cvMobil").innerHTML=localStorage.getItem("mobil");
   /* document.getElementById("cvSivilstand").innerHTML=localStorage.getItem("sivilstand"); */
    document.getElementById("cvFodt").innerHTML=localStorage.getItem("fodt");

    document.getElementById("cvKompetanse").innerHTML=localStorage.getItem("kompetanse");
}

function reset(){
    localStorage.clear();
}






