// Har ikke fått en måte å endre onkeyup og onchange verdier etterhvert som jeg legger til rader.

function copyText(textForm){
    var textCvName = 'cv' + textForm.id;
    textCv = document.getElementById(textCvName);
    textCv.innerHTML = textForm.value.trim();
}

function copyYear(dateStart, dateEnd){
    var textCvName = 'cv' + dateStart.id;
    dateCv = document.getElementById(textCvName);
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

function addLine(firstRow){
    /*document.getElementById('myTable').rows.namedItem('cvutdanning_row')*/
    i++;
    var x,y;
    var textCvName = 'cv' + firstRow.id;
    var cvFirstRow = document.getElementById(textCvName);
    var newRow = firstRow.cloneNode(true);
    var cvNewRow = cvFirstRow.cloneNode(true);

    newRow.id = renameVar(newRow.id);
    cvNewRow.id = renameVar(cvNewRow.id);

    var oldButton = firstRow.children[4].children[0]
    oldButton.style.display ="none";
    var newButton = newRow.children[4].children[0];
    newButton.id = renameVar(newButton.id);

    // Raden med hoved-id f.eks school
    var yearRow = newRow.children[1];
    yearRow.id = renameVar(yearRow.id);
    
    // Selecter alle input-columns
    x =newRow.querySelectorAll('.form-control');
    x[1].min = '';
    // Selecter alle td innenfor raden i CV
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

function removeLine(firstRow){
    var textCvName = 'cv' + varName;
    var cvFirstRow = document.getElementById(textCvName);
    var nextRow = firstRow.nextSibling;
    var prevRow = firstRow.previousSibling;
    if (prevRow.id === undefined  && nextRow.id === undefined){
        alert("Ingen linjer å slette");
    }
    else{
        firstRow.remove();
        cvFirstRow.remove();
        if (nextRow.id === undefined){
            addButton = prevRow.children[4].children[0];
            addButton.style.display ="inline-block";
        }
        
    }        

}

function renameVar(varName){
    var lVar = varName.length - 1;
    varName = varName.split('');
    varName[lVar] = i;
    varName = varName.join('');

    return varName;


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
