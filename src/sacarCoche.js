
const sacarCoches = (props) => {

    return (<>
        <h1>{props.color}</h1>
        <p>Tiene {props.ruedas} ruedas, y mide {props.longitud}x{props.altura}</p>
        </>
    )

}

export default sacarCoches;