import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
    fontFamily: 'Bebas Neue',
    
	},
  AppBar: {
    minHeight: '3rem',
    backgroundColor: 'rgb(0, 0, 0)',
    borderBottom: '1px solid rgb(242, 146, 9)',
    boxShadow: 'none',
    fontFamily: 'Bebas Neue',
  },
	menuButton: {
		marginRight: theme.spacing(2),
	},
	Toolbar: {
		justifyContent: 'flex-end',

	},
  Button: {
    marginRight: '2rem',
    fontSize: '1.2rem',
    maxHeight: '2rem',

    color: 'rgb(242, 146, 9)',
    borderRadius: '0',
    '&:hover': {
      borderBottom: '1px solid rgb(242, 146, 9)',
    },
  },
  Quant:{
    color: '#000',
    fontSize: '0.7rem',
    top: '2px',
    minWidth: '1.2rem',
    display:'inline-block',
    position: 'absolute',

  },
}));

export{useStyles};