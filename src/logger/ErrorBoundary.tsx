import React, { ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: { componentStack: string }) {
    // Display fallback UI

    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    const errorInformationToLog = {
      timeStamp: new Date().toLocaleString(),
      errorMessage: error,
      location: {
        componentStack: info.componentStack,
      },
    };
    // Make request to database to push errorInformationToLog
    console.log(errorInformationToLog);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
