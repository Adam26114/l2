const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
    // createemaillist(e.target);
    // createemaillist(e.target.value);
    
    // createemaillist(this);
    createemaillist(this.value);

});

function createemaillist(inputtext){
    // console.log(inputtext);

    
    // split by (",")
    // const eitems = inputtext.split(',');
    // console.log(eitems);



    //remove empty
    // const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitems);
 

    // remove space/empty
    const eitems = inputtext.split(',').filter(reempty=>reempty.trim() !== '').map(reempty=>reempty.trim());
    console.log(eitems);



};