
var eventList = ["keyup", "click"];
var personalia_trigg = document.getElementById("personalia");
var komp_trigg = document.getElementById("kompetanseRows");

for (Event of eventList){
    personalia_trigg.addEventListener(Event, copyTextPers);
    komp_trigg.addEventListener(Event, copyTextKomp);
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

    var cvNavn = document.getElementById("cvNavn");
    var cvAdresse = document.getElementById("cvAdresse");
    var cvEmail = document.getElementById("cvEmail")
    var cvMobil = document.getElementById("cvMobil")
    var cvSivilstand = document.getElementById("cvSivilstand");
    var cvFodt = document.getElementById("cvFodt")
    var cvKompetanse = document.getElementById("cvKompetanse")

    cvNavn.value = navn;
    cvAdresse.value = adresse;
    cvEmail.value = email;
    cvMobil.value = mobil;
    cvSivilstand.value = sivilstand.options[x].text;
    cvFodt.value = fodt;
    cvKompetanse.value = kompetanse;
}

function copyTextKomp(){
    var yearEd = document.getElementById("yearEd").value;
    var university = document.getElementById("university").value.trim();
    var speciality = document.getElementById("speciality").value.trim();

    var cvYearEd = document.getElementById("cvYearEd");
    var cvUniversity = document.getElementById("cvUniversity");
    var cvSpeciality = document.getElementById("cvSpeciality");

    

    if (i > 1){
        cvArray[i-1].querySelector(`#cvYe${i-1}`).value = utArray[i-1].querySelector(`#yearEd${i-1}`).value;
        cvArray[i-1].querySelector(`#cvUni${i-1}`).value = utArray[i-1].querySelector(`#university${i-1}`).value;
        cvArray[i-1].querySelector(`#cvSpec${i-1}`).value = utArray[i-1].querySelector(`#speciality${i-1}`).value;  
    } 

    else{
        cvYearEd.value = yearEd;
        cvUniversity.value = university;
        cvSpeciality.value = speciality;
    }      

}
var i = 1;
var utArray = [];
var cvArray = [];

function addLine(firstRow, cvFirstrow, whichLine){
    if (i <= 1){  
        // Lage en array til hver row
        utArray[0] = firstRow;
        cvArray[0] = cvFirstrow;

        // Kloner hver row
        var newRow = utArray[0].cloneNode(true);
        var cvNewRow = cvArray[0].cloneNode(true);
        var x,y;
        // Tømmer den nye raden for tekst

        x =newRow.querySelectorAll('input');
        z =cvNewRow.querySelectorAll('input');

        for(y = 0; y < x.length; y++){
            x[y].value = '';
            z[y].value = '';
        }

        if (whichLine === 0){
            // Setter ny id på raden
        newRow.setAttribute('id',`utdanning_row${i}`);
        cvNewRow.setAttribute('id',`cvUtdanning_row${i}`);

        // Form rename id 
        newYearEd  = newRow.querySelector("#yearEd");
        newYearEd.id = `yearEd${i}`;
        newUni  = newRow.querySelector("#university");
        newUni.id = `university${i}`;
        newSpec  = newRow.querySelector("#speciality");
        newSpec.id = `speciality${i}`;

        // Cv rename id
        cvNewYearEd  = cvNewRow.querySelector("#cvYearEd");
        cvNewYearEd.id = `cvYe${i}`;
        cvNewUni  = cvNewRow.querySelector("#cvUniversity");
        cvNewUni.id = `cvUni${i}`;
        cvNewSpec  = cvNewRow.querySelector("#cvSpeciality");
        cvNewSpec.id = `cvSpec${i}`; 

        }    

        utArray.push(newRow);
        cvArray.push(cvNewRow);
        utArray[0].parentNode.insertBefore(utArray[1], utArray[0].nextSibling);
        cvArray[0].parentNode.insertBefore(cvArray[1], cvArray[0].nextSibling);
    }

    else{ 
        utArray[i] = utArray[i-1].cloneNode(true);
        cvArray[i] = cvArray[i-1].cloneNode(true);
        
        x =utArray[i].querySelectorAll('input');
        z =cvArray[i].querySelectorAll('input');

        for(y = 0; y < x.length; y++){
            x[y].value = '';
            z[y].value = '';
        }

        if (whichLine === 0){
            utArray[i].setAttribute('id',`utdanning_row${i}`);
            cvArray[i].setAttribute('id',`cvUtdanning_row${i}`);
    
            // Rename form siden jeg har duplisert den forrige raden har hver column samme navn som forrige
            newYearEd  = utArray[i].querySelector(`#yearEd${i-1}`);
            newYearEd.id = `yearEd${i}`;
            newUni  = utArray[i].querySelector(`#university${i-1}`);
            newUni.id = `university${i}`;
            newSpec = utArray[i].querySelector(`#speciality${i-1}`);
            newSpec.id = `speciality${i}`;
    
            // Rename CV
            cvNewYearEd = cvArray[i].querySelector(`#cvYe${i-1}`);
            cvNewYearEd.id = `cvYe${i}`;
            cvNewUni = cvArray[i].querySelector(`#cvUni${i-1}`);
            cvNewUni.id = `cvUni${i}`;
            cvNewSpec = cvArray[i].querySelector(`#cvSpec${i-1}`);
            cvNewSpec.id = `cvSpec${i}`;
            
        }
        

        utArray[i-1].parentNode.insertBefore(utArray[i], utArray[i-1].nextSibling);
        cvArray[i-1].parentNode.insertBefore(cvArray[i], cvArray[i-1].nextSibling);
    } 
    i ++;
        
}



// Funksjon for å lage stor bokstav etter space.
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (let j = 0; j <splitStr.length; j++){
        splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
    }
    return splitStr.join(' ');
  }





