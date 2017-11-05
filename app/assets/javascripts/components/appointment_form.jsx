class AppointmentForm extends React.Component {

  handleChange(event) {
    const target = event.target;
    this.props.onUserInput({
      [taget.name]: target.value
    });
  }

  render(){
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h2>Make a new appointment</h2>
        </div>
        <div className='col-md-12 p-2'>
          <form className='form-row'>
            <div className='col-md-4'>
              <input  name='title' className='form-control' placeholder='Appointment title'
               value={this.props.title} onChange={this.handleChange}/>
            </div>
            <div className='col-md-4'>
              <input  name='appt_time' className='form-control' placeholder='Date and time'
               value= {this.props.appt_time} />
            </div>
            <div className='col-md-2'>
              <input type='submit' className='form-control btn btn-primary' value='Make Appointment' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
