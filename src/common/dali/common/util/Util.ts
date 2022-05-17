type Style = { [key: string]: string };
type StyleSheet = { [key: string]: Style };

const isUpperCase = (letter: string): boolean => letter === letter.toUpperCase();

export const camelCaseToKebabCase = (camelCase: string): string => camelCase.split('').map(letter => isUpperCase(letter) ? `-${letter.toLowerCase()}` : letter).join('');

export const kebabCaseToCamelCase = (kebabCase: string): string => {
    const splitted = kebabCase.split('');
    return splitted.map((letter, i) => letter === '-' ? splitted[i + 1].toUpperCase() : splitted[i - 1] === '-' ? '' : letter).join('');
};

export const jsStyleToCssStyle = (jsStyle: Style): [string, string][] => Object.entries(jsStyle).map(([key, value]) => (
    [camelCaseToKebabCase(key), value]
));

export const getStyle = (jsStyle: Style): string => jsStyleToCssStyle(jsStyle).map((declaration) => `${declaration[0]}:${declaration[1]}`).join("; ");

export const getStyleSheet = (sheet: StyleSheet): { [key: string]: string } => Object.entries(sheet).reduce((acc, val) => ({
    ...acc,
    [val[0]]: getStyle(val[1])
}), {})