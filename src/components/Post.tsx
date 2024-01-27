import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/UseTypeSelector";
import {useAction} from "../hooks/useAction";

const Post: React.FC = () => {

    const {postList} = useAction()
    useEffect(()=>{
        postList()
    },[])

    const {post, loading, error} = useTypeSelector(state => state.post)

    if(loading) return <h1>Загрузка</h1>
    if(error) return <h1>Ошибка {error}</h1>





    return (
        < >
            {post.map(post => <div key={post.id} style={{
                border: '1px solid black',
                marginBottom: '30px',
                padding: '15px'
            }}>
                <div className='flex justify-between'>
                    <h1>{post.title}</h1>
                    <p>Автор: {post.author}</p>
                </div>
                <p>{post.content}</p>
                <p>Дата создания: {post.created_at}</p>
            </div>)}
        </>
    );
};

export default Post;