/* eslint-disable */
import { getStyleSheet } from "app/util/Util"

const common = {
    section: {
        margin: "10px 0px",
        width: "100%"
    },
    sectionTitle: {
        fontSize: "36px",
        fontWeight: "900",
        textDecoration: "underline"
    },
    sectionItem: {
        margin: "6px 0px"
    },
    sectionItemTitle: {
        fontSize: "24px",
        fontWeight: "600",
    },
    sectionItemValue: {
        fontSize: "20px",
    },
};

const left = {
    leftColumn: {
        background: "#E22800",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
    },
    photo: {
        height: "300px",
        borderRadius: "50%",
        border: "15px solid #FE8D75"
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
        fontSize: "35px",
        fontWeight: "bold"
    },
    professionalSummary: {
        fontSize: "26px",
        textAlign: "justify"
    },
};

export const style1 = getStyleSheet({
    resume: {
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
