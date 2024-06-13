import MainHeader from "./components/MainHeader";
import "./index.css";
import PostList from "./components/PostList";
import { useState } from "react";
export default function App() {
  const [modalIsVisable, setModalState] = useState(false);
  function modalInvisibility() {
    setModalState(false)
  }
  function showModal() {
    setModalState(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <PostList isPosting={modalIsVisable} onStopPost={modalInvisibility}/>
      </main >
    </>
  );
}