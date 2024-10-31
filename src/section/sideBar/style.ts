import styled from "@emotion/styled";

export const Container =styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    flex:"1 1 200px",
    backgroundColor: "#f5f5f5",
    padding:16,
    fontFamily: "Arial, sans-serif",
    color: "#000000",
    boxSizing: "border-box",
    gap:16,
}) 

export const MenuWrapper =styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "auto",
    width: "100%",
    flex:"1 1 200px",
    backgroundColor: "#f5f5f5",
    paddingTop:16,
    fontFamily: "Arial, sans-serif",
    color: "#000000",
    boxSizing: "border-box",
    borderTop: "1px solid #bcbcbc",
    gap:8
}) 