import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
    
	},
  AppBar: {
    minHeight: '3rem',
    backgroundColor: 'rgb(0, 0, 0)',
    borderBottom: '1px solid rgb(242, 146, 9)',
    boxShadow: 'none',
  },
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	Toolbar: {
		justifyContent: 'flex-end',

	},
  Button: {
    marginRight: '2rem',
    fontSize: '1rem',
    color: 'rgb(242, 146, 9)',
    borderRadius: '0',
    '&:hover': {
      borderBottom: '1px solid rgb(242, 146, 9)',
    },
  }
}));

export{useStyles};