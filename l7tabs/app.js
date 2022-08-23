var gettablinks = document.getElementsByClassName('tablinks'); //HTML Collection
var gettabpanes = document.getElementsByClassName('tab-pane'); //HTML Collection
var getbtncloses = document.querySelectorAll('.btn-close') //Nodelist 

var tabpanes = Array.from(gettabpanes);


function gettab(evn,linkid){

    // console.log('evn,target');
    // console.log(linkid);

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = "none";
    });

    document.getElementById(linkid).style.display = "block";
}