 const all_todos = document.querySelector("#all-todos");
  const todos = document.querySelector('#todos');

   all_todos.addEventListener("click", (event) => {
   todos.classList.toggle("hidden");
   });
