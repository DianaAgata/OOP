class View {
  constructor() {
    this.model = new Model();
    this.id = this.getUrlParam('id');
  }

  getUrlParam(name) {

    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
      return null;
    } else {
      return results[1] || 0;
    }
  };

  showPostAndComments() {
    var post = this.model.getPostById(this.id);
    // console.log(post);

    post.then(res => {
      var postContent = document.getElementById('post');
      var title = document.createElement('h2');
      var content = document.createElement('p');
      title.innerHTML = res.title;
      content.innerHTML = res.body;
      postContent.appendChild(title);
      postContent.appendChild(content);
      var comments = this.model.getCommentsForPost(res.id);
      comments.then(result => {
        console.log(result);
        var commentList = document.getElementById('comments');
        result.forEach(res => {
          var comment = document.createElement('li');
          var name = document.createElement('div');
          var email = document.createElement('div');
          var commentBody = document.createElement('div');

          name.innerHTML = 'Name :  ' + res.name;
          email.innerHTML = 'Email :  ' + res.email;
          commentBody.innerHTML = 'Comment :  ' + res.body;
          comment.appendChild(name);
          comment.appendChild(email);
          comment.appendChild(commentBody);
          commentList.appendChild(comment);
        });
      });
    });
  };
};

let list = new View();
list.showPostAndComments();