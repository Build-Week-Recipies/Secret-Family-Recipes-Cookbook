import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../helper/axiosWithAuth';
import { fetchData } from "../store/actions"
import Loader from 'react-loader-spinner';



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

const RecipeDiv = styled.div`
    position: absolute;
    width: 40vw;
    margin: 0;
    padding: 20px;
    left: 40vw;
    top: 25%;
    box-sizing: border-box;
    display: initial;

    .primary {
        text-align: justify;
    }

    .secondary {
            margin: 0;
            font-size: 1.2rem;
        }

    #addTextArea {
        width: 216px;
        max-width: 350px;
        max-height: 200px;
    }
    #goToEdit {
        color: inherit;
    }

    .buttonContainer {
        margin-top: 30px;
        display: flex;
        justify-content: space-evenly;
        justify-items: space-evenly;
        width: 100%;
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
    position: absolute;
    width: 40vw;
    margin: 0 0 5vh 0;
    padding: 5vw 10vh;
    height: auto;
    min-height: 80vh;
    left: 40vw;
    top: 0vh;
    box-sizing: content-box;
    display: flex;
    
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    
}

@media (min-width: 1900px) {
    
}
`;

let nav = {
    logOut: true,
    dashboard: true
}


const Recipe = (props) => {
    const { fetchData } = props;
    const history = useHistory();
    const initFunct = () => {
        if (props.recipes === true) {
            return props.recipes.filter(recipe => recipe.id === parseInt(id))[0];
        } else {
            return {
                title: '',
                source: '',
                ingredients: '',
                instructions: '',
                category: '',
                id: 1
            }
        }
    };

    const { id } = useParams();
    const initializeRecipe = initFunct()
    const [currentRecipe, setCurrentRecipe] = useState(initializeRecipe)
    useEffect(() => {
        axiosWithAuth()
            .get("https://secret-family-recipes2021.herokuapp.com/api/recipes")
            .then(function (res) {
                setCurrentRecipe(res.data.filter(recipe => recipe.id === parseInt(id))[0])

            }).catch(function (err) {
                console.error(err);
            });

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const removeRecipe = () => {
        console.log('not disabled')
        axiosWithAuth()
            .delete(`https://secret-family-recipes2021.herokuapp.com/api/recipes/${id}`)
            .then((res) => {
                history.push('/dashboard')
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            {/* { props.isLoading ? setCurrentRecipe({
                title: 'How to make fluffy moist scrambled eggs',
                source: 'Tori Avey',
                ingredients: 'Many',
                instructions: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                category: 'Eggs',
                id: 2
            }) : setCurrentRecipe(props.recipes.filter(recipe => recipe.id === parseInt(id))[0])} */}
            { !props.recipes ? <Loader
                className={"loader"}
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            /> :
                <RecipeDiv>
                    <Background><div id='addImg'></div></Background>
                    <NavBar display={nav} />
                    <h5>{currentRecipe.title}</h5>
                    <p>Ingredients needed for this recipe: {currentRecipe.ingredients}</p>
                    <p className="primary">{currentRecipe.instructions}</p>
                    <p className="secondary">Category: {currentRecipe.category}</p>
                    <p className="secondary">By: {currentRecipe.source}</p>
                    <div className="buttonContainer">
                        <button>
                            <Link id="goToEdit" to={`/recipe/${id}/edit`}>
                                Edit
                        </Link>
                        </button>
                        <button onClick={removeRecipe}>Delete</button>
                    </div>
                </RecipeDiv>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { fetchData })(Recipe);