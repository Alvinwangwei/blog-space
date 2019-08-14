const user = {
    state: {
        token: '123'
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token
        }
    },
    actions: {
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
            })
        }
    }
}

export default user