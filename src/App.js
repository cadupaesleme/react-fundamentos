import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
  {
    title: "Título da notícia 01",
    subtitle: "Subtítulo da notícia 01",
    likes: 20,
  },
  {
    title: "Título da notícia 02",
    subtitle: "Subtítulo da notícia 02",
    likes: 10,
  },
  {
    title: "Título da notícia 03",
    subtitle: "Subtítulo da notícia 03",
    likes: 50,
  },
];

function App() {
  return (
    //Fragment
    <>
      <Header>
        <h2>Posts da semana - Children</h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          //required for react has to be unique
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
