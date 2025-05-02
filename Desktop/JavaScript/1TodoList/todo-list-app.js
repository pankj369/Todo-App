const mainContent = document.querySelector('.list-items');

let addInput = document.querySelector('.input1');

let addButton = document.querySelector('.btn1').addEventListener("click", (e) => {
  addTodoDynamicElement(addInput.value);
  addInput.value = '';
})

let addTodoDynamicElement = (curElem) => {
  let div = document.createElement('div');
  div.innerHTML = `<li>${curElem}</li> <button class='deleteBtn'>Delete</button>`;
  mainContent.append(div);

  let deleteBtn = document.querySelector('.deleteBtn')
  deleteBtn.addEventListener('click', (e) => {
    div.remove()
  })

  
}
