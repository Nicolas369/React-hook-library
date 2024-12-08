import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);

    if (this.props.reboot) {
      const timeout = setTimeout(() => {
        this.props.reboot();
        this.setState({ hasError: false, error: null });
        clearTimeout(timeout);
      }, 5000);
    }
  }

  handleRetry() {
    this.setState({ hasError: false, error: null });
  };

  render() {
    return this.state.hasError
    ? this.props.fallback
    : this.props.children;
  }
}
