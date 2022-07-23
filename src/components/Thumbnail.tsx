import React from 'react';

const Thumbnail = () => {
    return (
        <div className='flex'>
            <img
                src='https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png'
                className='w-2/5'
            />
            <img
                src='https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png'
                className='w-2/5 ml-2'
            />
        </div>
    );
};

export default Thumbnail;
