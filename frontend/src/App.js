import React from 'react';
import {PostProvider} from './context/Post';
import {VoteProvider} from './context/Vote';
import {ModalProvider} from './context/Modal';
import {CategoryProvider} from './context/Category';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import Modal from './components/Modal';
import styles from'./App.module.scss';
import { CommentsProvider } from './context/Comments';

function App() {
  return (
    <div className={styles.wrapper}>
      <ModalProvider>
        <CategoryProvider>
          <PostProvider>
          <CommentsProvider>
            <VoteProvider>
                <Router>
                  <Header/>
                  <Body/>
                </Router>
                <Modal/>
            </VoteProvider>
            </CommentsProvider>
          </PostProvider>
        </CategoryProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
