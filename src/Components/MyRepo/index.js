import React, { useState } from 'react'
import { GithubIcon, CreateRepoIcon } from './GithubIcons'
import CreateRepoForm from './CreateRepoForm'

const MyRepo = ({ user, isMyRepo, callBack, createCallBack }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e) => {
        callBack(e, user.login)
    }

    const handleCreate =(newRepo)=>{
        setIsOpen(false)
        createCallBack(newRepo)
    }

    return (
        <div className='pt-4'>
            {isMyRepo && <button type="button" onClick={() => setIsOpen(true)}
                className="text-white bg-[#24292F] hover:bg-gray-500 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-2 mb-2 float-right">
                <CreateRepoIcon />
            </button>}

            <button type="button" onClick={handleClick}
                className="text-white bg-[#24292F] hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 float-right">
                <GithubIcon /> My Repositories
            </button>

            {isOpen && <div>
                <div className='absolute z-40 inset-0 opacity-25 bg-black justify-center pt-48'></div>
                <div className="fixed overflow-x-hidden  inset-0 flex z-50">
                    <div className='relative mx-auto  w-auto'>
                        <div className='bg-white'>
                            <CreateRepoForm closeModal={()=>setIsOpen(false)} handleCreate={handleCreate}/>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MyRepo