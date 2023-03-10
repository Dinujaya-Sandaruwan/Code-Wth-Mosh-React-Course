const Like = ({ onClick, liked }) => {
	if (liked === true) {
		return (
			<i
				onClick={onClick}
				className="fa-solid fa-heart"
				style={{ cursor: "pointer" }}
			></i>
		);
	} else {
		return (
			<i
				onClick={onClick}
				className="fa-regular fa-heart"
				style={{ cursor: "pointer" }}
			></i>
		);
	}
};

export default Like;
