let inp = document.getElementById("i");
let dat = document.getElementById("main");

function addtask() {
  if (inp.value === '') {
    alert("add something, you bloody!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    dat.appendChild(li);
    inp.value = ''; // Clear the input field after adding the task
  }
}
