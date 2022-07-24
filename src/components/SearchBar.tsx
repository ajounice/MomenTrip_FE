import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <div className='mt-3'>
                <input
                    type='text'
                    name='search'
                    id='search'
                    className='shadow-sm h-10 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full'
                    placeholder='Search'
                />
            </div>
        </div>
    );
};

export default SearchBar;
