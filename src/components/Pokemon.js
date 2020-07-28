import React from 'react';

const Pokemon = props => {
    console.log(props);
    const type = props.types.map((type, index) => {
        return <li key={index}>{type}</li>
    })

    return (
        <>
             <article>
                <img src={`${props.img}`} alt={props.name}></img>
                <h2>{props.name}</h2>
                <div>
                    <ul>
                        {type}
                    </ul>
                </div>
            </article> 
        </>
    );
};



export default Pokemon;