const API_URL = 'https://jsonplaceholder.typicode.com/posts';

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const posts = JSON.stringify(data);
    localStorage.setItem('posts', posts);
    getPosts();
  });

  