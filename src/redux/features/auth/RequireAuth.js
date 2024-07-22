import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
const RequireAuth = ({ children }) => {
	// * initialize router
	const history = useHistory();
	const { isAuthenticated } = useSelector((state) => state.auth);
	useEffect(() => {
		// need is loading so that in the case one is not authenticated we dont display the page for some time then redirect them
		if (!isAuthenticated) {
			history.push("/login");
		}
	});

	return <>{children} </>;
};

export default RequireAuth;
