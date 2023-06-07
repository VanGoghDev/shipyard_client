export default {
    increment(state) {
        state.id++;
    },
    decrement(state) {
        state.id--;
    },
    posts(state, posts) {
        state.posts = posts
    }
}