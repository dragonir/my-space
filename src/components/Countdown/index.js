import React from 'react';
import './index.scss';

class Countdown extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount = () => {
    var that = this;
    this.timer = setInterval(function () {
      that.setState({
        date: new Date()
      })
    }, 1000)
  }

  getDuration = my_time => {
    var days = my_time / 1000 / 60 / 60 / 24;
    var daysRound = Math.floor(days);
    var hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
    var hoursRound = Math.floor(hours);
    var minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
    var minutesRound = Math.floor(minutes);
    var seconds = Math.floor(my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound));
    var time = hoursRound + ':' + minutesRound + ':' + seconds;
    return time;
  }

  calculateCountDown = () => {
    var end = new Date(Date.parse(this.state.date.getFullYear() + this.state.date.getMonth() + this.state.date.getDate() + " 18:25:00".replace(/-/g, "/"))).getTime();
    var now = this.state.date.getTime();
    var rest = end - now;
    return this.getDuration(rest);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="time_zone">
        <p className="current_time">{this.state.date.toTimeString()}</p>
        <p className="countdown_time">Take off counting: <em>{this.calculateCountDown()}</em></p>
      </div>
    );
  }
}

export default Countdown;