class Appointment extends React.Component{
  render() {
    return(
      <div className='card border-success p-0 mb-2 ml-2'>
        <div className='card-body text-success'>
          <h3 className='card-title'>{this.props.appointment.title}</h3>
          <p className='card-text'>{this.props.appointment.appt_time}</p>
        </div>
      </div>
    )
  }
}
