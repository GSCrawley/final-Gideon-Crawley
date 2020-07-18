import React from 'react'

function characterDeets(props) {
    const { character } = props
    return (
        <div>
            {character.map((char, value) => {
                return (
                    <div className="container" key={value}>
                        <h1>{char.name}</h1>
                        <h3>Born:  {char.birth_year}</h3>
                        <h3>Gender:  {char.gender}</h3>
                        <h3>Homeworld:  {char.homeworld.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default characterDeets;
