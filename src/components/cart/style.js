import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
      backgroundColor: "#000",
      padding: "2rem 0rem 0rem 3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingBottom: "2rem",
      height: "120vh"

    },
    box1: {
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

    },
    box2: {
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
    },
    ebox: {
      display: "flex !important",
    },
    box: {
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0rem 1rem 0rem 1rem",
    },
    p: {
      color: 'rgb(242, 146, 9)',
      fontFamily : 'Bebas Neue',
      fontSize: "5rem",
      textAlign: 'center',
    },
    b:{
      color: 'rgb(242, 146, 9)',
      fontFamily : 'Bebas Neue',
      fontSize: "2rem",
      textAlign: 'center'
    },
    inputBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minWidth: '100%',
    },
    input: {
      minWidth: '100%',
    }
    
  }));

  export {useStyles};