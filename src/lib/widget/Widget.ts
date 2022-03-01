interface Widget<P> {
    type: string;
    props: P;
    children?: Widget<any>[];
}

export default Widget;