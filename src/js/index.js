'use strict';

document.getElementById('fetchPost').addEventListener('click', async () => {
  const postId = document.getElementById('postId').value;
  if (postId < 1 || postId > 100) {
    alert('ID має бути від 1 до 100');
    return;
  }
  try {
    const post = await fetchPost(postId);
    displayPost(post);
    createCommentButton(postId);
  } catch (error) {
    alert(error.message);
  }
});

const fetchPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Пост не знайдений');
  }
  return response.json();
};

const displayPost = (post) => {
  const postContainer = document.getElementById('postContainer');
  postContainer.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
    `;
};

const createCommentButton = (postId) => {
  const postContainer = document.getElementById('postContainer');
  const commentButton = document.createElement('button');
  commentButton.innerText = 'Показати коментарі';
  commentButton.classList.add('btn', 'btn-secondary', 'mt-3');
  commentButton.addEventListener('click', async () => {
    try {
      const comments = await fetchComments(postId);
      displayComments(comments);
    } catch (error) {
      alert(error.message);
    }
  });
  postContainer.appendChild(commentButton);
};

const fetchComments = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error('Коментарі не знайдені');
  }
  return response.json();
};

const displayComments = (comments) => {
  const postContainer = document.getElementById('postContainer');
  const commentsSection = document.createElement('div');
  commentsSection.innerHTML = '<h3>Коментарі</h3>';
  comments.forEach((comment) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('card', 'mt-2');
    commentDiv.innerHTML = `
            <div class="card-body">
                <h4 class="card-title">${comment.name}</h4>
                <p class="card-text">${comment.body}</p>
                <p class="card-text"><strong>Email:</strong> ${comment.email}</p>
            </div>
        `;
    commentsSection.appendChild(commentDiv);
  });
  postContainer.appendChild(commentsSection);
};
