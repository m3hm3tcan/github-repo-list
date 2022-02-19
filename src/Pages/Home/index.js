import React, { useEffect, useState } from 'react';
import Search from './../../Components/Search'
import { getCurrentUser, getUserRepoList } from './../../Services/DataService'
// import NotFound from '../../Components/NotFound';
// import UserList from './../../Components/UserList'

const Home = () => {
  const [currentUser, setCurrentUser] = useState()
  const [searchResult, setSearchResult] = useState()

  useEffect(()=>{
    const fecthUser = async () =>{
      let data={};
      const getUser = await getCurrentUser().then(res=>{ 
        data= res.data.data.viewer;
      });
      setTimeout(getUser, 1000)
      setCurrentUser(data)
    } 
    fecthUser();
  },[])

  const handleSubmit = async (e, userName) => {
    e.preventDefault()
    await getUserRepoList(userName).then(res => setSearchResult(res.data))
  }

  useEffect(()=>{
    console.log(searchResult)
  },[searchResult])


  return (
    <div className='items-center min-h-screen from-cyan-100 via-pink-200 to-red-200 bg-gradient-to-br pt-24' >
      <Search callBack={handleSubmit} />

      {/* <NotFound/> */}
      {/* <UserList /> */}

      
    </div>
  );
}

export default Home;