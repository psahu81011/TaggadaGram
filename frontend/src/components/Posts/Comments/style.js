import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    border: {
        marginTop: "2px",
        backgroundColor: "#eaeaea",
        borderRadius: "5px",
        width: "100%",
        padding: theme.spacing(1),
    },
    comment: {
        margin: theme.spacing(0, 0, 0, 3),
    },
    username: {
        display: "flex",
        direction: "row",
        padding: theme.spacing(1, 2, 0, 2),
    },
    commenthead: {
        // padding:theme.spacing(1),
        fontWeight: "700",
        fontSize: theme.spacing(1.9),
    },
    time: {
        padding: theme.spacing(0, 0, 0, 1),
        lineHeight: "2",
    },
}));
