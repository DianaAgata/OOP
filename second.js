class View {
  constructor() {
    this.model = new Model();
    this.id = this.getUrlParam('id');
  }

  getUrlParam(name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
      return null;
    } else {
      return results[1] || 0;
    }
  };

  showPostAndComments() {
    let post = this.model.getPostById(this.id);
    post.then(res => {
      let postHtml = this.buildHtmlForPost(res);
      let comments = this.model.getCommentsForPost(res.id);
      comments.then(result => {
        result.forEach(res => this.buildHtmlForComments(res));
      });
    });
  };

  buildHtmlForPost(res) {
    let postContent = document.getElementById('post');
    let title = document.createElement('h2');
    let content = document.createElement('p');

    title.innerHTML = res.title;
    content.innerHTML = res.body;
    postContent.appendChild(title);
    postContent.appendChild(content);

    return postContent;
  };

  buildHtmlForComments(res) {
    let commentList = document.getElementById('comments');
    let comment = document.createElement('li');
    let name = document.createElement('div');
    let email = document.createElement('div');
    let commentBody = document.createElement('div');

    name.innerHTML = 'Name :  ' + res.name;
    email.innerHTML = 'Email :  ' + res.email;
    commentBody.innerHTML = 'Comment :  ' + res.body;
    comment.appendChild(name);
    comment.appendChild(email);
    comment.appendChild(commentBody);
    commentList.appendChild(comment);

    return commentList;
  };
};

let list = new View();
list.showPostAndComments();