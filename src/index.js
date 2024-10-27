import { newsApi } from './js/http';

const newsApiService = new newsApi();

const searchForm = document.getElementById('search-form');
const articleList = document.getElementById('articles-container');
const loadMoreBtn = document.getElementById('load-more');
const endCollectionText = document.getElementById('end-collection-text');

function createArticleMarkup(article) {
  const {
    url = '',
    urlToImage = 'https://via.placeholder.com/480x320',
    title = '',
    author = 'Unknown',
    description = 'No description available',
  } = article;

  return `
        <li>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <article>
                    <img src="${urlToImage}" alt="${title}" width="480">
                    <h2>${title}</h2>
                    <p>Posted by: ${author}</p>
                    <p>${description}</p>
                </article>
            </a>
        </li>
    `;
}

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.searchQuery.value.trim();
  // console.log(e.currentTarget); - e.currentTarget - елемент на якому висить addEventListener

  if (searchQuery === '') {
    // Pnotify or Tostifyjs
    console.log('Будь ласка, введи значення у поле');
    return;
  }

  newsApiService.query = searchQuery;
  newsApiService.resetPage();
  clearArticleList();

  try {
    const articles = await newsApiService.fetchNews();
    if (articles.length === 0) {
      console.log('Немає новин на цю тему');
      return;
    }
    visionLoadMoreButton();
    appendMarkup(articles);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function onLoadMore() {
  newsApiService.incrementPage();

  try {
    const articles = await newsApiService.fetchNews();
    visionLoadMoreButton();
    appendMarkup(articles);

    const height = 370 * 2;
    window.scrollBy({
      top: height,
      behavior: 'smooth',
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

function appendMarkup(articles) {
  const markup = articles.map(createArticleMarkup).join('');
  articleList.insertAdjacentHTML('beforeend', markup);
}

function visionLoadMoreButton() {
  if (newsApiService.hasMoreArticles()) {
    loadMoreBtn.classList.remove('is-hidden');
    // endCollectionText.classList.remove('is-hidden');
    // console.log(endCollectionText);
  } else {
    loadMoreBtn.classList.add('is-hidden');
    endCollectionText.classList.add('is-hidden');
  }
}

function clearArticleList() {
  articleList.innerHTML = '';
  // loadMoreBtn.classList.add('is-hidden');
}
