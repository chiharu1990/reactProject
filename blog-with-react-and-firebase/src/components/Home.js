import React from "react";
import "./Home.css";

const Home = () => {
  return <div>Home</div>;
  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  削除
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
};

export default Home;
