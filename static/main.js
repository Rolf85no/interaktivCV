// Har ikke fått en måte å endre onkeyup og onchange verdier etterhvert som jeg legger til rader.

function copyText(textForm, textCv){
    textCv.innerHTML = textForm.value.trim();
}

function copyYear(dateStart, dateEnd, dateCv){
    dateEnd.min = dateStart.value;
    dateCv.innerHTML = dateStart.value + " - " + dateEnd.value;
}

function reset(formData){
    x = formData.querySelectorAll('input');

    for(y = 0; y < x.length; y++){
        x[y].value = '';
    }
}

var i = 0;

function addLine(firstRow, cvFirstRow){
    i++;
    var x,y;
    var newRow = firstRow.cloneNode(true);
    var cvNewRow = cvFirstRow.cloneNode(true);
    
    newRow.id = newRow.id + i;
    cvNewRow.id = cvNewRow.id + i;

    x =newRow.querySelectorAll('.form-control');
    x[1].min = '';
    z = cvNewRow.getElementsByTagName('td');

    for(y = 0; y < x.length; y++){
        x[y].value = '';
        x[y].id = x[y].id + i;
    }

    for(var f = 0; f < z.length; f++){
        z[f].innerHTML = '';
        z[f].id = z[f].id + i;
    }

    firstRow.parentNode.insertBefore(newRow, firstRow.nextSibling);
    cvFirstRow.parentNode.insertBefore(cvNewRow, cvFirstRow.nextSibling);

}

   
             

/*
// Funksjon for å lage stor bokstav etter space.
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (let j = 0; j <splitStr.length; j++){
        splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
    }
    return splitStr.join(' ');
  }



*/
