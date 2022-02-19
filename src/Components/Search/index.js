import React, { useEffect, useState } from 'react';
import { useHistory  } from 'react-router-dom';

const Search = ({callBack}) => {

  const [query, setQuery] = useState('')
  const history = useHistory();

  useEffect(()=>{
    const params= new URLSearchParams()
    if(query){
      params.append("user",query)
    }else{
      params.delete("user")
    }
    history.push({search:params.toString()})

  },[query, history])

  const handleChange = (e)=>{
    setQuery(e.target.value)
  }

  const hanldeSubmit = (e)=>{
    e.preventDefault()
    let search = window.location.search
    let params = new URLSearchParams(search)
    let userName = params.get('user')
    if(userName !== '' ){
      callBack(e,userName)
    }    
  }

  return (
    <>
      <form onSubmit={hanldeSubmit}>
      <div className="flex items-center  mx-auto bg-white rounded-lg  w-1/3">
        <div className="w-full">
          <input
            type="search"
            className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
            placeholder="user name here..."
            onChange={handleChange}
            value={query}
          />
        </div>
        <div>
          <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg" disabled={!query}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
      </form>
    </>
  );
}

export default Search;