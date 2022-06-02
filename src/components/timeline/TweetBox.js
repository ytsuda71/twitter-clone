import { Avatar, Button } from '@mui/material'
import React from 'react'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <Avatar />
            <input placeholder="What's happening?" type='text'></input>
            <input className='tweetBox--imageInput' placeholder='Optional: Enter image URL' type='text'></input>
            <Button className='tweetBox--tweetButton' type='submit'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox