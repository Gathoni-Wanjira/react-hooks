import React ,{useContext} from "react";
import { LoginContext } from "./App";

const SinglePost = () => {
   const Login = useContext(LoginContext);
   console.log(Login);
    return(
        <h3> SinglePost </h3>

    );
};

export default SinglePost;