const initLikes = [];

const wishlistReducer = (likes = initLikes, action) => {
    let newLikes;
    switch (action.type) {
        case "TOGGLE_WISHLIST":
            newLikes = action.payload
            break;
        default:
            newLikes = likes
            break;
    }
    return newLikes;
}

export default wishlistReducer;