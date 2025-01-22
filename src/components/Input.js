const Input = (props) => {
    const {label, type} = props;

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#334155]">{label}<span className="text-red-500">*</span></p>
            {type==="file" ? <input placeholder={label} type={type} className="p-3" required accept="image/*" /> : <input placeholder={label} type={type} className="p-3" required />}
        </div>
    )
}
export default Input