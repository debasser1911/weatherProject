import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
	return (
		<div>
			<Link to="/countries">Countries page</Link>
		</div>
	);
};

export default Header;
