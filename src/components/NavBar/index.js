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
import { useCartContext } from '../../cartContext';
import './style.css';


export default function NavBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const {cartQty } = useCartContext();

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
					   <Link to='/' style={{ textDecoration: 'none', color: 'rgb(242, 146, 9)' }}>RAVEN ART</Link>
					</Typography>
					
					<Link to='/'><Button color="inherit" className={classes.Button}>Inicio</Button></Link>
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
						<Link to='/category/est' style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} >
							<MenuItem className={classes.ButtonC} onClick={handleClose}>ESTAMPADOS</MenuItem>
						</Link>
						<Link to='/category/pho' style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>
							<MenuItem className={classes.ButtonC} onClick={handleClose}>FOTOGRAFÍA</MenuItem>
						</Link>
						<Link to='/category/vid' style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>
							<MenuItem className={classes.ButtonC} onClick={handleClose}>VIDEO</MenuItem>
						</Link>
						<Link to='/category/ad' style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>
							<MenuItem className={classes.ButtonC} onClick={handleClose}>PUBLICIDAD</MenuItem>
						</Link>
					</Menu>
					
					<Link to='/cart'>
						<Button color="inherit" className={classes.Button}>
							<CartWidget/>

							<div className={classes.Quant}>
								{cartQty}
							</div>
						</Button>
				    </Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
