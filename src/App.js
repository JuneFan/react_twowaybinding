import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './Error_Boundary/Error_Boundary';
class App extends Component {
  state = {
    persons: [{name:'luna', age:18, id:10},
             {name:'Max', age:22, id:11},
             {name:'John', age:34, id:22}],
    showPerson: true
  }

  inputUserName = (event, index) => {
    const userPerson = [...this.state.persons];
    userPerson[index].name = event.target.value;
    this.setState({persons:userPerson});
    // const personIndex = this.state.persons.findIndex(p => {
    //   return p.id === id;
    // });
    // const person = {
    //   ...this.state.persons[personIndex]
    // };
    // //const person = Object.assign({}, this.state.persons[personIndex]);
    // person.name = event.target.value;
    // const persons = [...this.state.persons];
    // persons[personIndex] = person;
    //
    // this.setState({persons: persons});
  }
  togglePersonHandler = (event) => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

  deletePerson = (index) =>{
     const personChange = [...this.state.persons];
     console.log(index);
     personChange.splice(index,1);
     this.setState({persons:personChange});
  }
  render() {
    let persons = null;
    let btnClass = '';
    if(this.state.showPerson){
      persons =
      (<div>
        {this.state.persons.map((person,index) => {
          return <ErrorBoundary key={person.id}>
            <Person name={person.name}
            age={person.age}
            key={index}
            click={this.deletePerson.bind(this)}
            changed={(event) => this.inputUserName(event, index)}
            />
          </ErrorBoundary>
        })
      }
      </div>);
      btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (this.state.persons.length <=2)
      {assignedClasses.push(classes.red);}
    if (this.state.persons.length <=1)
      {assignedClasses.push(classes.bold);}
   return (

       <div className={classes.App}>
         <p className={assignedClasses.join(' ')}>This is a line</p>
         <button className={btnClass} onClick={this.togglePersonHandler}>Click Me</button>
         {persons}
       </div>

  )
  }
}

export default App;
