import React from 'react';


interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

const Modal = ({children, onClose, title}: ModalProps) => {


    return (
        <>
            <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' onClick={onClose}></div>

            <div className='w-[500px] p-5 rounded bg-white absolute top-[25%] left-1/2 -translate-x-1/2'>
                <h1 className='text-center text-3xl mb-10'>{title}</h1>
                {children}
            </div>
        </>
    );
};

export default Modal;