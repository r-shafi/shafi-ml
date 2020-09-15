const firebaseConfig = {
  apiKey: 'AIzaSyB9YT2WCAioUInetCcxCbIOrmKJXMtHGlo',
  authDomain: 'post-f77d3.firebaseapp.com',
  databaseURL: 'https://post-f77d3.firebaseio.com',
  projectId: 'post-f77d3',
  storageBucket: 'post-f77d3.appspot.com',
  messagingSenderId: '895884752500',
  appId: '1:895884752500:web:b4e2994054b65751318321',
  measurementId: 'G-GKV8F7VQ4W',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database().ref('posts');

const content = document.querySelector('.content');

function retrive(data) {
  content.innerHTML = '';

  const posts = data.val();

  // eslint-disable-next-line no-restricted-syntax
  for (const post of Object.keys(posts).reverse()) {
    content.innerHTML += `
      <div class="post" id="${post}">
        <img src="${posts[post].link}" alt="${posts[post].title}">
        ${
          posts[post].hasOwnProperty('tags')
            ? `<span class="${posts[post].tags}">${posts[post].tags}</span>`
            : null
        }
        <h2>${posts[post].title}</h2>
        <p>${posts[post].description}</p>
      </div>
    `;
  }
}

database.on('value', retrive);
