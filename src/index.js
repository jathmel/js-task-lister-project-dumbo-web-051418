document.addEventListener('DOMContentLoaded', () => {
  const app = new TaskLister();
  const listInfo = document.querySelector('#app-content')
  const listForm = document.querySelector('#create-list-form')
  const listTitle = document.querySelector('#new-list-title')
  const newDiv = document.createElement('div')
  newDiv.id = 'lists'
  listInfo.appendChild(newDiv)


  // grab DOM elements
  // const listDiv = document.getElementById("app-content");
  // console.log(list.title)
  listForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let list = new List(listTitle.value)
    newDiv.append(list.el())
    app.render()
  })
  // deleteButton()


});
