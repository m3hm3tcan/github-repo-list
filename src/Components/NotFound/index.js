import React from 'react';

const NotFound = ({error}) => {
    return (
        <div className="w-screen flex items-center justify-center pt-16">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404 { error.errors !== undefined ? error.errors[0].type : `user repository not found` }</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal">
                            { error.errors !== undefined ? error.errors[0].message : `` }
                    </p>
                    <p className="mb-8">But dont worry, you can search for an other user</p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;