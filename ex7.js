/*
Write the getUsersWithPostsAndComments function.
Write two versions of this function:
one without async/await
and one with async/await
It should fetch the following data:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/comments
https://jsonplaceholder.typicode.com/posts
It needs to return a promise that resolves to the data in the following format:

[
  {
    "id": 1,
    "name": "Leanne Graham",
    // ...
    "posts": [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat...",
        "body": "quia et suscipit...",
        "comments": [
          {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est..."
          },
          // ...
        ]
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae..."
        "comments": [
          // ...  
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "posts": [
      // ...
    ]
  }
]
*/

function getUsersWithPostsAndComments() {
  return new Promise((resolve, reject) => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(
        (responseUsers) => responseUsers.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then(
        (responsePosts) => responsePosts.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments").then(
        (responseComments) => responseComments.json()
      ),
    ])
      .then(([users, posts, comments]) => {
        const result = users.map((user) => {
          const userPosts = posts
            .filter((post) => post.userId === user.id)
            .map((post) => {
              const postComments = comments.filter(
                (comment) => comment.postId === post.id
              );
              return { ...post, comments: postComments };
            });
          return { ...user, posts: userPosts };
        });

        resolve(result);
      })
      .catch((error) => {
        reject("Error fetching data: " + error);
      });
  });
}

getUsersWithPostsAndComments()
  .then((data) => {
    console.log("Promise version result:", data);
  })
  .catch((error) => {
    console.error("Promise version error:", error);
  });

/////////////////////////////////////////////////////

async function getUsersWithPostsAndComments() {
  try {
    const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();

    const result = users.map((user) => {
      const userPosts = posts
        .filter((post) => post.userId === user.id)
        .map((post) => {
          const postComments = comments.filter(
            (comment) => comment.postId === post.id
          );
          return { ...post, comments: postComments };
        });

      return { ...user, posts: userPosts };
    });

    return result;
  } catch (error) {
    throw new Error("Error fetching data: " + error);
  }
}

async function testAsyncVersion() {
  try {
    const data = await getUsersWithPostsAndComments();
    console.log("Async/Await version result:", data);
  } catch (error) {
    console.error("Async/Await version error:", error);
  }
}

testAsyncVersion();
