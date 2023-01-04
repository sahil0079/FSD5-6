

const Box = ({ value, handleBoxClicked }) => {
    return (
        <button
            className="board_box"
            onClick={handleBoxClicked}
        >
            {value}
        </button>
    )
}

export default Box