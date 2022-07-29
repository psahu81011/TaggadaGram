import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    createPost: {
        padding: theme.spacing(1),
    },
    text: {
        padding: theme.spacing(1, 1, 1, 0),
        textAlign: "center",
        marginLeft: theme.spacing(1),
    },
    fileBase: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    submit: {
        //marginLeft: theme.spacing(30),
        margin: theme.spacing(1),
        width: 50,
    },
}));
