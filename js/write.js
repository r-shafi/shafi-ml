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

const status = firebase.database().ref('posts');

function savePost(title, link, tags, description) {
  const newStatus = status.push();

  const now = new Date();

  newStatus.set({
    title,
    link,
    tags,
    description,
    time: Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(now),
  });
}

function submitPost(e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const link = document.querySelector('#url').value;
  const tags = document.querySelector('#tags').value;
  const description = document.querySelector('#post').value;

  savePost(title, link, tags, description);
  document.querySelector('form').reset();
}

const btn = document.querySelector('.submit');
btn.addEventListener('click', submitPost);
