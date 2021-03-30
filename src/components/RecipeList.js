import React from 'react'
import { Link } from 'react-router-dom';
import data from '../dummyData/data'


const RecipeList = () => {
    return (
        <div id="list">
            {data.map(
                recipe => {
                    return <Link key={Date.now()}><h3>{recipe.title}</h3><p>{recipe.instructions}</p></Link>
                })}
        </div>
    )

}

export default RecipeList;