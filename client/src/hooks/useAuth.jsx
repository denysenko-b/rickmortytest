import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userAuthSlice";

const useAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = () => {
            fetch(`${import.meta.env.VITE_API_URL}/auth/login/success`, {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    dispatch(login(resObject.user));
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);
};

export default useAuth;
