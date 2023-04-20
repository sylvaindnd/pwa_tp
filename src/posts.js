getPosts();

function getPosts(){
    const POSTS = JSON.parse(localStorage.getItem('posts'));

    document.getElementById('posts').innerHTML = '';

    POSTS.forEach(post => {
        const html = 
        `<article style="background-color: lightgray; padding: 8px; margin: 8px 0;">
            <h2>${post.title}</h2>
            <p>${post.body.replace(/[\r\n]+/g, '<br>')}</p>
            <a href="#${post.id}"><button>Voir l'article</button></a>  
        </article>`;
        document.getElementById('posts').innerHTML += html;
    });

}