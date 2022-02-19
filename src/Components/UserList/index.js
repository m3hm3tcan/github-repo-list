import React from 'react';

const UserList = () => {
  return (
    <div className="container mb-2 pt-4 flex mx-auto w-full items-center justify-center">
      <ul className="flex flex-col">

        <li className="flex flex-row pt-4 pb-4 w-600">
          <div
            className="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
            <div className="flex-1 pl-1 mr-16">
              <div className="font-medium  w-px-100">
                Name
              </div>
              <div className="font-small  w-px-100">
                Description asdasdasdas asdasdasdasdasdasdasd asdasdasdasd
                asdasdasdasd asdasdasdasdasdasdasd
                asdasdasdasd
                asdasdasdasdasd
              </div>
              <div className="font-small">
                is it fork
              </div>
            </div>
            <div
              className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-2 p-1">
              Open in GitHub
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
}

export default UserList;