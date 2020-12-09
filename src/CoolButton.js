import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    buttonStyles: {
        margin: '20px 0',
        fontSize: cool => (cool ? '12px' : '18px'),
        color: "tomato",
        [theme.breakpoints.up('sm')]: {
            color: 'blue'
        }
    },
    buttonBackground: {
        backgroundColor: 'red'
    }

})
);

export default function Hook({color}){
    const classes = useStyles(color);
    return <Button variant="contained" className={classes.buttonStyles, classes.buttonBackground}>Props Button</Button>
}
