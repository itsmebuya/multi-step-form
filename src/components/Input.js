const Input = (props) => {
    const { label, type, onChange, value, name } = props;

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-[#334155]">{label}<span className="text-red-500">*</span></p>
            {type === "file" ? <input name={name} value={value} onChange={onChange} placeholder={label} type={type} className="p-3" required accept="image/*" /> : <input placeholder={label} type={type} className="p-3" required onChange={onChange} />}
        </div>
    )
}
export default Input