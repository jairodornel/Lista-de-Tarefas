
// Função que add tarefa 

function addTask(){

//Titulo da tarefa

const inpp=document.querySelector('#dados1').value;

if(inpp){

    const template= document.querySelector('.template');
    const newTask= template.cloneNode(true);

    newTask.querySelector('.S1').textContent= inpp

    newTask.classList.remove('template');
    newTask.classList.remove('hide');

    const list= document.querySelector('#listas');

    list.appendChild(newTask);

    const removeBtn=newTask.querySelector('.Q1').addEventListener("click", function(){

        removeTask(this);
    })


    const adddd=newTask.querySelector('.T1').addEventListener("click", function(){

        completeTask(this) 



    })


    document.querySelector('#dados1').value= "";







}

}

function removeTask(task){

    task.parentNode.remove(true)
}

function completeTask(task){

    const taskToComplete= task.parentNode;

    taskToComplete.classList.toggle('T1')
}





//Evento de adicionar tarefa 

var bott= document.querySelector('#botao');

bott.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});