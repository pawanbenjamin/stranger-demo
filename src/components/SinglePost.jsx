import React, { useState } from 'react'
import { updatePost } from '../api'

const SinglePost = ({ token, post, posts, setPosts }) => {
  const [postTitle, setPostTitle] = useState('')

  const handleSubmit = async (e, postId) => {
    e.preventDefault()
    const { data } = await updatePost({ title: postTitle }, token, postId)
    console.log(data.post)
    const filteredPosts = posts.filter((post) => {
      return post._id !== data.post._id
    })
    const newArray = [...filteredPosts, data.post]
    setPosts(newArray)
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e, post._id)
        }}
      >
        <h3>Update Post Form:</h3>
        <input
          placeholder="title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button type="submit">Update Title!</button>
      </form>
    </div>
  )
}

export default SinglePost
