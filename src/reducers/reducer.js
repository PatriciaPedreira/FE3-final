export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTS':
            return { ...state, dentists: action.payload };

        case 'ADD_FAV':
            return { ...state, fav: [...state.fav, action.payload] };

        case 'TOGGLE_DARK_MODE':
            return { ...state, darkMode: !state.darkMode };

        default:
            throw new Error("No se pudo modificar el estado.");
    }
};
