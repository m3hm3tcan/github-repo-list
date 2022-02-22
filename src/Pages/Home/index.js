import React, { useEffect, useState } from 'react';
import Search from './../../Components/Search'
import { getCurrentUser, getUserRepoList } from './../../Services/DataService'
import RepoList from './../../Components/RepoList'
import Loading from './../../Components/Loading'
import Pagination from '../../Components/Pagination'
import { constant_values } from '../../Services/utils/constants'
import ErrorBoundary from '../../Services/ErrorBoundary'
import MyRepo from '../../Components/MyRepo'

const Home = () => {
  const [currentUser, setCurrentUser] = useState({ user: null, isMyList: false })
  const [searchResult, setSearchResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    //get crurent user info
    const fecthUser = async () => {
      let data = {};
      const getUser = await getCurrentUser().then(res => {
        data = res.data.data.viewer;
      }).catch((error) => console.log(error))

      setTimeout(getUser, 1000)
      setCurrentUser({ ...currentUser, user: data })
    }
    fecthUser();
  }, [])

  const handleSubmit = async (e, userName) => {
    e.preventDefault()
    setSearchInput(userName)
    await fetchData(userName, `first:${constant_values.page_count}, after:null`)
  }

  const fetchData = async (userName, cursor) => {
    setIsLoading(true)
    await getUserRepoList(userName, cursor).then(res => {
      setSearchResult(res.data)
      if (userName !== currentUser.user.login) {
        setCurrentUser({ ...currentUser, isMyList: false })
      }else{
        setCurrentUser({ ...currentUser, isMyList: true })
      }
    })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
      });
  }

  const handlePage = async (isNextPage) => {
    let cursor = 'first:5, after:null' // for control
    if (isNextPage) {
      cursor = `first:${constant_values.page_count}, after:"${searchResult.data.user.repositories.pageInfo.endCursor}"`
    } else {
      cursor = `last:${constant_values.page_count}, before:"${searchResult.data.user.repositories.pageInfo.startCursor}"`
    }

    await fetchData(searchInput, cursor)
  }

  const handleMyRepo = (e, userName) => {
    setCurrentUser({ ...currentUser, isMyList: true })
    handleSubmit(e, userName)
  }

  return (
    <ErrorBoundary>
      <div className='via-pink-200 to-red-200 bg-gradient-to-br from-cyan-100 '>
        {currentUser.user && <MyRepo user={currentUser.user} callBack={handleMyRepo} isMyRepo={currentUser.isMyList}/>}
        <div className='items-center min-h-screen pt-24' >
          <Search callBack={handleSubmit} inputField={searchInput}/>
          {isLoading && <Loading />}
          {!isLoading && searchResult !== null && <><RepoList data={searchResult} /> <Pagination data={searchResult} callBack={handlePage} /></>}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Home;