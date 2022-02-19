import React, { useEffect, useState } from 'react';
import Search from './../../Components/Search'
import { getCurrentUser, getUserRepoList } from './../../Services/DataService'
import RepoList from './../../Components/RepoList'
import Loading from './../../Components/Loading'

const Home = () => {
  const [currentUser, setCurrentUser] = useState()
  const [searchResult, setSearchResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e, userName) => {
    e.preventDefault()
    setIsLoading(true)
    await getUserRepoList(userName).then(res => {
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


  return (
    <div className='items-center min-h-screen from-cyan-100 via-pink-200 to-red-200 bg-gradient-to-br pt-24' >
      <Search callBack={handleSubmit} />

      {isLoading && <Loading/> }
      {!isLoading && searchResult !== null  && <RepoList data={searchResult}/> }
      
      
    </div>
  );
}

export default Home;