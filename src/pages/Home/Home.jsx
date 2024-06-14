import React from 'react';
import styles from './Home.module.css';
import Header from '../../Components/Header/Header';
import Blogs from '../../Components/Blogs/Blogs';

const Home = () => {
  return (
    <div>
      <Header />
      <Blogs />
    </div>
  )
}

export default Home