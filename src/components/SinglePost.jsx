import React, { useState } from 'react'
import { deletePost, updatePost } from '../api'

const SinglePost = ({ token, post, posts, setPosts, userObj }) => {
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

  const handleDelete = async (token, postId) => {
    const data = await deletePost(token, postId)
    const filteredPosts = posts.filter((post) => {
      return post._id !== postId
    })
    setPosts(filteredPosts)
  }

  console.log('User Obj in Single Post', userObj)
  console.log('Post', post)

  const editInfo = (
    <>
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
      <button onClick={() => handleDelete(token, post._id)}>Delete Post</button>
    </>
  )

  return (
    <div>
      <h2>{post.title}</h2>
      {post.author.username === userObj.username ? editInfo : null}
    </div>
  )
}

export default SinglePost
