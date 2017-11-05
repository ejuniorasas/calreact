class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    };
    //this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleUserInputChange(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <AppointmentForm title={this.state.title}
          appt_time={this.state.appt_time} onUserInput={this.handleUserInputChange} />
        <AppointmentList appointments={this.state.appointments} />
     </div>
   )
  }
}
