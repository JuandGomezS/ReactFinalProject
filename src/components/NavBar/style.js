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
    backgroundColor: '#000',
    color: 'rgb(242, 146, 9)',
    borderRadius: '0',
    fontFamily: 'Bebas Neue',
    '&:hover': {
      borderBottom: '1px solid rgb(242, 146, 9)',
      backgroundColor: '#000',
    },
  },
  ButtonC: {
    marginRight: '0rem',
    marginTop: '0rem',
    fontSize: '1.2rem',
    maxHeight: '2rem',
    backgroundColor: '#000',
    color: 'rgb(242, 146, 9)',
    borderRadius: '0',
    fontFamily: 'Bebas Neue !important',
    '&:hover': {
      borderBottom: '1px solid rgb(242, 146, 9) !important',
      backgroundColor: '#000 !important',
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