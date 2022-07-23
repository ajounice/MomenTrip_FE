import React from 'react';

const TagItem = ({ id, name, value }: { id: string; name: string; value: string }) => {
    value = '#' + value;

    return (
        <div>
            <div>
                <button
                    name={name}
                    id={id}
                    // TODO max wide로 태그 갯수 설정 -> 디스플레이 속성보고 맞춰서 하기
                    className={
                        'text-sm text-center mx-1 px-2 shadow-sm h-8 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-full'
                    }
                >
                    {value}
                </button>
            </div>
        </div>
    );
};

export default TagItem;
