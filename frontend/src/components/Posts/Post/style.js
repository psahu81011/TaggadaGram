import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    username: {
        direction: "row",
    },
    card: {
        margin: theme.spacing(1),
    },
    likes: {
        display: "flex",
        flexDirection: "row",
    },
    likecount: {
        padding: theme.spacing(0.2, 1.5),
        cursor: "pointer",
        fontWeight: "700",
    },
    CardActions: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(2, 4),
    },
    comments: {
        display: "none",
    },
}));
