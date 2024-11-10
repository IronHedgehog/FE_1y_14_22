// GET

// fetch("http://localhost:3000/students")
//   .then((response) => response.json())
//   .then((students) => console.log(students));

// POST

const students = {
  name: "Petro",
  age: 20,
  email: "john.doe@example.com",
  phone: "555-1234",
};

const button = document.getElementById("button");

button.addEventListener("click", onClick);
const update = {
  name: "Anton",
  age: 52,
  email: "john.doe@example.com",
  phone: "555-1234",
};
function onClick(e) {
  // fetch("http://localhost:3000/students", {
  //   method: "POST",
  //   body: JSON.stringify(students),
  // });
  // fetch("http://localhost:3000/students/ca3e", {
  //   method: "PATCH",
  //   body: JSON.stringify(update),
  // });
  fetch("http://localhost:3000/students/ca3e", {
    method: "DELETE",
  });
}
