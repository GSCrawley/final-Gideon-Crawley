import React, { Component } from 'react'
import Title from './Title'
// import lists from '../reducers/lists'
import './StarWars.css'

class StarWars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            starwarsData: null,
            list: [],
            planetData: null,
        }
    }

    handleSubmit(e) {
        const { inputValue } = this.state
        e.preventDefault()
        const num = inputValue
        const url = `https://swapi.dev/api/people/${num}`
        const planetURL = `https://swapi.dev/api/planets/${num}/`

        const response = fetch(url)
        const planetResponse = fetch(planetURL)

        response.then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then((json) => {
            this.setState({ starwarsData: json })
        }).catch((err) => {
            this.setState({ starwarsData: null })
        })

        planetResponse.then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then((json) => {
            this.setState({ planetData: json })
        }).catch((err) => {
            this.setState({ planetData: null })
        })
    }

    addCharacterToList(value) {
        this.setState({
            list: [...this.state.list, value]
        })
    }

    renderCharacterList() {
        const { list } = this.state
        const characters = list.map((item) => {
            return <div>{item}</div>
        })
        return characters
    }

    renderCharacter() {
        const { starwarsData, planetData } = this.state
        if (starwarsData === null) {
            return undefined
          }

        const { name, height, mass, hair_color, eye_color } = starwarsData

        return (
            <div className="characterDetails">
                <Title name={name} />
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Hair Color: {hair_color}</p>
                <p>Eye Color: {eye_color}</p>
                <p>Homeworld: {planetData.name}</p>
                <button
                    onClick={(e) =>
                        this.addCharacterToList(name)
                    }>Save</button>
            </div>
        )

    }

    render() {
        const {inputValue} = this.state
        const character = this.renderCharacter()
        const characterList = this.renderCharacterList()

        return (
            <div>
                <form
                    className="input-form"
                    onSubmit={
                        e => this.handleSubmit(e)
                    }>
                    <input
                        value={inputValue}
                        onChange={e =>
                            this.setState({ inputValue: e.target.value })}
                            placeholder="Enter a #, Jedi!"
                        />
                    <button>Submit</button>
                </form>
                {character}
                Your Characters:
                {characterList}
            </div>
        
        )
    }
}

export default StarWars