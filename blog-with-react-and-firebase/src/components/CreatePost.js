import React from "react";
import "./createPost.css";

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを入力" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea placeholder="投稿内容を入力" onChange={(e) => setPostText(e.target.value)} />
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
