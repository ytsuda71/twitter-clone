import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets--input'>
            <Search className='widgets--searchIcon'></Search>
            <input placeholder='Search Twitter' type='text'></input>
        </div>
        <div className='widgets-widgetContainer'>
            <h2>What's happening</h2>
            {/* ライブラリを追加　*/}
            <TwitterTweetEmbed tweetId={"1532270632008024064"} />
            <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='sarusiya1'
                options={{height: 400}}
            />
            <TwitterShareButton 
                url={'https://twitter.com/sarusiya1'}
                options={{text: '#TwitterClone', via: 'sarusiya1'}}
            />
        </div>
    </div>
  )
}

export default Widgets