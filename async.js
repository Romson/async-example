const posts = [
    {title: 'The new world 1', body: 'This is post 1'},
    {title: 'The new world 2', body: 'This is post 2'}
];

function getPosts() {
    setTimeout( () => {
        let output = '';
        posts.forEach((item, index) => {
            output += `<li>${item.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000);
}

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// createPost() output will not appear in DOM when getPosts() is active. Fix this with async js by adding a callback in createPost arguments and have it called right after the posts are pushed. 
// getPosts();

createPost({title: 'The new world 3', body: 'This is post 3'}, getPosts);