import axios from 'axios';

// const fetchRepo = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => data.id)
//     .then((token) =>
//       fetch(`https://jsonplaceholder.typicode.com/todos/${token}`)
//     )
//     .then((response) => {
//       return response.json();
//     })
//     .then((userData) => userData)
//     .then((data) =>
//       fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}/repo`)
//     )
//     .then((response) => {
//       return response.json();
//     })
//     .then((repos) => console.log(repos));
// };

// fetchRepo();

const asyncAwaitGetRepos = async () => {
  try {
    const { data: token } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const { data: parsedUserId } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${token.id}`
    );
    const { data: reposData } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/`
    );
    return reposData;
    //     )
  } catch (error) {
    console.log(error);
  }
};

asyncAwaitGetRepos();
