import React from 'react'
import { Link } from 'react-router-dom';
import data from '../dummyData/data'


const RecipeList = () => {
    return (
        <div id="list">
            {data.map(
                recipe => {
                    return <Link className="listUnit" key={Date.now()}><h5>{recipe.title}</h5><p>Category: {recipe.category}</p></Link>
                })}
        </div>
    )

}

export default RecipeList;