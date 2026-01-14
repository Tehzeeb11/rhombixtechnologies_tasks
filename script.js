const inputBox = document.getElementById("input-box");
const listCaontainer = document.getElementById("list-container");

function Addtask(){
  if(inputBox.value === ''){
    alert("Enter a task");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCaontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listCaontainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listCaontainer.innerHTML);
}
function showTask(){
  listCaontainer.innerHTML = localStorage.getItem("data");
}
showTask();