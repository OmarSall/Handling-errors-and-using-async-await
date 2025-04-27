/*
Write the getUserName function.
Create two versions::
one without async/await
and one with async/await
It should receive one argument, which is the user's ID.
It should fetch the data from https://jsonplaceholder.typicode.com/users/[id]
It needs to return a promise that resolves to the name of the user with a given ID.
If the user with a given ID does not exist, return a promise that resolves to null
*/

function getUserName(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        return null;
      }
      return response.json();
    })
    .then((user) => (user ? user.name : null))
    .catch(() => null);
}

getUserName(1).then((name) => console.log(name)); // Leanne Graham

///////////////////////////////////////////////////////////////////

async function getUserName(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            return null;
        }

        const user = await response.json();
        return user ? user.name : null;
    } catch (error) {
        return null;
    }
}


getUserName(1).then(name => console.log(name));