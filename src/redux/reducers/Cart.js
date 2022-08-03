const initialState = {
    loading: false,
    cart: [],
}

const Fetch = (state = initialState, action) => {
    switch (action.type) {
        case "CART_REQUEST":
            return { ...state, loading: true }
        case "CART_ERR":
            return { ...state, loading: false, cart: action.payload }
        case "GET_CART":
            return { ...state, loading: false, cart: action.payload }
        case "DEL_CART":
            return { ...state, loading: false, cart: [] }
        default:
            return state
    }
}

export default Fetch