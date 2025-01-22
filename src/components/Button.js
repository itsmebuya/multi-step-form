const Button = (props) => {
    const { text, type, onClick, backClick } = props

    return (
        <button onClick={type === "back" ? backClick : onClick} className={`py-2.5 px-3 flex justify-center items-center rounded-md ${type == 'back' ? "bg-white text-[#202124] w-1/3 border border-[#CBD5E1]" : "bg-[#121316] text-white w-full"}`}>{text}</button>
    )
}
export default Button
