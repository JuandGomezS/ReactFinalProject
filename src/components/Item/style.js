import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: '#000',
      color: 'rgb(242, 146, 9)',
      border: '1px solid rgb(242, 146, 9)',
      borderRadius: "0",     
    },
    headerTitle: {
      fontWeight: "bold",
      fontFamily: 'Bebas Neue',
      textAlign: "center",
      fontSize: "2rem",
    },
    media: {
      height: 0,
      paddingTop: "60%", // 16:9
      border: "1px solid rgb(242, 146, 9)",
    },
    price: {
      color: 'rgb(242, 146, 9)',
      fontSize: "1.8rem",
      fontWeight: "bold",
      paddingRight: "5rem", 
      fontFamily: 'Bebas Neue',
      
    },
    iconContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    icon: {
      color: 'rgb(242, 146, 9)',
      borderRadius: "0%",
      '&:hover': {        
        color: '#000',
        backgroundColor: 'rgb(242, 146, 9)',
      }
    },    
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
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