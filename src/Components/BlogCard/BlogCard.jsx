import React from 'react'
import styles from './BlogCard.module.css';

const BlogCard = ({data}) => {
    return (
        <div>
            <div className={styles.card}>
                <img src={data.image} alt={data.title} className={styles.image} />
                <div className={styles.content}>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                </div>
                <div>
                    <h4>{data.author}</h4>
                    <h4>{data.date}</h4>
                </div>
            </div>
        </div>
    )
}

export default BlogCard