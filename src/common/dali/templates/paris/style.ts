import { getStyleSheet } from "../../common/util/Util";
import Theme from "../../model/theme/Theme";

const common = {
    section: {
        margin: "10px 0px",
        width: "100%"
    },
    sectionTitle: {
        fontSize: "36px",
        fontWeight: "900",
        borderBottom: "2px solid currentColor"
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

const left = (theme?: Theme) => ({
    leftColumn: {
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "32px",
        gridRow: "1 / 2",
    },
    photo: {
        height: "300px",
        borderRadius: "50%",
        border: `15px solid ${theme?.lightColor ?? "#FE8D75"}`,
    },
});

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

const header = (theme?: Theme) => ({
    background: theme?.mainColor ?? "#E22800",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "32px",
    gridRow: "1 / 2",
});

const body = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
};

const style = (theme?: Theme) => getStyleSheet({
    resume: {
        width: "1240px",
        height: "1754px",
        border: "1px solid black",
        display: "grid",
        gridTemplateRows: "repeat(2, 1fr)",
        fontFamily: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
    },
    header: header(theme),
    body,
    ...common,
    ...left(theme),
    ...right,
});

export default style;