
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

    // Utdannelsesrad kopi
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

    // Work rad kopi
    var yearWork = document.getElementById("yearWork").value;
    var company = document.getElementById("company").value.trim();
    var title = document.getElementById("title").value.trim();
    var cvYearWork = document.getElementById("cvYearWork");
    var cvCompany = document.getElementById("cvCompany");
    var cvTitle = document.getElementById("cvTitle");   
    
    if (wCount > 1){
        // Skrivinga henger en counter etter ny rad.
        cvWorkArray[wCount-1].querySelector(`#cvYearWork${wCount-1}`).value = workArray[wCount-1].querySelector(`#yearWork${wCount-1}`).value;
        cvWorkArray[wCount-1].querySelector(`#cvCompany${wCount-1}`).value = workArray[wCount-1].querySelector(`#company${wCount-1}`).value;
        cvWorkArray[wCount-1].querySelector(`#cvTitle${wCount-1}`).value = workArray[wCount-1].querySelector(`#title${wCount-1}`).value;

    }

    else{
        cvYearWork.value = yearWork;
        cvCompany.value = company;
        cvTitle.value = title;
    }

    // Kurs rad kopi
    var yearKurs = document.getElementById("yearKurs").value;
    var place = document.getElementById("place").value.trim();
    var course = document.getElementById("course").value.trim();
    var cvYearKurs = document.getElementById("cvYearKurs");
    var cvPlace = document.getElementById("cvPlace");
    var cvCourse = document.getElementById("cvCourse");
    
    
    if (kCount > 1){
        // Skrivinga henger en counter etter ny rad.
        cvKursArray[kCount-1].querySelector(`#cvYearKurs${kCount-1}`).value = kursArray[kCount-1].querySelector(`#yearKurs${kCount-1}`).value;
        cvKursArray[kCount-1].querySelector(`#cvPlace${kCount-1}`).value = kursArray[kCount-1].querySelector(`#place${kCount-1}`).value;
        cvKursArray[kCount-1].querySelector(`#cvCourse${kCount-1}`).value = kursArray[kCount-1].querySelector(`#course${kCount-1}`).value;

    }
    else{
        cvYearKurs.value = yearKurs;
        cvPlace.value = place;
        cvCourse.value = course;
    }



}

var i = 1;
var utArray = [];
var cvArray = [];

var wCount = 1;
var workArray =[];
var cvWorkArray = [];

var kCount = 1;
var kursArray = [];
var cvKursArray = [];


