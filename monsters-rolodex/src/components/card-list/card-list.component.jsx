import React from 'react'

import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props) =>(

   <div className="card-list">
       { props.monsters.map(monster =>(
           <Card key={monster.id} monster={monster}/>
       ))}
   </div>
)



/* to the it the conventional way
export const CardList (props) =>{
    const monsterList = props.monsters.map(monster =>{
        return(
            <h1 key={monster.id}>{monster.name}</h1>
        )
    })

    return(
        <div className="card-list">
            {monsterList}
        </div>
    )

}
*/