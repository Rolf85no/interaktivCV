

var eventList = ["keyup", "onchange", "click"];
var personalia_trigg = document.getElementById("personalia");


for (Event of eventList){
    personalia_trigg.addEventListener(Event, copyTextPers);
}

function copyTextPers(){
    var navn = capitalize(document.getElementById("navn").value.trim());
    var adresse = capitalize(document.getElementById("adresse").value.trim());
    var email = document.getElementById("email").value.trim();
    var mobil = document.getElementById("mobil").value.trim();
    var sivilstand = document.getElementById("sivilstand");
    var x = sivilstand.selectedIndex;
    var fodt = document.getElementById("fodt").value;
    var kompetanse = document.getElementById("kompetanse").value;

    var personalia = {
        navn: navn,
        adresse: adresse,
        email: email,
        mobil: mobil,
        sivilstand: sivilstand.options[x].text,
        fodt: fodt,
        kompetanse: kompetanse
    };
    if(personalia){
        localStorage.setItem("personalia", JSON.stringify(personalia)); 
    }
       
    
}

let i = 1;
let utArrCounter = 0;
var utArray = [];


let myArray = []
function copyTextKomp(counters, yEd, uni, spec){
    var yearEd = document.getElementById("yearEd").value;
    var university = document.getElementById("university").value.trim();
    var speciality = document.getElementById("speciality").value.trim();
    myArray[0] = yearEd;
    myArray[1] = university;
    myArray[2] = speciality;
    if (counters > 0){
        myArray.push(yEd);
        myArray.push(uni);
        myArray.push(spec);
    }
    localStorage.setItem("myArray", JSON.stringify(myArray));

}

function addLine(){
    if (i <= 1){  
        // Velger utdanning_row og kopierer den, fjerne alle verdier, 
        // Setter neste row id til utdanning_row i.
        var edrow = document.getElementById('utdanning_row');
        utArray[0] = edrow;
        var newRow = utArray[0].cloneNode(true);
        newRow.querySelector("#yearEd").value = '';
        newRow.querySelector("#university").value = '';
        newRow.querySelector("#speciality").value = '';
        newRow.setAttribute('id',`utdanning_row${i}`);

        newYearEd  = newRow.querySelector("#yearEd");
        newYearEd.id = `yearEd${i}`;
        newUni  = newRow.querySelector("#university");
        newUni.id = `university${i}`;
        newSpec  = newRow.querySelector("#speciality");
        newSpec.id = `speciality${i}`;
        utArray.push(newRow);
        utArray[0].parentNode.insertBefore(utArray[1], utArray[0].nextSibling);
        utArrCounter++;
    }

    else{
        copyTextKomp(utArrCounter,utArray[utArrCounter].querySelector("input[type='month']").value, 
        utArray[utArrCounter].querySelector("input[type='text']").value, 
        utArray[utArrCounter].querySelector(`#speciality${utArrCounter}`).value);

        utArray[i] = utArray[i-1].cloneNode(true);
        utArray[i].querySelector(`#yearEd${i-1}`).value = '';
        utArray[i].querySelector(`#university${i-1}`).value = '';
        utArray[i].querySelector(`#speciality${i-1}`).value = '';
        utArray[i].setAttribute('id',`utdanning_row${i}`);

        newYearEd  = utArray[i].querySelector(`#yearEd${i-1}`);
        newYearEd.id = `yearEd${i}`;
        newUni  = utArray[i].querySelector(`#university${i-1}`);
        newUni.id = `university${i}`;
        newSpec = utArray[i].querySelector(`#speciality${i-1}`);
        newSpec.id = `speciality${i}`;
        utArray[i-1].parentNode.insertBefore(utArray[i], utArray[i-1].nextSibling);
        utArrCounter++;
    } 
    i ++;

        
}



// Funksjon for å lage stor bokstav etter space.
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i <splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

// Resetter form
  
function reset(){
    for(key in localStorage) {
        delete localStorage[key];
    }

}

cvArray =[]

function getText(){
    var personalia = JSON.parse(localStorage.getItem("personalia"));

    if (personalia != null){
        document.getElementById("cvNavn").innerHTML=personalia.navn;
        document.getElementById("cvAdresse").innerHTML=personalia.adresse;
        document.getElementById("cvEmail").innerHTML=personalia.email;
        document.getElementById("cvMobil").innerHTML=personalia.mobil;
        document.getElementById("cvSivilstand").innerHTML=personalia.sivilstand;
        document.getElementById("cvFodt").innerHTML=personalia.fodt;   
        document.getElementById("cvKompetanse").innerHTML=personalia.kompetanse;
    }
    
    var kompetanseValues = JSON.parse(localStorage.getItem("myArray"));
    if(kompetanseValues){
        document.getElementById("cvYearEd").innerHTML=kompetanseValues[0];
        document.getElementById("cvUniversity").innerHTML=kompetanseValues[1];
        document.getElementById("cvSpeciality").innerHTML=kompetanseValues[2];
    }
    
    if (kompetanseValues.length > 3){
        var edrow = document.getElementById('cvutdanning_row');
        var newRow = edrow(true);
        newRow.querySelector("#cvYearEd").value = '';
        newRow.querySelector("#cvUniversity").value = '';
        newRow.querySelector("#cvSpeciality").value = '';
        newRow.setAttribute('id',`cvutdanning_row${i}`);

        newYearEd  = newRow.querySelector("#cvYearEd");
        newYearEd.id = `cvYearEd${i}`;
        newUni  = newRow.querySelector("#cvUniversity");
        newUni.id = `university${i}`;
        newSpec  = newRow.querySelector("#cvSpeciality");
        newSpec.id = `cvSpeciality${i}`;
        edrow.parentNode.insertBefore(newRow, edrow.nextSibling);
    }
}



