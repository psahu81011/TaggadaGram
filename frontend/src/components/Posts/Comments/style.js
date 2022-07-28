import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    border:{
        border:'1px solid blue',
        borderRadius:'5px',
        width:'100%',
    },
    comment:{
        margin:theme.spacing(0,0,0,3)
    },
    username:{
        display:'flex',
        direction:'row',
        padding:theme.spacing(1,2,0,2),
    },
    commenthead:{
        // padding:theme.spacing(1),
        color:'blue',
        fontWeight:'700',
        fontSize:theme.spacing(1.9)
    },
    time:{
        padding:theme.spacing(0,0,0,1),
        lineHeight:'2',
    }
}));