// toggling in gridView 
let gridView = document.getElementById("gridView");
gridView.style.display="none";

function onGrid(){
    if(gridView.style.display == "none")
    {
        gridView.style.display = "block";
    }
    else
    {
        gridView.style.display = "none";
    }
}


//toggling in listView
let listView = document.getElementById("listView");
listView.style.display = "none";

function onList(){
    if(listView.style.display == "none")
    {
        listView.style.display = "block";
    }
    else
    {
        listView.style.display = "none";
    }
}


let namev="";
let idv="";
let skillsv="";
let projectv="";
let hcmv="";


let oldnamev="";
let oldidv="";
let oldskillsv="";
let oldprojectv="";
let oldhcmv="";


// onEditRow() function for editing the details 
function onEditRow(n){
    let editBtn = document.getElementsByClassName("edit" + n);
    let saveBtn = document.getElementsByClassName("save" + n);  

    namev = document.getElementsByClassName("id" + n + "1");
    idv = document.getElementsByClassName("id" + n + "2");
    skillsv = document.getElementsByClassName("id" + n + "3");
    projectv = document.getElementsByClassName("id" + n + "4");
    hcmv = document.getElementsByClassName("id" + n + "5");

    for(let i=0; i<2; i++)
    {
        editBtn[i].style.display = "none";
        saveBtn[i].style.display = "block";

        namev[i].disabled = false;
        idv[i].disabled = false;
        skillsv[i].disabled = false;
        projectv[i].disabled = false;
        hcmv[i].disabled = false;
    }

    oldnamev = namev[0].value;
    oldidv = idv[0].value;
    oldskillsv = skillsv[0].value;
    oldprojectv = projectv[0].value;
    oldhcmv = hcmv[0].value;
}

let index;


// onSaveRow() function for saving the details 
function onSaveRow(n){
    let editBtn = document.getElementsByClassName("edit" + n);
    let saveBtn = document.getElementsByClassName("save" + n);

    namev = document.getElementsByClassName("id" + n + "1");
    idv = document.getElementsByClassName("id" + n + "2");
    skillsv = document.getElementsByClassName("id" + n + "3");
    projectv = document.getElementsByClassName("id" + n + "4");
    hcmv = document.getElementsByClassName("id" + n + "5");


    // saving name in both the card & table 
    if(namev[0].value != oldnamev){
        namev[1].value = namev[0].value;
    }else if(namev[1].value != oldnamev){
        namev[0].value = namev[1].value;
    }

    // saving id in both the card & table 
    if(idv[0].value != oldidv){
        idv[1].value = idv[0].value;
    }else if(idv[1].value != oldidv){
        idv[0].value = idv[1].value;
    }

    // saving skills in both the card & table 
    if(skillsv[0].value != oldskillsv){
        skillsv[1].value = skillsv[0].value;
    }else if(skillsv[1].value != oldskillsv){
        skillsv[0].value = skillsv[1].value;
    }

    // saving project in both the card & table 
    if(projectv[0].value != oldprojectv){
        projectv[1].value = projectv[0].value;
    }else if(projectv[1].value != oldprojectv){
        projectv[0].value = projectv[1].value;
    }

    // saving hcm in both the card & table 
    if(hcmv[0].value != oldhcmv){
        hcmv[1].value = hcmv[0].value;
    }else if(hcmv[1].value != oldhcmv){
        hcmv[0].value = hcmv[1].value;
    }



    for(let i=0; i<2; i++)
    {
        saveBtn[i].style.display = "none";
        editBtn[i].style.display = "block";        

        namev[i].disabled = true;
        idv[i].disabled = true;
        skillsv[i].disabled =true;
        projectv[i].disabled = true;
        hcmv[i].disabled = true;
    } 
}


// onDeletingRow() function for deleting the details 
function onDeleteRow(n){
    let selectedRows = document.getElementsByClassName("row" + n);
    let i=0;
    while(i<selectedRows.length)
    {
        selectedRows[i].remove();
    }
}