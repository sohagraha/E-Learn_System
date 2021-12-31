import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    color: "#5B6A72",
    backgroundColor: "white",
    fontFamily: "popins",
    fontSize: "14px",
    lineHeight: "21px",
  },
  serach: {
    border: "1px solid #C6C6C6",
    borderRadius: "40px",
    width: "270px",
    height: "20px",
    margin: "7px",
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
  hints: {
    width: "100%",
    padding: "11px 15px",
  },
  signin: {
    color: "#5B6A72",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    gap: "10px",
  },
  signinbtn: {
    backgroundColor: "#F2F2F2",
    width: "64px",
    height: "30px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    width: "77px",
    height: "30px",
    borderRadius: "6px",
    color: "#EA5252 !important",
    display: "flex",
    backgroundColor: "#FFF1F1 !important",
    alignItems: "center",
    fontSize: "14px",
    justifyContent: "center",
  },
  menubutton: {
    padding: "0 35px",
  },
});
