import React, { useState } from 'react';
import NavBar from './NavBar'
import styled from 'styled-components';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    color: white;

@media (min-width: 100px) {
    width: 100vw;
    height: 50vh;
    #recipeImg {

    display: none;
    }
}

@media (min-width: 400px) {
    #recipeImg {
    display: none;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 40vh;
    #recipeImg {
        display: none;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #recipeImg {
        display: none;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 40vw;
    height: 100vh;
    #recipeImg {
            background-size: 600px;
            display: initial;
        }  
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #recipeImg {
            background-size: 700px;
          
        }
}

@media (min-width: 1900px) {
    #recipeImg {
            background-size: 1000px;
        }
}

    `

const RecipeDiv = styled.div`
    position: absolute;
    width: 60vw;
    margin: 0;
    padding: 20px;
    left: 35vw;
    top: 25%;
    box-sizing: border-box;
    display: initial;

    #addTextArea {
        width: 216px;
        max-width: 350px;
        max-height: 200px;
    }

@media (min-width: 100px) {
    position: relative;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 400px) {
    
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {

}

/* Larger than tablet */

@media (min-width: 750px) {
    
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 60vw;
    margin: 0;
    height: 100vh;
    padding: 20px;
    left: 35vw;
    top: 0;
    box-sizing: border-box;
    display: flex;
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    
}

@media (min-width: 1900px) {
    
}
`;

const eggs = {
    recipe: 'Scrambled Eggs',
    title: 'How to make fluffy moist scrambled eggs',
    source: 'Tori Avey',
    ingredients: 'Many',
    instructions: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    category: 'Eggs'
}

let nav = {
    logOut: true,
    dashboard: true
}

const Recipe = () => {
    const [recipe] = useState(eggs)
    return (
        <div>
            <Background><div id='addImg'></div></Background>
            <RecipeDiv>
                <NavBar display={nav} />
                <h5>{recipe.title}</h5>
                <p>Ingredients needed for this recipe: {recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
            </RecipeDiv>
        </div>
    );
};

export default Recipe;