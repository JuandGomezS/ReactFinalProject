import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CartWidget from '../CartWidget';
import {useStyles} from './style';
import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import './style.css';


export default function NavBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
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
					<Button aria-controls="simple-menu" className={classes.Button} aria-haspopup="true" onClick={handleClick}>
						Categorias
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}						
					>
						<Link to='/category/est'><MenuItem className={classes.Button} onClick={handleClose}>estampados</MenuItem></Link>
						<MenuItem className={classes.Button} onClick={handleClose}>FOTOGRAFÍA</MenuItem>
						<MenuItem className={classes.Button} onClick={handleClose}>VIDEO</MenuItem>
						<MenuItem className={classes.Button} onClick={handleClose}>PUBLICIDAD</MenuItem>
					</Menu>
					
					<Button color="inherit" className={classes.Button}><CartWidget /></Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
