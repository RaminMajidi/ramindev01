import { useReducer, createContext, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import AppReducer from "./AppReducer";

const AppContext = createContext()
const initilaState = {
    language: localStorage.getItem('language') || 'fa',
    theme: localStorage.getItem('theme') || 'light',
    showSetting: false
}

const AppProvider = ({ children }) => {
    const { i18n } = useTranslation()
    const [state, dispatch] = useReducer(AppReducer, initilaState)

    function changeLanguage(language) {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
    }
    function changeTheme(theme) {
        dispatch({ type: 'CHANGE_THEME', payload: theme })
    }
    function toggleSetting() {
        dispatch({ type: 'TOGGLE_SETTING' })
    }

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language)
    }, [state.language])
    useEffect(() => {
        localStorage.setItem('theme', state.theme)
    }, [state.theme])

    return (
        <AppContext.Provider value={{
            ...state,
            changeLanguage,
            changeTheme,
            toggleSetting
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider }