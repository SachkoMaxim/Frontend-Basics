function Paragraph( props ) {
    return (
        <p className={props.className || undefined}>
            {props.text}
        </p>
    );
}

export default Paragraph;
