const postsPerPage = 5;
const blogPosts = document.querySelectorAll('.blog-post');
const paginationContainer = document.getElementById('pagination-controls');

let currentPage = 1;
const totalPages = Math.ceil(blogPosts.length / postsPerPage);

function showPage(page) {
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  blogPosts.forEach((post, index) => {
    post.style.display = (index >= start && index < end) ? 'flex' : 'none';
  });

  if (totalPages > 1) {
    updatePaginationButtons(page);
  } else {
    paginationContainer.innerHTML = ''; // hide pagination if not needed
  }
}

function updatePaginationButtons(activePage) {
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('pagination-btn');
    if (i === activePage) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });
    paginationContainer.appendChild(btn);
  }
}

// Initial load
showPage(currentPage);