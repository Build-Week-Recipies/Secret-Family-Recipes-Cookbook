import React, { useEffect } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import RecipeList from './RecipeList'
import { fetchData } from '../store/actions';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

let nav = {
    logOut: true,
    add: true,
    home: true,
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 35vw;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    color: white;

@media (min-width: 100px) {
    position: absolute;
    display: none; 
    width: 100vw;
    height: 50vh;
    #bgImg {

    background-size: 400px;
    }
}

@media (min-width: 400px) {
    #bgImg {
    background-size: 550px;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 35vh;
    #bgImg {
        background-size: 750px;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #bgImg {
        background-size: 1025px;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    display: flex;
    position: fixed;
    width: 35vw;
    height: 100vh;
    #bgImg {
            background-size: 500px;
        }
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #bgImg {
            background-size: 600px;
        }
}

@media (min-width: 1900px) {
    #bgImg {
            background-size: 1000px;
        }
}

    `

const DashboardDiv = styled.div`
    #list {
        position: absolute;
        width: 65vw;
        margin: 0;
        padding: 20px 16vw;
        left: 32vw;
        box-sizing: border-box;
    }

    .listUnit div{
        background-color: #fffaf0;
        border-radius: 3px;
        padding: 15px;
        margin-bottom: 20px;
        box-sizing: border-box;
        border: 1px solid #f5d390;
        
        .primary {
            
        }
        .secondary {
            margin: 0;
            font-size: 1.2rem; 
        }
    }

    #searchDiv {
        display: flex;
        justify-content:center;
        width: 100%;

    }

    #search {
        border: none;
    }

    .listUnit {
        color: black;
    }
    @media (max-width: 800px) {
        #list {
            width: 90vw;
            left: 0;
        }
    }
    `

const Dashboard = (props) => {
    const { fetchData } = props;
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <DashboardDiv>
            {
                props.isLoading ? <Loader
                    className={"loader"}
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                /> :
                    <div>
                        <NavBar display={nav} />
                        <Background ><div id="bgImg"></div><p></p></Background>
                        <RecipeList recipes={props.recipes} />
                    </div>

            }
        </DashboardDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        recipes: state.recipes,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchData })(Dashboard);