//Create global object
const DOM = {
  taskInput: null,
  date: null,
  time: null,
  divContainer: null,
  
}

let taskArray = JSON.parse(localStorage.getItem("tasksArray")) || [];
function init() {
  DOM.taskInput = document.querySelector("#assignmentInput");
  
  DOM.date = document.querySelector("#chooseADate");
  DOM.time = document.querySelector("#pickTime");
  DOM.divContainer = document.querySelector("#notes");
  
  const addNewTaskButton = document.querySelector("#send");
  addNewTaskButton.addEventListener("click", addNewTaskList);

  const clearNotesButton = document.querySelector("#clearme");
  clearNotesButton.addEventListener("click", clearnoteFn)

//clearing the array after every send button pressing
function clearnoteFn() {
 taskArray = [];
 DOM.divContainer.innerHTML = "";
  
}
 
  function addNewTaskList() {

  taskArray.push(new NoteTasks(DOM.taskInput.value, DOM.date.value, DOM.time.value));
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
  draw(taskArray);
  clearForm();

 }
}

//clear the form after every send button pressing
function clearForm() {
  DOM.taskInput.value = "";
  DOM.date.value = "";
  DOM.time.value = "";

}


let bigdiv= document.getElementById("notes");
function draw(notesArray){
  if(Array.isArray(notesArray) === false) return;

bigdiv.innerHTML=``;
     for (let i = 0; i < notesArray.length; i++) {
 
      bigdiv.innerHTML+=`
      <div class="divNote-style">
      <div class="divInsider-style"> 
      <div class= "vis">
        <button onclick=remove(${i}) class="dlt btn btn-danger"><i class="fa fa-trash-o" style="font-size:25px"></i></button>
        </div>  
        <div class="taskP">
        ${notesArray[i].tasks} 
        </div>
        <div><p>${notesArray[i].date}</p>
        <p>${notesArray[i].time}</p>
        </div>
      </div>
        </div>
      </div>`;  
  }
}

//built a function that removes the notes by pressing the X button 
function remove(x){
taskArray.splice(x, 1);
localStorage.setItem("taskArray", JSON.stringify(taskArray))
draw(taskArray);
}

init();