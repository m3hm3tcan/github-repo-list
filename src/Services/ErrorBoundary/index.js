import React from "react"

const MyErrorBoundary = React.Catch(function MyErrorBoundary(children, error) {
    if (error) {
      return (
        <div className="error-screen">
          <h2>An error has occured</h2>
          <h4>{error.message}</h4>
        </div>
      )
    } else {
      return <React.Fragment>{children}</React.Fragment>
    }
  })