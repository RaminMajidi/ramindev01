const AppReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE': {
            return {
                ...state,
                language: action.payload
            }
        }
        case 'CHANGE_THEME': {
            return {
                ...state,
                theme: action.payload
            }
        }
        case 'TOGGLE_SETTING': {
            return {
                ...state,
                showSetting: !state.showSetting
            }
        }
    }
}

export default AppReducer