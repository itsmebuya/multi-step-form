const Input = (props) => {
    const {label, type} = props;

    return (
        <div>
            <p >{label}<span className="text-red-500">*</span></p>
            <input placeholder={label} />
        </div>
    )
}
export default Input