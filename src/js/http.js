import axios from 'axios';
// 2667a6ad789c4db2a2e882b6e2781cbb

// наслідування -
// Поліморфізм
// абстракція
// инкапсуляция -

// клас- завод з виробництва обʼєктів
export class newsApi {
  constructor() {
    this.searchQuery = 'car';
    this.API_KEY = '2667a6ad789c4db2a2e882b6e2781cbb';
    this.page = 1;
    this.perPage = 9;
    this.BASE_URL = 'https://newsapi.org/v2/';
    this.totalHits = 0;
  }

  async fetchNews() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      pageSize: this.perPage,
      page: this.page,
      apiKey: this.API_KEY,
      language: 'en',
      sortBy: 'popularity',
    });

    const url = `${this.BASE_URL}/everything?${searchParams}`;

    try {
      const { data } = await axios.get(url);
      this.totalHits = data.totalResults;
      return data.articles;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  hasMoreArticles() {
    return this.perPage * this.page < this.totalHits;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
