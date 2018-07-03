class List {
  constructor(title){
    this.title = title;
  }

  el(){
    // make an html element
      // create and append each child
      // add event listener to button child
      const listDiv = document.createElement("div")

      const title = document.createElement("h2")
      title.innerText = this.title

      const button = document.createElement("button")
      button.className = "delete-list"
      button.innerText = "x"
      button.id = this.title
      button.addEventListener("click", ()=>{
        listDiv.remove(title)
      });

      title.append(button)
      listDiv.append(title)
    return listDiv
  }

  renderForm() {
    if (this.lists.length) {
      return (`
        <form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list">
            ${this.renderOptions()}
          </select>
          <label for="new-task-description">Task description:</label>
          <input required type="text" id="new-task-description" placeholder="description">
          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task"></input>
        </form>
      `);
    } else {
      return "";
    }
  }


}
