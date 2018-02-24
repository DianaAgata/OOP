class Model {
    constructor() {
      this.baseUrl = 'https://jsonplaceholder.typicode.com'
    }
    
    getPosts() {
      return fetch(`${this.baseUrl}/posts`).then(response => response.json());
      
    }
    
    getPostById(id) {
      return fetch(`${this.baseUrl}/posts/${id}`).then(response => response.json());
    }
    
    getCommentsForPost(postId) {
      return fetch(`${this.baseUrl}/posts/${postId}/comments`).then(response => response.json());
    }
  }