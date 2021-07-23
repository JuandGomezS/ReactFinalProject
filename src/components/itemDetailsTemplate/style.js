import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    paper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    rootDetails: {
      maxWidth: 500,
      maxHeight: "auto",
      backgroundColor: '#000',
      color: 'rgb(242, 146, 9)', 
      fontFamily: 'Bebas Neue',
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    }
  }));

  export {useStyles};