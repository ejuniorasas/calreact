class AppointmentList extends React.Component {
  render() {
    return (
      <div className='row'>
        {this.props.appointments.map(function(appointment){
          return (
            <Appointment key={appointment.id} appointment = {appointment} />
          )
        })}
     </div>
    )
  }
}
