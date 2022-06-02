import { Search } from '@mui/icons-material'
import React from 'react'

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
        </div>
    </div>
  )
}

export default Widgets