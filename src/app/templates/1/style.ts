/* eslint-disable */
import { getStyleSheet } from "app/util/Util"

const common = {
    section: {
        margin: "10px 0px",
        width: "100%"
    },
    sectionTitle: {
        fontSize: "28px",
        fontWeight: "bolder",
        textDecoration: "underline"
    },
    sectionItem: {
        margin: "10px 0px"
    },
    sectionItemTitle: {
        fontSize: "22px",
        fontWeight: "bold",
    }
};

const left = {
    leftColumn: {
        background: "pink",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
    },
    photo: {
        height: "300px",
        borderRadius: "50%",
        border: "15px solid lightpink"
    },
};

const right = {
    rightColumn: {
        background: "white",
        padding: "32px",
        gridColumn: "2 / 4",
    },
    name: {
        fontSize: "70px",
    },
    wantedJobTitle: {
        fontSize: "30px"
    },
    professionalSummary: {
        fontSize: "16px",
        textAlign: "justify"
    },
};

const style = getStyleSheet({
    resume: {
        transform: "scale(0.75)",
        transformOrigin: "0 0",
        width: "1240px",
        height: "1754px",
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        fontFamily: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
    },
    ...common,
    ...left,
    ...right,
});

console.log(style)

export default style;