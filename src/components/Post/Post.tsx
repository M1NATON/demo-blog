import React, {useEffect} from 'react';
import {useTypeSelector} from "../../hooks/UseTypeSelector";
import {useAction} from "../../hooks/useAction";
import NoPost from "./NoPost";
import Loading from "../Loading";
import PostItem from "./PostItem";




const Post = () => {

    const {postList} = useAction()
    useEffect(() => {
        postList()
    }, [])

    const {error, post, loading} = useTypeSelector(state => state.post)




    if (loading) return <Loading/>
    if (error) return <NoPost/>
    if (!post.length) return <NoPost/>

    return (
        <>
            {post.map(post => <PostItem key={post.id} post={post}/>)}
        </>
    );
};

export default Post;
