export class FlickrService {
  constructor() {
    this.defaultParams = new URLSearchParams();
    this.defaultParams.set("api_key", API_KEY);
    this.defaultParams.set("format", "json");
    this.defaultParams.set("nojsoncallback", 1);
    this.defaultParams.set("safe_search", 1);
  }

  searchImages(query, page, resultsPerPage) {
    const searchParams = new URLSearchParams();
    searchParams.set("method", "flickr.photos.search");
    searchParams.set("text", query);
    searchParams.set("page", page);
    searchParams.set("per_page", resultsPerPage);

    const params = `${this.defaultParams.toString()}&${searchParams.toString()}`;

    return fetch(`${API_URL}?${params}`, { mode: "cors" }).then(r => r.json());
  }
}

export default new FlickrService();
