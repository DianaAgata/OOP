class View {
  constructor() {
    let postContainer = document.getElementById('container');
    postContainer.addEventListener('click', this.handleClick.bind(this));

    this.model = new Model();
  }

  showPostList() {
    let posts = this.model.getPosts();
    posts.then(result => {
      result.forEach(res => this.buildHtmlForPosts(res));
    });
  };

  buildHtmlForPosts(res) {
    let container = document.getElementById('container');
    let title = document.createElement('h2');
    let content = document.createElement('p');
    let postItem = document.createElement('li');

    title.innerHTML = res.title;
    content.innerHTML = res.body;

    postItem.appendChild(title);
    postItem.appendChild(content);
    postItem.setAttribute('data-id', res.id);
    content.setAttribute('class', 'text');
    container.appendChild(postItem);
    return container;
  };

  handleClick(e) {
    window.location = 'detail.html?id=' + e.target.getAttribute('data-id');
  };
};
let list = new View();
list.showPostList();