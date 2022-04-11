import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

import styles from "./App.scss";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título#01",
      subtitle: "Subtítulo#01",
      likes: 20,
      read: true,
    },
    {
      id: Math.random(),
      title: "Título#02",
      subtitle: "Subtítulo#02",
      likes: 10,
      read: false,
    },
    {
      id: Math.random(),
      title: "Título#03",
      subtitle: "Subtítulo#03",
      likes: 50,
      read: true,
    },
  ]);

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
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
        <h2 className={styles.title}>
          Posts da semana - Children
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
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
