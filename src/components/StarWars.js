import React, { Component, useState } from 'react';
import characterDeets from './Characters';

export default class StarWars extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: '',
            number: '',
            characterDeets: []
        };
        this.onChange=this.onChange.bind(this)
        this.onClick=this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.savePerson = this.savePerson.bind(this)
        this.showAll = this.showAll.bind(this)
    };

    onChange = evt =>{
        const number = evt.target.value
        this.setState({ number })
    }

    onSubmit(e) {
        e.preventDefault()
    }
    showAll(e) {
        return (
            characterDeets()
        )
    }

    async onClick() {
        const { number } = this.state
        const response = await fetch(`https://swapi.dev/api/people/${number}/`);
        const data = await response.json();
        if (data.detail !== "Not There") {
            this.setState({ data })
        }

    }

    