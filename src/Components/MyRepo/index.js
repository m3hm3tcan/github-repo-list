import React, { useEffect, useState } from 'react';
import GithubIcon from './GithubIcon';

const MyRepo = ({user,callBack}) => {
    const handleClick = (e) =>{
        callBack(e,user.login)
    }

    return (
        <div className='pt-4'>
            <button type="button" onClick={handleClick}
            className="text-white bg-[#24292F] hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 float-right">
                <GithubIcon/> My Repositories
            </button>
        </div>
    )
}

export default MyRepo