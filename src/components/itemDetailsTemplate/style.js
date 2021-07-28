import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    paper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    contenedor: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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

    },
    endBuy: {
      textAlign: "center",
      border: "1px solid rgb(242, 146, 9)",
      color: "rgb(242, 146, 9)",
      borderRadius: "0",
      width: "80%",
      '&:hover': {
          color: "#000",
          backgroundColor: "rgb(242, 146, 9)",
          border: "1px solid rgb(242, 146, 9)"
      }
    }
  }));

  export {useStyles};