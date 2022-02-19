import React from 'react';

const Pagination = ({ data, callBack }) => {

    const handleClcik = (isNextPage) => {
        callBack(isNextPage)
    }
    const control =data.data.user !== null ? data.data.user.repositories.pageInfo : null;
    return (
        <>
            {data.data.user !== null &&
                <div>
                    <div className="flex items-center  mx-auto w-1/4 pb-12">
                    {control.hasPreviousPage &&   <button className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white"
                            onClick={() => handleClcik(false)}>
                            Previous
                        </button>}
                       {control.hasNextPage &&   <button className="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white"
                            onClick={() => handleClcik(true)}>
                            Next
                        </button>}
                    </div>
                </div>
            }
        </>

    )
}

export default Pagination