const Input = (props) => {
    const {label, type} = props;

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#334155]">{label}<span className="text-red-500">*</span></p>
            <input placeholder={label} className="p-3"/>
        </div>
    )
}
export default Input