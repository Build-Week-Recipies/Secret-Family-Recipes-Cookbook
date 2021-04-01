import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { editRecipe } from '../store/actions';

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
    #editImg {

    display: none;
    }
}

@media (min-width: 400px) {
    #editImg {
    display: none;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 40vh;
    #editImg {
        display: none;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #editImg {
        display: none;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 40vw;
    height: 100vh;
    #editImg {
            background-size: 400px;
            display: initial;
        }  
}

@media (min-width: 1024px) {
    #editImg {
            background-size: 550px;
          
        }
}
/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #editImg {
            background-size: 700px;
          
        }
}

@media (min-width: 1900px) {
    #editImg {
            background-size: 900px;
        }
}

    `

const EditDiv = styled.div`
    position: absolute;
    width: 60vw;
    margin: 0;
    padding: 20px;
    left: 35vw;
    top: 25%;
    box-sizing: border-box;
    display: initial;

    input {
        width: 300px;
        height: 50px; 
    }

    #editTextArea {
        width: 300px;
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

const Edit = (props) => {
    const { editRecipe } = props;
    const { id } = useParams()
    const initialValues = props.recipes.filter(recipe => recipe.id === parseInt(id))[0];
    const [recipe, setRecipe] = useState(initialValues);
    const history = useHistory();

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setRecipe({ ...recipe, [name]: value });
    }

    const editHandler = e => {
        e.preventDefault();
        editRecipe(id, recipe)
        history.push(`/recipe/${id}`)
    }

    let nav = {
        logOut: true,
        dashboard: true
    }

    return (
        <div className="container">
            <Background><div id='editImg'></div></Background>
            <EditDiv>
                <NavBar display={nav} />
                <h2>Edit The Recipe:</h2>
                <form onSubmit={editHandler}>
                    <label>
                        <input type='text' name='title' value={recipe.title} onChange={changeHandler} placeholder='Title:' />
                    </label>
                    <label>
                        <input type='text' name='source' value={recipe.source} onChange={changeHandler} placeholder='Source:' />
                    </label>
                    <label>
                        <input type='text' name='ingredients' value={recipe.ingredients} onChange={changeHandler} placeholder='Ingredients:' />
                    </label>
                    <label>
                        <input type='text' name='category' value={recipe.category} onChange={changeHandler} placeholder='Category:' />
                    </label>
                    <label>
                        <textarea type='text' id="editTextArea" name='instructions' value={recipe.instructions} onChange={changeHandler} placeholder='Instructions:' />
                    </label>
                    <button >Edit</button>
                </form>
            </EditDiv>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps, { editRecipe })(Edit);