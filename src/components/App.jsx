import React, { Component } from 'react';
import AlertUser from './AlertUser/AlertUser';
// import reactDom from 'react-dom';
// import AlertTemplate from 'react-alert-template-basic'
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroCreator from './SuperheroCreator/SuperheroCreator';
// import axios from 'axios';
// import Jokes from './Jokes';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           firstName: 'Lilo',
           lastName: '-n-Stitch',
           names: ['Tom', 'Jerry', 'Mickey Mouse', 'Minnie Mouse', 'Donald Duck'],
           alertUser: 'devCodeCamp',
        //    getJokes: [],
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
    alertUser = () => {
        console.log('devCodeCamp')
        this.setState({
            alert: this.alertUser
        })
    }

//     componentDidMount() {
//         axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5')
//         .then(response => this.setState({
//             jokes: response.data
//     }));
// }

    // createSuperhero = (newSuperhero) => {
    //     console.log('From the createSuperhero on App component', newSuperhero);
    //     this.superheroesList.push(newSuperhero)
    //     this.setState({
    //         superheroId: this.superheroes.length - 1
    //     })
    // }
    render() {
        return (
        <React.Fragment>
            <DisplayName fName={this.state.firstName} lName={this.state.lastName}/>
            <NameList nameListExercise={this.state.names}/>
            <AlertUser alertUser={this.state.alertUser}/>
            <SuperheroTable superheroesList={this.state.superheroes}/>
            <SuperheroCreator createNewSuperhero={this.createSuperhero} />
            {/* <Jokes getJokes={this.state.getJokes} /> */}
        </React.Fragment>
        );
    }
}
 

export default App;
