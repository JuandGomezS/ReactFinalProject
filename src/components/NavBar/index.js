import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CartWidget from '../CartWidget';
import {useStyles} from './style'


export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.AppBar}>
				<Toolbar className={classes.Toolbar}>
					<Button color="inherit" className={classes.Button}>Inicio</Button>
					<Button color="inherit" className={classes.Button}>Ofertas</Button>
					<Button color="inherit" className={classes.Button}>Mis Compras</Button>
					<Button color="inherit" className={classes.Button}>Login</Button>
					<Button color="inherit" className={classes.Button}>
						<CartWidget />
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
