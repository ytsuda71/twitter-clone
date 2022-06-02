import React from 'react'
import Post from './Post'
import './Timeline.css'
import TweetBox from './TweetBox'

function Timeline() {
  return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline_header'>
            <h2>Home</h2>
        </div>
        {/* TweetBox */}
        <TweetBox/>
        {/* Post */}
        <Post 
          displayName="displayName" 
          username="userName" 
          verified={true} 
          tweet="First tweet"
          avatar="https://joeschmoe.io/api/v1/random"
          image="https://source.unsplash.com/random"
          />
    </div>
  )
}

export default Timeline