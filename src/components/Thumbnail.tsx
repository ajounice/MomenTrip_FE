import React from 'react';

const Thumbnail = () => {
    return (
        <div className='flex overflow-x-auto'>
            <img
                src='https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png'
                className='h-[256px] w-[144px] mr-4'
            />
            <img
                src='https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png'
                className='h-[256px] w-[144px] mr-4'
            />
            <img
                src='https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png'
                className='h-[256px] w-[144px] mr-4'
            />
        </div>
    );
};

export default Thumbnail;
