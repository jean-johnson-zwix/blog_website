import React from 'react'
import './../assets/css/app.css'
import PostList from './PostList'
const App = () => {
    return (
        <div className='ui container segment landing-page'>
            <div className='ui center aligned icon header segment banner'>
                <i className='comments icon'></i>
                <h3>BLOG POSTS</h3>
            </div>
            <PostList />
        </div>
    )
}

export default App