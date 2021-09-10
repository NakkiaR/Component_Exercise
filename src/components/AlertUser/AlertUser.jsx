import React from 'react'
// import reactDom from 'react-dom';



class AlertUser extends React.Component {
    click_the_button() {
      alert(this);
    }
    render() {
      return (
        <div className="alert-button">
            <h2>Exercise 3</h2>
            <hr/>
            <button onClick={this.props.alertUser}>Click Me!</button>
        </div>
      );
    }
  }
  
//   ReactDOM.render(<AlertUser />, document.getElementById('root'));
  export default AlertUser