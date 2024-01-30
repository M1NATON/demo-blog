import React, {useEffect} from 'react';
import {useAction} from "../../hooks/useAction";
import {useNavigate, useParams} from "react-router-dom";
import {useTypeSelector} from "../../hooks/UseTypeSelector";
import Loading from "../Loading";
import {IPost} from "../../type/post";
import PostItem from "./PostItem";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const PostItemPages = () => {

    const {postDetails} = useAction()
    const {loading, post} = useTypeSelector(state => state.post)
    const {postId} = useParams<{ postId: string }>();
    useEffect(() => {
        postDetails(Number(postId));
    }, []);







    const navigate = useNavigate()
    if (loading) return <Loading/>
    const postI: IPost = post[0]
    return (
        <div className='container mx-auto'>
            <div className="w-[600px] mx-auto mt-[25%]">
                <PostItem post={postI}/>
                <div className="flex justify-between">
                    <button onClick={() => navigate('/home')} className='animate-pulse'><ArrowBackIcon
                        sx={{fontSize: 40}}/></button>

                </div>

            </div>
        </div>
    );
};

export default PostItemPages;