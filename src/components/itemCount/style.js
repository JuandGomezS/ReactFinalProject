import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    counterInput: {
      textAlign: "center",
      border: "2px solid rgb(242, 146, 9)",
      backgroundColor: "#000",
      color: "rgb(242, 146, 9)",
      fontSize: "1.2rem",
      fontWeight: "bold",
      '&:hover': {
        border: "2px solid rgb(242, 146, 9)"
    }
    },
    button1: {
      textAlign: "center",
      border: "1px solid rgb(242, 146, 9)",
      borderRadius: "0",
      color: "#000",
      fontSize: "1.2rem",
      fontweight: "bold",
      backgroundColor: "rgb(242, 146, 9)",
      '&:hover': {
          color: "#000",
          backgroundColor: "rgb(242, 146, 9)",
          border: "1px solid rgb(242, 146, 9)"
      }
    },
    button2: {
      textAlign: "center",
      border: "1px solid rgb(242, 146, 9)",
      borderRadius: "0",
      color: "#000",
      fontSize: "1.2rem",
      fontWeight: "bold",
      backgroundColor: "rgb(242, 146, 9)",
      '&:hover': {
          color: "#000",
          backgroundColor: "rgb(242, 146, 9)",
          border: "1px solid rgb(242, 146, 9)"
      }
    },
    pushCartButton: {
      textAlign: "center",
      border: "1px solid rgb(242, 146, 9)",
      color: "rgb(242, 146, 9)",
      borderRadius: "0",
      '&:hover': {
          color: "#000",
          backgroundColor: "rgb(242, 146, 9)",
          border: "1px solid rgb(242, 146, 9)"
      }
    }
    
  }));

  export{ useStyles};