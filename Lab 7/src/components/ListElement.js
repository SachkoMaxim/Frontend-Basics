function ListElements( props ) {
    return (
        <li 
            id={props.id || undefined}
            style={props.style}
            onClick={props.onClick}
        >
            {props.text}
        </li>
    );
}

export default ListElements;
