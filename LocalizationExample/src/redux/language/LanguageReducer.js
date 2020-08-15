import I18n from '../../i18n';

const initialState = "en"

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            I18n.locale=action.payload
            return action.payload
        default:
            return state
    }
}

export default languageReducer;