import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchPosts } from '../api/index'
import SinglePost from './SinglePost'
import CreatePost from './CreatePost'

const Posts = ({ token }) => {
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
      <CreatePost posts={posts} setPosts={setPosts} token={token} />
      {posts.map((post, i) => {
        return (
          <SinglePost
            key={i}
            post={post}
            token={token}
            posts={posts}
            setPosts={setPosts}
          />
        )
      })}
    </div>
  )
}

export default Posts
