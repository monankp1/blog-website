import React, { useEffect, useState } from 'react';
import { BACKEND_ENDPOINT } from '../../api';
import axios from 'axios';
import styles from './Blogs.module.css';




const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])
  console.log(blogs)


  return (
    <div className={styles.blog}>
      {Array.isArray(blogs) && blogs.map((blog) => (

        <div className={styles.card}>
          <img src={blog.image} alt={blog.title} />
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>

      ))}

    </div>
  )
}

export default Blogs