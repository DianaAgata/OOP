class View {
  constructor() {
    var postContainer = document.getElementById('container');
    postContainer.addEventListener('click', this.handleClick.bind(this));

    this.model = new Model();
  }

  showPostList() {
    var posts = this.model.getPosts();
    posts.then(result => {
      var container = document.getElementById('container');
      result.forEach(res => {
        var title = document.createElement('h2');
        var content = document.createElement('p');
        var postItem = document.createElement('li');

        title.innerHTML = res.title;
        content.innerHTML = res.body;

        postItem.appendChild(title);
        postItem.appendChild(content);
        postItem.setAttribute('data-id', res.id);
        content.setAttribute('class', 'text');
        container.appendChild(postItem);
      });
    });
  }

  handleClick(e) {
    window.location = 'detail.html?id=' + e.target.getAttribute('data-id');
  };
};
let list = new View();
list.showPostList();