function copyText(textForm){
    var textCvName = 'cv' + textForm.id;
    textCv = document.getElementById(textCvName);
    if (textForm.id != "mail" && textForm.id != "kompetanse" && textForm.id != "mobil"){
        textCv.innerHTML = capitalize(textForm.value.trim());
    }

    if(textForm.id === "mobil"){

        if(textForm.value === String(Number(textForm.value))) {
            textCv.innerHTML = textForm.value.trim();
          }
    }
    else{
        textCv.innerHTML = textForm.value.trim();
    }
    
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
    len_row = firstRow.children.length - 1;
    /*document.getElementById('myTable').rows.namedItem('cvutdanning_row')*/
    i++;
    var x,y;
    var textCvName = 'cv' + firstRow.id;
    var cvFirstRow = document.getElementById(textCvName);
    var newRow = firstRow.cloneNode(true);
    var cvNewRow = cvFirstRow.cloneNode(true);

    newRow.id = renameVar(newRow.id);
    cvNewRow.id = renameVar(cvNewRow.id);

    var oldButton = firstRow.children[len_row].children[0]
    oldButton.style.display ="none";
    var newButton = newRow.children[len_row].children[0];
    newButton.id = renameVar(newButton.id);

    // Raden med hoved-id f.eks school
    var yearRow = newRow.children[1];
    yearRow.id = renameVar(yearRow.id);
    
    // Selecter alle input-columns
    x =newRow.querySelectorAll('.form-control');
    x[1].min = '';
    // Selecter alle td innenfor raden i CV
    z = cvNewRow.getElementsByTagName('td');
    var andreHead = cvNewRow.getElementsByClassName("andreHead");
    if (andreHead.length != 0){
        andreHead[0].style.opacity = 0;
    }    
    

    for(y = 0; y < x.length; y++){
        x[y].value = '';
        x[y].id = renameVar(x[y].id);
    }

    for(var f = 0; f < z.length; f++){
        z[f].innerHTML = '';
        z[f].id = renameVar(z[f].id);
    }

    firstRow.parentNode.insertBefore(newRow, firstRow.nextSibling);
    cvFirstRow.parentNode.insertBefore(cvNewRow, cvFirstRow.nextSibling);

}

function removeLine(firstRow){
    len_row = firstRow.children.length - 1;
    var varName = firstRow.id;
    var textCvName = 'cv' + varName;
    var cvFirstRow = document.getElementById(textCvName);
    var cvNextRow = cvFirstRow.nextSibling;
    var nextRow = firstRow.nextSibling;
    var prevRow = firstRow.previousSibling;
    
    if (prevRow.id === undefined  && nextRow.id === undefined){
        alert("Må beholde en rad");
    }
    else{
        firstRow.remove();
        cvFirstRow.remove();
        if (prevRow.id === undefined){   
            cvNextRow.getElementsByClassName("andreHead")[0].style.opacity = 1;
        }
        
        if (nextRow.id === undefined){
            addButton = prevRow.children[len_row].children[0];
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
             

function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (let j = 0; j <splitStr.length; j++){
        splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
    }
    return splitStr.join(' ');
  }
