var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('I am working');


    if(gettextbox.value === ''){
        // window.alert('You need to write something');
    }else{
        addnew();
    }

    e.preventDefault();
});

function addnew(todo){
    var todotext = gettextbox.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todotext));
    // console.log(li);

    getul.appendChild(li);
    gettextbox.value = '';

    updatelocalstorage();
}


function updatelocalstorage(){
    var getalllis = document.querySelectorAll('li')

    // console.log(getallli);


    const todos = [];

    getalllis.forEach(function(getallli){
        todos.push({
            text:getallli.textContent,
            done:getallli.classList.contains('done')
        });
    });

    console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getalllstods);

if(getlstodos){
    getlstodos.forEach(function(getlstodo){

        // console.log(getlstodos);
        // console.log(getlstodo.text);

        addnew(getlstodo);
    });
}