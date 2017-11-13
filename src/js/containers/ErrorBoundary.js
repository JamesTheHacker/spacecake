import React from 'react';

class ErrorBoundary extends React.Component {
    
    state = { error: false };

    componentDidCatch(error, info) {
        this.setState({ error });
        process.env.SENTRY_DSN && Raven.captureException(error, { extra: info });
    }
  
    render() {
        if (this.state.error) {
            return (
                <div
                    onClick={() => 
                        process.env.SENTRY_DSN &&
                        Raven.lastEventId() && 
                        Raven.showReportDialog()}>
                    <p>We're sorry — something's gone wrong!</p>
                    <p>Our developers have been notified. The problem will be resolved shortly.</p>
                </div>
            );
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;