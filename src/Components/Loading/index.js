import React from 'react';

const Loading = () => {
  return (
      <div className="flex items-center justify-center space-x-2 animate-pulse pt-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>

  )
}

export default Loading