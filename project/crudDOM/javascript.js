const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  const row = document.createElement('section');

  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const yearDiv = document.createElement('div');

  titleDiv.textContent = title.value;
  authorDiv.textContent = author.value;
  yearDiv.textContent = year.value;

  row.appendChild(titleDiv);
  row.appendChild(authorDiv);
  row.appendChild(yearDiv);

  bookList.appendChild(row);

  title.value= '';
  author.value= '';
  year.value= '';
});
