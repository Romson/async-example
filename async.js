const posts = [
    {title: 'The new world 1', body: 'This is post 1'},
    {title: 'The new world 2', body: 'This is post 2'}
];

// setTimeout interval of 1000ms before output is painted on the DOM.
const getPosts = () => {
    setTimeout( () => {
        let output = '';
        posts.forEach((item, index) => {
            output += `<li>${item.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000);
}

// Add new post to the DOM. This will not work however because the above elements are painted to the DOM before createPost() gets called.
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// createPost() output will not appear in DOM when getPosts() is active. Fix this with async js by adding a callback in createPost arguments and have it called right after the posts are pushed when createPost() is called. 
// getPosts();

createPost({title: 'The new world 3', body: 'This is post 3'}, getPosts);