import React, { useEffect, useState } from 'react';
import Search from './../../Components/Search'
import { getCurrentUser, getUserRepoList } from './../../Services/DataService'
import RepoList from './../../Components/RepoList'
import Loading from './../../Components/Loading'
import Pagination from '../../Components/Pagination'
import { constant_values } from '../../Services/utils/constants'

const Home = () => {
  const [currentUser, setCurrentUser] = useState()
  const [searchResult, setSearchResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState();

  useEffect(()=>{
    const fecthUser = async () =>{
      let data={};
      const getUser = await getCurrentUser().then(res=>{ 
        data= res.data.data.viewer;
      }).catch((error) => console.log('error', error))
      
      setTimeout(getUser, 1000)
      setCurrentUser(data)
    } 
    fecthUser();
  },[])

  const handleSubmit =async (e, userName) => {
    e.preventDefault()
    setSearchInput(userName)
    await fetchData(userName,`first:${constant_values.page_count}, after:null`)
  }

  const fetchData =async (userName,cursor) =>{
    setIsLoading(true)
    await getUserRepoList(userName,cursor).then(res => {
      setSearchResult(res.data)
    }).catch(error=>{
      console.log('error', error)
    }).finally(()=>{
      setIsLoading(false)
    });
  }

  useEffect(()=>{
    console.log(searchResult)
  },[searchResult])

  const handlePage = async (isNextPage) =>{
    let cursor ='first:5, after:null' // for control
    if(isNextPage){
      cursor=`first:${constant_values.page_count}, after:"${searchResult.data.user.repositories.pageInfo.endCursor}"`
    }else{
      cursor= `last:${constant_values.page_count}, before:"${searchResult.data.user.repositories.pageInfo.startCursor}"`
    }
    
    await fetchData(searchInput,cursor)
  }

  return (
    <div className='items-center min-h-screen from-cyan-100 via-pink-200 to-red-200 bg-gradient-to-br pt-24' >
      <Search callBack={handleSubmit} />
      {isLoading && <Loading/> }
      {!isLoading && searchResult !== null  && <><RepoList data={searchResult} /> <Pagination data={searchResult} callBack={handlePage}/></> }
      
    </div>
  );
}

export default Home;