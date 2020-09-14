import React from 'react'
import Post from './Post'
import Edit from './Edit'

//TODO Display post or edit, build out methods

class PostContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
    }
  }

  toggleEdit = () => {
    //something goes here
  }

  render() {
    return <></>
  }
}

export default PostContainer
