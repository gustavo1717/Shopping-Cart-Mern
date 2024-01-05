const navigationReducer = (state = {currentRoute: '/'}, action) => {
    if(action.type === 'NAVIGATE_TO') {
        return {currentRoute: action.payload };
    }
    return state;
}
export default navigationReducer