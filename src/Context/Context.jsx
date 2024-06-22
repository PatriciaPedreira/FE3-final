import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

const OdontoContext = createContext();

const lsFav = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
    dentists: [],
    fav: lsFav,
    darkMode: false,
    dentist: {},
};

const Context = ({ children }) => {
    //Agregamos todos los estados globales
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch({ type: 'GET_DENTISTS', payload: response.data });
            })
            .catch(error => console.error(error));
    }, []);

    // Guardar los favoritos en localStorage cada vez que state.fav cambie
    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.fav));
    }, [state.fav]);

    
    const toggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };

    return (
        <OdontoContext.Provider value={{state, dispatch, toggleDarkMode}}>
            {children}
        </OdontoContext.Provider>
    );
};
export default Context;
export const useOdontoContext = () => {
    return useContext(OdontoContext);
}