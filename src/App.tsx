import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '@/components/SearchBar';
import TagList from '@/components/TagList';
import Thumbnail from '@/components/Thumbnail';
// import Example from '';

const dummy_data = [
    {
        name: 'tag-busan',
        id: 'tag-busan',
        value: '부산',
    },
    {
        name: 'tag-jeju',
        id: 'tag-jeju',
        value: '제주섬섬',
    },
    {
        name: 'tag-suwon',
        id: 'tag-suwon',
        value: '수원시',
    },
    {
        name: 'tag-night',
        id: 'tag-night',
        value: '야경',
    },
    {
        name: 'tag-ic',
        id: 'tag-ic',
        value: '인천',
    },
];

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                {/* container */}
                <div className='container mx-auto sm:px-6 lg:px-8 px-4'>
                    {/* SearchBar */}
                    <SearchBar />
                    <p className='mt-5 mb-2 text-lg'>인기태그</p>
                    <TagList itemList={dummy_data} />

                    {/* Today Best */}
                    <p className='mt-5 mb-2 text-2xl'>Today Best</p>
                    <Thumbnail />

                    {/* Week Best */}
                    <p className='mt-5 mb-2 text-2xl'>Weekly Best</p>
                    <Thumbnail />
                </div>
            </header>
        </div>
    );
}

export default App;
