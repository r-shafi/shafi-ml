const firebaseConfig = {
  apiKey: 'AIzaSyB9YT2WCAioUInetCcxCbIOrmKJXMtHGlo',
  authDomain: 'post-f77d3.firebaseapp.com',
  databaseURL: 'https://post-f77d3.firebaseio.com',
  projectId: 'post-f77d3',
  storageBucket: 'post-f77d3.appspot.com',
  messagingSenderId: '895884752500',
  appId: '1:895884752500:web:b4e2994054b65751318321',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref('posts');

const recent = document.querySelector('.recent');

function retrive(data) {
  recent.innerHTML = '';

  const posts = data.val();

  for (const [i, post] of Object.keys(posts).reverse().entries()) {
    if (i === 3) {
      return;
    }
    recent.innerHTML += `
      <div class="card">
        <img src="${posts[post].link}" alt="${posts[post].title}">
        <h2>${posts[post].title}</h2>
        <p>${posts[post].description}</p>
      </div>
    `;
  }
}

database.on('value', retrive);
