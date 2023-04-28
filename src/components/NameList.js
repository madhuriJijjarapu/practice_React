import React, { Component } from "react";
import Person from "./Person";
class NameList extends Component {
    render() {
        let names = [
            {
                id: 'ed4556',
                name: 'madhuri',
                age: 26,
                skill: "UI"
            },
            {
                id: 'ed4557',
                name: 'Triveni',
                age: 24,
                skill: "Python"
            },
            {
                id: 'ed4558',
                name: 'Jyostna',
                age: 27,
                skill: "Angular"
            }
        ];
        const personlist = names.map(person =>
            <Person person={person} />
            // <h2>I am {person.name} . I am {person.age} years old. I know {person.skill}</h2>
        )
        return (
            <div>{personlist}</div>
        )
    }
}
export default NameList