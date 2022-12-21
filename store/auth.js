export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  deleteToken(state) {
    state.token = null;
  },
}

export const actions = {
  login({commit}) {
    commit('setToken', 'tokenHash');
  },
  logout({commit}) {
    commit('deleteToken');
  },
}

export const getters = {
  hasToken: s => !!s.token,
}
