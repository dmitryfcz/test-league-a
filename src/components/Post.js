import React from 'react'
import styled from 'styled-components'

const StyledPost = styled.div`
    background: #ffffff;
    border-radius: 8px;
    padding: 31px 25px 15px;
    width: 100%;
    max-width: 640px;
    margin: 0 auto 20px;
    box-sizing: border-box;
`
const Name = styled.span`
    font-weight: bold;
    padding-right: 5px;
`
const UserName = styled.span`
    color: #5b7083;
`
const PostTitle = styled.h1`
    font-size: 22px;
    &&::first-letter {
        text-transform: uppercase;
    }
`
const PostContent = styled.p`
    line-height: 1.5em;
    &&::first-letter {
        text-transform: uppercase;
    }
`

const Post = ({title, body, name, username}) => {
    return <StyledPost>
        <Name>{name}</Name>
        <UserName>@{username}</UserName>
        <PostTitle>{title}</PostTitle>
        <PostContent>{body}</PostContent>
    </StyledPost>
}

export default Post