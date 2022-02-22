import React, { useState } from 'react'
import Alert from './../Alert'

const CreateRepoForm = ({ closeModal, handleCreate }) => {
    const [isValid, setIsValid] = useState(true)
    const [repoData, setRepoData] = useState({
        name: "",
        description: "",
        homepageUrl: "",
        visibility: "PRIVATE",
        hasIssuesEnabled: false,
        hasWikiEnabled: false
    })

    const handleModal = (e) => {
        e.preventDefault()
        closeModal()
    }

    const getData = (e) => {
        e.preventDefault()
     if(e.target.id === 'create'){
        let control = validateContent();
        if(control){
            handleCreate(repoData)
        }
     }

    }

    const handleChange = (e) => {
        for (let item in repoData) {
            if (item === e.target.id) {
                if (typeof repoData[item] === 'boolean') {
                    setRepoData({ ...repoData, [item]: e.target.checked })
                } else {
                    setRepoData({ ...repoData, [item]: e.target.value })
                }
            }
        }
    }

    const validateContent = () => {
        setIsValid(true)
        for (let item in repoData) {
            if (typeof repoData[item] === 'string' && repoData[item] === "") {
                setIsValid(false);
                return false
            }
        }
        return true;
    }

    return (
        <>
            {!isValid && <Alert type='warning' message='Please fill the form before summiting the request!' />}
            <div className="container mx-auto">
                <div className="flex justify-center my-12">
                    <div className="w-full flex">
                        <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Create a Repository</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onChange={handleChange}>

                                <div className="mb-2">
                                    <label className="block mb-1 text-sm font-bold text-gray-700">
                                        Repository Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Repository Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block mb-1 text-sm font-bold text-gray-700">
                                        Description
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="description"
                                        type="text"
                                        placeholder="Short description..."
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block mb-1 text-sm font-bold text-gray-700">
                                        Hopepage URL
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="homepageUrl"
                                        type="text"
                                        placeholder="Home page url..."
                                    />
                                </div>
                                <div className="mb-2 md:flex md:justify-between">
                                    <div className="mb-4">
                                        <div className="relative inline-flex mt-6">
                                            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
                                            <select id="visibility" className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" onChange={getData}>
                                                <option>PRIVATE</option>
                                                <option>PUBLIC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="inline-flex items-center mt-8">
                                            <input id="hasIssuesEnabled" type="checkbox" className="form-checkbox h-5 w-5 text-red-600" /><span className="ml-2 text-gray-700">Issues Enabled</span>
                                        </label>
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="inline-flex items-center mt-8">
                                            <input id="hasWikiEnabled" type="checkbox" className="form-checkbox h-5 w-5 text-red-600" /><span className="ml-2 text-gray-700">Wiki Enabled</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={getData}
                                        id="create"
                                    >
                                        Create
                                    </button>
                                </div>
                                <hr className="mb-2 border-t" />
                                <div className="text-center text-blue">
                                    <button onClick={handleModal}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRepoForm