import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      height: '100vh',

    },
    p: {
      color: 'rgb(242, 146, 9)',
      fontFamily : 'Bebas Neue',
      fontSize: "5rem",
      textAlign: 'center'
    }
  }));

  export {useStyles};