import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  users: [],
  },
  getters:{
	  users: state => state.users.results,
	  male: state => state.users.results.filter(user => user.gender === "male"),
	  female: state => state.users.results.filter(user => user.gender === "female"),
  },
  mutations: {
	  SET_USERS(state, users){
		  state.users = users;
	  },
  },
  actions: {
	  setUsers(context, users){
		  context.commit("SET_USERS", users);
	  },
  }
})
