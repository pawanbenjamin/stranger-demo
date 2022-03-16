export const registerUser = async (username, password) => {
  const response = await fetch(
    'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )

  const data = await response.json()

  return data
}

export const fetchPosts = async () => {
  const response = await fetch(
    'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts'
  )
  const data = response.json()
  return data
}

export const createPost = async (postDetails, token) => {
  const response = await fetch(
    'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        post: {
          title: postDetails.title,
          description: postDetails.description,
          location: postDetails.location,
          price: postDetails.price,
          willDeliver: postDetails.willDeliver,
        },
      }),
    }
  )
  const data = await response.json()
  return data
}

export const updatePost = async (updateObj, token, postId) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updateObj,
      }),
    }
  )
  const data = await response.json()
  return data
}

export const deletePost = async (token, postId) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/${postId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const data = await response.json()
  return data
}

export const fetchMe = async (token) => {
  const response = await fetch(
    'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/me',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const data = await response.json()
  return data
}
