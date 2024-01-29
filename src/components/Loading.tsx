import React from 'react';
import {CircularProgress, LinearProgress} from '@mui/material';

const Loading = () => {



    return (
        <div className='text-center text-4xl mt-[25%]'>
            <h1 className='mb-10'>Загрузка</h1>
            <LinearProgress/>
        </div>
    );
};

export default Loading;