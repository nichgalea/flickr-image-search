export class FlickrService {
  constructor() {
    this.defaultParams = new URLSearchParams();
    this.defaultParams.set("api_key", API_KEY);
    this.defaultParams.set("format", "json");
    this.defaultParams.set("nojsoncallback", 1);
  }

  searchImages(query, page, resultsPerPage) {
    const searchParams = new URLSearchParams();
    searchParams.set("method", "flickr.photos.search");
    searchParams.set("text", query);

    // searchParams.set() results per page
    // searchParams.set() current page number

    const params = `${this.defaultParams.toString()}&${searchParams.toString()}`;

    return fetch(`${API_URL}?${params}`).then(r => r.json());
  }
}

export default new FlickrService();

// Image Model {
//   "id": "40873151913",
//   "owner": "163394515@N05",
//   "secret": "57a00a23d8",
//   "server": "65535",
//   "farm": 66,
//   "title": "WhatsApp Image 2019-05-13 at 09.10.3760",
//   "ispublic": 1,
//   "isfriend": 0,
//   "isfamily": 0
// }
