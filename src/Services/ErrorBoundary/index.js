import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    console.log('APP ERROR : ', error,info)
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    }
  }

  render() {

    if (this.state.hasError) {
      return (
        <div>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">Something seriously bad happened. :( </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
          </div>
        </div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}

export default ErrorBoundary