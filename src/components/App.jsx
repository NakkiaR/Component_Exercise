import React, { Component } from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import SuperheroTable from './SuperheroTable/SuperheroTable';


class App extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
           firstName: 'Lilo',
           lastName: '-n-Stitch',
           names: ['Tom', 'Jerry', 'Mickey Mouse', 'Minnie Mouse', 'Donald Duck'],
        //    alertUser:
           superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Gadgets',
                    secondaryAbility: 'Strength'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super Strength',
                    secondaryAbility: 'Fly',
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider Senses',
                    secondaryAbility: 'Shoots Web'
                }
            ],
        }
    }
           
        


    render() {
        return (
        <React.Fragment>
            <DisplayName fName={this.state.firstName} lName={this.state.lastName}/>
            <NameList nameListExercise={this.state.names}/>
            <SuperheroTable superheroesList={this.state.superheroes}/>
        </React.Fragment>
        );
    }
}
 

export default App;
