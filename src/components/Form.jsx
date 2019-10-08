import React, {Component} from 'react';
import Sidebar from './Sidebar';

class Form extends Component {
  nameRef = React.createRef();
  lastNameRef = React.createRef();
  bioRef = React.createRef();
  maleGenderRef = React.createRef();
  femaleGenderRef = React.createRef();
  otherGenderRef = React.createRef();

  state = {
    user: {}
  }

  receiveForm = (e) => {
    e.preventDefault();
    let gender = this.maleGenderRef.current.value;
    if (this.maleGenderRef.current.checked) {
      gender = this.maleGenderRef.current.value;
    } else if (this.femaleGenderRef.current.checked) {
      gender = this.femaleGenderRef.current.value;
    } else {user:
      gender = this.otherGenderRef.current.value;
    }

    let user = {
      name: this.nameRef.current.value,
      lastName: this.lastNameRef.current.value,
      bio: this.bioRef.current.value,
      gender: gender
    }
    this.setState({
      user: user
    });
  }

  render(){

    if(this.state.user.name){
      var user = this.state.user
    }

    return (
      <React.Fragment>
        <div className="center">
          <div id='content'>
            <h1 className="subheader">Form</h1>

            {this.state.user.name &&
              <div id="user-data">
                <p>Name: <strong>{user.name}</strong></p>
                <p>Last Name: <strong>{user.lastName}</strong></p>
                <p>Bio: <strong>{user.bio}</strong></p>
                <p>Header: <strong>{user.gender}</strong></p>
              </div>
            }

            <form className="mid-form" onSubmit={this.receiveForm} onChange={this.receiveForm}>
                 <div className="form-group">
                     <label htmlFor="nombre">Name</label>
                     <input type="text" name="nombre" ref={this.nameRef} />
                 </div>

                 <div className="form-group">
                     <label htmlFor="apellidos">Last Name</label>
                     <input type="text" name="apellidos" ref={this.lastNameRef} />
                 </div>

                 <div className="form-group">
                     <label htmlFor="bio">Bio</label>
                     <textarea name="bio" ref={this.bioRef} ></textarea>
                 </div>

                 <div className="form-group radibuttons">
                     <input type="radio" name="genero" value="hombre" ref={this.maleGenderRef} /> Male
                     <input type="radio" name="genero" value="mujer" ref={this.femaleGenderRef} /> Female
                     <input type="radio" name="genero" value="otro" ref={this.otherGenderRef} /> Other
                 </div>

                 <div className="clearfix"></div>
                 <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