function addLine(firstRow, cvFirstrow, whichLine){

    function cleanCloneData(formData){
        // Kloner hver row
        var x,y;
        var newRow = formData.cloneNode(true);
        
        x =newRow.querySelectorAll('input');

        for(y = 0; y < x.length; y++){
            x[y].value = '';
        }

        return newRow;
    }


    function pushLine(formArray, newArray, lineC){
        if (lineC <=1){
            formArray[0].parentNode.insertBefore(formArray[1], formArray[0].nextSibling);
            newArray[0].parentNode.insertBefore(newArray[1], newArray[0].nextSibling);
        }

        else{
            formArray[lineC-1].parentNode.insertBefore(formArray[lineC], formArray[lineC-1].nextSibling);
            newArray[lineC-1].parentNode.insertBefore(newArray[lineC], newArray[lineC-1].nextSibling);
        }
    }


        // Utdanningsrad
        if (whichLine === 0){
            if (i <= 1){          
                // Tømmer den nye raden for tekst
                var newRow = cleanCloneData(firstRow);
                var cvNewRow = cleanCloneData(cvFirstrow);
                    // Setter ny id på raden
                utArray[0] = firstRow;
                cvArray[0] = cvFirstrow;
                newRow.setAttribute('id',`utdanning_row${i}`);
                cvNewRow.setAttribute('id',`cvUtdanning_row${i}`);

                // Form rename id 
                newYear  = newRow.querySelector("#yearEd");
                newYear.id = `yearEd${i}`;
                newUni  = newRow.querySelector("#university");
                newUni.id = `university${i}`;
                newSpec  = newRow.querySelector("#speciality");
                newSpec.id = `speciality${i}`;

                // Cv rename id
                cvNewYear  = cvNewRow.querySelector("#cvYearEd");
                cvNewYear.id = `cvYe${i}`;
                cvNewUni  = cvNewRow.querySelector("#cvUniversity");
                cvNewUni.id = `cvUni${i}`;
                cvNewSpec  = cvNewRow.querySelector("#cvSpeciality");
                cvNewSpec.id = `cvSpec${i}`;

                // Push to array
                utArray.push(newRow);
                cvArray.push(cvNewRow);
                pushLine(utArray, cvArray, i);
            }

            else{    
                // Kloner forrige rad og fjerner tekst             
                utArray[i] = cleanCloneData(utArray[i-1])
                cvArray[i] = cleanCloneData(cvArray[i-1])
    
                utArray[i].setAttribute('id',`utdanning_row${i}`);
                cvArray[i].setAttribute('id',`cvUtdanning_row${i}`);
        
                // Rename form siden jeg har duplisert den forrige raden har hver column samme navn som forrige
                newYear  = utArray[i].querySelector(`#yearEd${i-1}`);
                newYear.id = `yearEd${i}`;
                newUni  = utArray[i].querySelector(`#university${i-1}`);
                newUni.id = `university${i}`;
                newSpec = utArray[i].querySelector(`#speciality${i-1}`);
                newSpec.id = `speciality${i}`;
        
                // Rename CV
                cvNewYear = cvArray[i].querySelector(`#cvYe${i-1}`);
                cvNewYear.id = `cvYe${i}`;
                cvNewUni = cvArray[i].querySelector(`#cvUni${i-1}`);
                cvNewUni.id = `cvUni${i}`;
                cvNewSpec = cvArray[i].querySelector(`#cvSpec${i-1}`);
                cvNewSpec.id = `cvSpec${i}`;
                pushLine(utArray, cvArray, i);
            }
            i ++;

        }


        // Work rad
        else if (whichLine === 1){
            if (wCount === 1){
                // Tømmer den nye raden for tekst og kloner den
                var newRow = cleanCloneData(firstRow);
                var cvNewRow = cleanCloneData(cvFirstrow);
                workArray[0] = firstRow;
                cvWorkArray[0] = cvFirstrow;
                
                // Setter ny id på raden
                newRow.setAttribute('id',`work_row${wCount}`);
                cvNewRow.setAttribute('id',`cvWork_row${wCount}`);

                //Form work id change
                newYear = newRow.querySelector("#yearWork");
                newYear.id = `yearWork${wCount}`;
                newComp = newRow.querySelector("#company");
                newComp.id = `company${wCount}`;
                newTitle = newRow.querySelector("#title");
                newTitle.id = `title${wCount}`;

                // Cv work id change
                cvNewYear = cvNewRow.querySelector("#cvYearWork");
                cvNewYear.id = `cvYearWork${wCount}`;
                cvNewComp = cvNewRow.querySelector("#cvCompany");
                cvNewComp.id = `cvCompany${wCount}`;
                cvNewTitle = cvNewRow.querySelector("#cvTitle");
                cvNewTitle.id = `cvTitle${wCount}`;

                workArray.push(newRow);
                cvWorkArray.push(cvNewRow);
                pushLine(workArray, cvWorkArray, wCount);

            }

            else{
                // Kloner forrige rad og fjerner tekst
                workArray[wCount] = cleanCloneData(workArray[wCount -1]);
                cvWorkArray[wCount] = cleanCloneData(cvWorkArray[wCount -1]);

                // Lager ny id på raden både for work_row og cvWork row
                workArray[wCount].setAttribute('id',`work_row${wCount}`);
                cvWorkArray[wCount].setAttribute('id',`cvWork_row${wCount}`);

                // Lager ny id på hver column i work_row
                // Henter ut forrige column
                // Setter ny id på column
                newYear = workArray[wCount].querySelector(`#yearWork${wCount-1}`);
                newYear.id = `yearWork${wCount}`;
                newComp = workArray[wCount].querySelector(`#company${wCount-1}`);
                newComp.id = `company${wCount}`;
                newTitle = workArray[wCount].querySelector(`#title${wCount-1}`);
                newTitle.id = `title${wCount}`;                 

                // Lager ny id på hver column i cvWork_row
                cvNewYear = cvWorkArray[wCount].querySelector(`#cvYearWork${wCount-1}`);
                cvNewYear.id = `cvYearWork${wCount}`;
                cvNewComp = cvWorkArray[wCount].querySelector(`#cvCompany${wCount-1}`);
                cvNewComp.id = `cvCompany${wCount}`;
                cvNewTitle = cvWorkArray[wCount].querySelector(`#cvTitle${wCount-1}`);
                cvNewTitle.id = `cvTitle${wCount}`;
                pushLine(workArray, cvWorkArray, wCount);

            }
            wCount ++;
        }

        else if (whichLine === 2){

            if (kCount === 1){
                // Tømmer den nye raden for tekst og kloner den
                var newRow = cleanCloneData(firstRow);
                var cvNewRow = cleanCloneData(cvFirstrow);
                kursArray[0] = firstRow;
                cvKursArray[0] = cvFirstrow;

                // Setter ny id på raden
                newRow.setAttribute('id',`kurs_row${kCount}`);
                cvNewRow.setAttribute('id',`cvKurs_row${kCount}`);

                //Form kurs id change
                newYear = newRow.querySelector("#yearKurs");
                newYear.id = `yearKurs${kCount}`;
                newComp = newRow.querySelector("#place");
                newComp.id = `place${kCount}`;
                newTitle = newRow.querySelector("#course");
                newTitle.id = `course${kCount}`;

                // Cv kurs id change
                cvNewYear = cvNewRow.querySelector("#cvYearKurs");
                cvNewYear.id = `cvYearKurs${kCount}`;
                cvNewComp = cvNewRow.querySelector("#cvPlace");
                cvNewComp.id = `cvPlace${kCount}`;
                cvNewTitle = cvNewRow.querySelector("#cvCourse");
                cvNewTitle.id = `cvCourse${kCount}`;

                kursArray.push(newRow);
                cvKursArray.push(cvNewRow);
                pushLine(kursArray, cvKursArray, kCount);

            }

            else{
                // Kloner forrige rad og fjerner tekst
                kursArray[kCount] = cleanCloneData(kursArray[kCount -1]);
                cvKursArray[kCount] = cleanCloneData(cvKursArray[kCount -1]);

                // Lager ny id på raden både for work_row og cvWork row
                kursArray[kCount].setAttribute('id',`kurs_row${kCount}`);
                cvKursArray[kCount].setAttribute('id',`cvKurs_row${kCount}`);

                // Lager ny id på hver column i work_row
                // Henter ut forrige column
                // Setter ny id på column
                newYear = kursArray[kCount].querySelector(`#yearKurs${kCount-1}`);
                newYear.id = `yearKurs${kCount}`;
                newComp = kursArray[kCount].querySelector(`#place${kCount-1}`);
                newComp.id = `place${kCount}`;
                newTitle = kursArray[kCount].querySelector(`#course${kCount-1}`);
                newTitle.id = `course${kCount}`;                 

                // Lager ny id på hver column i cvWork_row
                cvNewYear = cvKursArray[kCount].querySelector(`#cvYearKurs${kCount-1}`);
                cvNewYear.id = `cvYearKurs${kCount}`;
                cvNewComp = cvKursArray[kCount].querySelector(`#cvPlace${kCount-1}`);
                cvNewComp.id = `cvPlace${kCount}`;
                cvNewTitle = cvKursArray[kCount].querySelector(`#cvCourse${kCount-1}`);
                cvNewTitle.id = `cvCourse${kCount}`;
                pushLine(kursArray, cvKursArray, kCount);

            }
            kCount ++;
        }
        
}


// Funksjon for å lage stor bokstav etter space.
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (let j = 0; j <splitStr.length; j++){
        splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
    }
    return splitStr.join(' ');
  }



