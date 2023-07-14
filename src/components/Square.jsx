
export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `flex justify-center items-center cursor-pointer text-[70px] pb-4 w-20 h-20 border-2 rounded-xl ${isSelected ? 'bg-white border-white text-black transition duration-300' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}
