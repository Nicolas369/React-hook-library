import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  async actionReboot() {
    const success = await this.props.reboot();
    if (success) this.setState({ hasError: false, error: null });
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    if (this.props.reboot) this.actionReboot();
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
