import React from 'react'
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
    </div>
  )
}

export default Timeline