import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { postsApi, usersApi } from '../api/api'
import Loader from './Loader'
import Post from './Post'
import SearchBar from './SearchBar'

const PostWrapper = styled.div`
    padding: 0 15px;
`

const Posts = () => {
    const [posts, setPosts] = useState(null)
    const [users, setUsers] = useState(null)
    const [filter, setFilter] = useState('')
    
    useEffect(() => {
        postsApi.getPosts()
        .then(response => setPosts(response))
    }, [])
    
    useEffect(() => {
        usersApi.getUsers()
        .then(response => setUsers(response))
    }, [])
        
    const visiblePosts = posts && posts.filter(post => {
        if (post.title.toLowerCase().includes(filter.toLowerCase()) || post.body.toLowerCase().includes(filter.toLowerCase())) {
            return true
        } else {
            return false
        }
    })
    
    const isInitialized = posts && users

    if(isInitialized) {
        return (
            <>
                <SearchBar filter={filter} setFilter={setFilter} />
                <PostWrapper>
  
                        {visiblePosts.map(post => <Post
                                            key={post.id} 
                                            title={post.title}
                                            body={post.body}
                                            name={users.find(user => user.id === post.userId).name}
                                            username={users.find(user => user.id === post.userId).username}
                        />)}
                </PostWrapper>
            </>
        )
    } else {
        return <Loader />
    }
}

export default Posts