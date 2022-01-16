import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: theme.spacing(30),
    padinTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
