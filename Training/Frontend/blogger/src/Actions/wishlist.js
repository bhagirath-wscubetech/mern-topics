const toggleWishlist = (likes) => {
    return {
        type: "TOGGLE_WISHLIST",
        payload: likes
    }

}

export { toggleWishlist } //named export