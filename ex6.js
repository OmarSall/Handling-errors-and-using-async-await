/*
Write the getAlbumsWithPhotos function.
Create two versions::
one without async/await
and one with async/await
The function needs to fetch the following data:
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/photos
The function needs to return a promise that resolves to the data in the following format:

[
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim",
    "photos": [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      // ...
    ]
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa",
    "photos": [
      {
        "albumId": 2,
        "id": 51,
        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
        "url": "https://via.placeholder.com/600/8e973b",
        "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
      },
      {
        "albumId": 2,
        "id": 52,
        "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
        "url": "https://via.placeholder.com/600/121fa4",
        "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
      },
      // ...
    ]
  }
*/

function getAlbumsWithPhotos() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => {
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((response) => response.json())
          .then((photos) => {
            const result = albums.map((album) => {
              const albumPhotos = photos.filter(
                (photo) => photo.albumId === album.id
              );
              return {
                ...album,
                photos: albumPhotos,
              };
            });
            resolve(result);
          })
          .catch((error) => {
            reject("Error fetching photos: " + error);
          });
      })
      .catch((error) => {
        reject("Error fetching albums: " + error);
      });
  });
}

getAlbumsWithPhotos()
  .then((result) => {
    console.log("Albums with photos (without async/await):", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

/////////////////////////////////////////////////

async function getAlbumsWithPhotos() {
  try {
    const albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await albumsResponse.json();

    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await photosResponse.json();

    const result = albums.map(album => {
        const albumPhotos = photos.filter(photo => photo.albumId === album.id);
        return {
            ...album,
            photos: albumPhotos
        };
  });
  
    return result;
  } catch (error) {
    throw new Error("Error fetching data: " + error.message);
  }
}

getAlbumsWithPhotos()
  .then((result) => {
    console.log("Albums with photos (with async/await):", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
