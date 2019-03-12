class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
  }

  createElement(title){
    let newNote = document.createElement('div');
    newNote.classList.add("card");
    newNote.innerHTML = `<p>${this.title}</p><a href="#" class="card-remove">Remove</a>`;
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);

  }

  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }

  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
     this.btnAdd = document.querySelector("#btnAddNote");
     this.btnAdd.addEventListener("click", this.createNote.bind(this));
     console.log("test");
    // this.loadNotesFromStorage();
    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }

  createNote(e){
    // this function should create a new note by using the Note() class
    let text = document.getElementById('txtAddNote').value;
    let note = new Note(text);
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
    note.add();
    note.saveToStorage();
    this.reset();
  }

  reset(){
    // this function should reset the form
  }

}

let app = new App();
