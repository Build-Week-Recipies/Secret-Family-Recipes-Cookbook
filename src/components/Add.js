import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import NavBar from './NavBar';
import { useHistory } from 'react-router';
import { axiosWithAuth } from '../helper/axiosWithAuth';


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
    #addImg {

    display: none;
    }
}

@media (min-width: 400px) {
    #addImg {
    display: none;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 40vh;
    #addImg {
        display: none;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #addImg {
        display: none;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 40vw;
    height: 100vh;
    #addImg {
            background-size: 600px;
            display: initial;
        }  
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #addImg {
            background-size: 700px;
          
        }
}

@media (min-width: 1900px) {
    #addImg {
            background-size: 1000px;
        }
}

    `

const AddDiv = styled.div`
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

const Add = () => {


    const initialValues = {
        title: '',
        source: '',
        ingredients: '',
        instructions: '',
        category: '',
    }
    const [newRecipe, setRecipe] = useState(initialValues);

    const history = useHistory()

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setRecipe({ ...newRecipe, [name]: value });
    }

    const addHandler = e => {
        e.preventDefault();
        // axios call to add a new item

        axiosWithAuth()
            .post("https://secret-family-recipes2021.herokuapp.com/api/recipes", newRecipe)
            .then((res) => {
                setRecipe(initialValues)
                history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            });
    }

    let nav = {
        logOut: true,
        dashboard: true
    }

    return (
        <div className="container">
            <Background><div id='addImg'></div></Background>
            <AddDiv>
                <NavBar display={nav} />
                <h2>Add a New Recipe:</h2>
                <form onSubmit={addHandler}>
                    <label>
                        <input type='text' name='title' value={newRecipe.title} onChange={changeHandler} placeholder='Title:' />
                    </label>
                    <label>
                        <input type='text' name='source' value={newRecipe.source} onChange={changeHandler} placeholder='Source:' />
                    </label>
                    <label>
                        <input type='text' name='ingredients' value={newRecipe.ingredients} onChange={changeHandler} placeholder='Ingredients:' />
                    </label>
                    <label>
                        <input type='text' name='category' value={newRecipe.category} onChange={changeHandler} placeholder='Category:' />
                    </label>
                    <label>
                        <textarea type='text' id="addTextArea" name='instructions' value={newRecipe.instructions} onChange={changeHandler} placeholder='Instructions:' />
                    </label>
                    <button>Add</button>
                </form>
            </AddDiv>
        </div>
    )
}

export default Add;