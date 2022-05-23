import React from 'react'
import axios from 'axios'
import { render } from '@testing-library/react';
export default class PersonList extends React.Component{
    state={
        person:[]
    };

    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            console.log(res)
            this.setState({person:res.data});
        });
    }
    render() {
        return(
            <ul>
                {this.state.person.map(person=><li key={person.id}>{person.name} </li>)}
            </ul>
        )
    }
}