import React from 'react';

const TagItem = ({ id, name, value }: { id: string; name: string; value: string }) => {
    value = '#' + value;

    return (
        <div>
            <div>
                <button
                    name={name}
                    id={id}
                    className={
                        'text-sm text-center  w-[' +
                        (value.length * 16 + 10) +
                        'px] mx-1 px-3 shadow-sm h-8 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-full'
                    }
                >
                    {value}
                </button>
            </div>
        </div>
    );
};

export default TagItem;
