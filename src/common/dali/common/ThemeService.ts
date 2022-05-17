import Theme from "../model/theme/Theme";

class ThemeService {
    private static themes: {[name: string]: Theme} = {
        primary: {
            mainColor: "red",
            secondaryColor: "#00bcd4",
        }
    };

    static getTheme(name: string): Theme {
        return ThemeService.themes[name];
    }
}

export default ThemeService;