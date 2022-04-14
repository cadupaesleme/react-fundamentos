import React, { useState } from "react";
import Post from "../Post/Post";
import Header from "../Header/Header";
import { ThemeProvider } from "../../context/ThemeContext";

import { Title } from "./styles";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título#01",
      subtitle: "Subtítulo#01",
      likes: 20,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Título#02",
      subtitle: "Subtítulo#02",
      likes: 10,
      read: false,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Título#03",
      subtitle: "Subtítulo#03",
      likes: 50,
      read: true,
      removed: false,
    },
  ]);

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  function handleRefresh() {
    //setter function
    // setPosts([
    //   //spread and add nem item
    //   ...posts,
    //   {
    //     id: Math.random(),
    //     title: `Título#0${posts.length + 1}`,
    //     subtitle: `Subtítulo#0${posts.length + 1}`,
    //     likes: 50,
    //   },
    // ]);

    //this is function is async so if you click twice you'll get the same array for both updates, but the next item depends of previous item, to resolve this use prevState
    setPosts((prevState) => [
      //spread and add nem item
      ...prevState,
      {
        id: Math.random(),
        title: `Título#0${prevState.length + 1}`,
        subtitle: `Subtítulo#0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  return (
    //Fragment
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          //required for react has to be unique
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
