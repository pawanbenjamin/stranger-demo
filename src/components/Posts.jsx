import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchPosts } from '../api/index'
const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts()
      const newPosts = result.data.posts
      setPosts(newPosts)
    }
    getPosts()
  }, [])

  return (
    <div>
      {posts.map((post, i) => {
        return <h1 key={i}>{post.title}</h1>
      })}
    </div>
  )
}

export default Posts
