import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    color: "#645A53",
  },
  top: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    paddingLeft: "12px",
  },
  linktxt: {
    fontFamily: "Poppins",
    textTransform: "none",
  },
  contains: {
    backgroundColor: "#EEE",
    padding:"10px"
  },
  banner: {
    objectFit: "cover",
    width: "100%",
    height: "305px",
    marginBottom: "25px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },

  container: {
    padding: "10px 5%",
    width: "100%",
    margin: 0,
    paddingBottom: "15px",
  },
  icon: {
    marginRight: "20px",
  },

  instructor: {
    paddingBottom: "100px",
  },
});
