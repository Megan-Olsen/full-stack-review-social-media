const getAllPosts = async (db) => {
  const posts = await db.get_posts()
  return posts
}

module.exports = {
  getPosts: async (req, res) => {
    //TODO Get all posts

    const db = req.app.get('db')
    const posts = await getAllPosts(db)
    res.status(200).send(posts)
    
  },
  addPost: async (req, res) => {
    //TODO Create new post
    const db = req.app.get('db')
    const {id} = req.session.user
    const {content} = req.body

    await db.add_post([id, content])

    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  
  },
  editPost: async (req, res) => {
    //TODO Edit existing post
    const db = req.app.get('db')

    const {content} = req.body
    const {post_id} = req.params

    await db.edit_post([content, post_id])

    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  deletePost: async (req, res) => {
    //TODO Delete existing post
    const db = req.app.get('db')

    const {post_id} = req.params

    await db.delete_post([post_id])

    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  }
};

