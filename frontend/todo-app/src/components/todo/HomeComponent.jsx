import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class HomeComponent extends Component {
  
    render(){
        return(
          
            <div>
            <div class="jumbotron text-center">
            <h1>Home</h1>
            <p>Checkout some of the features below</p>
          </div>
          
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <h3>Classmates API</h3>
                <p>Keep updated with your classmates</p>
                <Link className="btn btn-success" to="/classmates">Classmates</Link>
              </div>
              <div class="col-sm-4">
                <h3>RMIT Map API</h3>
                <p>Select a campus and go</p>
                <Link className="btn btn-success" to="/map">Map</Link>
              </div>
              <div class="col-sm-4">
                <h3>Events API</h3>
                <p>Create, delete or view your events</p>
                <Link className ="btn btn-success" to="/myevents">Events</Link>
              </div>
            </div>
          </div> 
          </div>
        )
    }
}

export default HomeComponent 
