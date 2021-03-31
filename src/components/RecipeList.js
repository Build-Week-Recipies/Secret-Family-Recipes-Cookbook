import React from 'react'
import { Link } from 'react-router-dom';
import data from '../dummyData/data'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};


const useStyles = makeStyles((theme) => ({


    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        border: 0,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


const RecipeList = () => {
    //axios GET when component renders

    const classes = useStyles();

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div id="list">
            <div id="searchDiv">
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search"
                        id="search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" onClick={handleSearch} className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {data.map(
                (recipe, i) => {
                    return (<Link to="recipe/1" className="listUnit" key={i}>
                        <div>
                            <h5>{recipe.title}</h5>
                            <p>Instructions: {truncate(recipe.instructions, 100)}</p>
                            <p>By: {recipe.source}</p>
                            <p>Category: {recipe.category}</p>
                        </div>
                    </Link>)
                })}
        </div>
    )

}

export default RecipeList;