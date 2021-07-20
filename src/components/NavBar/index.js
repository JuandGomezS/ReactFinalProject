import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CartWidget from '../CartWidget';
import {useStyles} from './style';
import Typography from "@material-ui/core/Typography";
import './style.css';


export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.AppBar}>
				<Toolbar className={classes.Toolbar}>
					<Typography variant="h1" >
						RAVEN ART
					</Typography>
					<Button color="inherit" className={classes.Button}>Inicio</Button>
					<Button color="inherit" className={classes.Button}>Favoritos</Button>
					<Button color="inherit" className={classes.Button}>Mis Compras</Button>
					<Button color="inherit" className={classes.Button}>
						<CartWidget />
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
