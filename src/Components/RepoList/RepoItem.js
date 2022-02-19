import React from 'react';

const RepoItem = ({ data }) => {
    return (
        <>
            {data.data.user.repositories !== undefined && data.data.user.repositories.nodes.map((repo,i) => (

                <li className="flex flex-row pt-1 pb-4 w-600" key={i}>
                    <div
                        className="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium  w-px-100">
                                {repo.name}
                            </div>
                            <div className="font-small  w-px-100">
                                {repo.description}
                            </div>
                            <div className="font-small">
                               {`is Fork: ${repo.isFork}`}
                            </div>
                            <div className="font-small">
                               {`Total issues : ${repo.issues.totalCount}`}
                            </div>
                            <div className="font-small">
                               {/* {`Last Commit Date: ${repo.defaultBranchRef.target.history.edges[0].node.committedDate}`} */}
                            </div>
                        </div>
                        <a
                            className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-2 p-1"
                            href={repo.url} target="_blank">
                            Open in GitHub
                        </a>
                    </div>
                </li>

            ))
            }
        </>

    )
}

export default RepoItem;