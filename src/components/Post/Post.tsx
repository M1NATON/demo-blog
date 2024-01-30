import React, {useEffect, useState} from 'react';
import {useTypeSelector} from "../../hooks/UseTypeSelector";
import {useAction} from "../../hooks/useAction";
import NoPost from "./NoPost";
import Loading from "../Loading";
import PostItem from "./PostItem";
import SearchIcon from '@mui/icons-material/Search';
import {IPost} from "../../type/post";



const Post = () => {

    const {postList} = useAction()


    const {error, post, loading} = useTypeSelector(state => state.post)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState<IPost[]>([])

    useEffect(() => {
        postList()
    }, [])


    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        const searchText = e.target.value
        setSearch(searchText);

        if (!searchText) {
            // Если строка поиска пуста, используйте полный список постов
            setSearchResult([]);
        }
    }

    const btnSearch = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const results = post.filter(post =>  post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase()) ||
            post.author.toLowerCase().includes(search.toLowerCase()))
        setSearchResult(results)
    }
    if (loading) return <Loading/>
    if (error) return <NoPost/>
    if (!post.length) return <NoPost/>

    return (
        <>
            <div className='text-end items-center flex justify-end border-2 w-[230px] mx-auto mb-10'>
                <input type='text' className='py-1 px-2 outline-0' placeholder='Поиск' value={search} onChange={searchChange}/>
                <button onClick={btnSearch}><SearchIcon/></button>
            </div>
            {
                searchResult.length > 0 ? (searchResult.map(post => <PostItem key={post.id} post={post}/>)) : (post.map(post => <PostItem key={post.id} post={post}/>))
            }

            
        </>
    );
};

export default Post;



// {searchResult.map(post => <PostItem key={post.id} post={post}/>)}
// {post.map(post => <PostItem key={post.id} post={post}/>)}