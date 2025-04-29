/*
Write the getAllPostsFromUser function.
Create two versions::
one without async/await
and one with async/await
It should receive one argument, which is the ID of a user.
It should fetch the data from https://jsonplaceholder.typicode.com/posts
It needs to return a promise that resolves to all posts of a user with a given ID.
If a given user does not have any posts, return a promise that rejects with an error message.
*/

function getAllPostsFromUser(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                if (posts.length === 0) {
                    reject("User has no posts.");
                } else {
                    resolve(posts);
                }
            })
            .catch(error => {
                reject("An error occured: " + error);
            });
    });
}


//////////////////////////////////////

async function getAllPostsFromUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        if (posts.length === 0) {
            throw new Error("User has no posts");
        }

        return posts;
    } catch (error) {
        throw new Error("An error occured: " + error.message);
    }
}

getAllPostsFromUser(1)
    .then(posts => {
        console.log("Posts fetched: ", posts);
    })
    .catch(error => {
        console.log("Error: ", error)
    });