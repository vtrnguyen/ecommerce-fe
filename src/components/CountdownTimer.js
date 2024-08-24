import React, { Component } from 'react';

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 3 * 60 * 60 * 1000,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time - 1000,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    render() {
        const { time } = this.state;

        if (time <= 0) {
            clearInterval(this.interval);
            return <div>Countdown finished!</div>;
        }

        return (
            <div>
                <div>{this.formatTime(time)}</div>
            </div>
        );
    }
}

export default CountdownTimer;
