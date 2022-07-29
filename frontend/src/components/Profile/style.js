import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { hover } from "@testing-library/user-event/dist/hover";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(5),
        backgroundColor: "black",
    },
    avatar: {
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: "center",

        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "50%", // Fix IE 11 issue.
        height: "100%",
        padding: 2,
        direction: "flex",
        marginTop: theme.spacing(0),

        backgroundColor: "black",
    },
    button: {
        "&:hover": {
            backgroundColor: "#beee33",
            boxShadow: "none",
        },

        backgroundColor: "#e3eb90",
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(1),
        backgroundColor: "white",
    },

    button1: {
        "&:hover": {
            backgroundColor: "#beee33",
            boxShadow: "none",
        },

        backgroundColor: "cyan",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        margin: theme.spacing(),
    },
    typo: {
        backgroundColor: "cyan",
        justifyContent: "center",
        display: "flex",
        marginTop: 50,
        marginBottom: 10,
        padding: theme.spacing(1),
    },
    typo1: {
        justifyContent: "center",
        backgroundColor: "white",
        paddingLeft: theme.spacing(30),
        paddingRight: theme.spacing(30),
        paddingTop: theme.spacing(1),
        paddingButton: theme.spacing(1),
    },
    btn: {
        marginLeft: 1200,
        marginTop: 0,
        justifyContent: "center",
    },
    grd: {
        display: "flex",
    },
}));
