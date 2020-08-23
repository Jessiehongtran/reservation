import React from 'react';
import { people } from '../data/people';
import "../styles/people.scss"

export default class People extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="list-member">
                {people.map(person => 
                    <div className="member">
                        <div className="avatar">
                            <img src={person.avatar || "https://sanjaymotels.com/wp-content/uploads/2019/01/testimony.png"}/>
                        </div>
                        <div className="identity">
                            <h3>{person.name}</h3>
                            <p>{person.role}</p>
                        </div>
                    </div>
                )}
                <button className="confirm-btn">Confirm Reservation</button>
            </div>
        )
    }
}