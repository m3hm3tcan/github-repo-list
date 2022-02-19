import React from 'react';
import RepoItem from './RepoItem'
import NotFound from './../NotFound'

const RepoList = ({ data }) => {
  return (
    <>
      {data.data.user !== null && data.data.user.repositories.nodes.length > 0 && 
        <div className="container mb-2 pt-4 flex mx-auto w-full items-center justify-center">
          <ul className="flex flex-col">
            <RepoItem data={data} />
          </ul>
        </div>
      }
      {(data.data.user === null || data.errors !== undefined || data.data.user.repositories.nodes.length === 0 ) && <NotFound error={data} />}
    </>
  );
}

export default RepoList;