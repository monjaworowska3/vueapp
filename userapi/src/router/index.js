import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from "../views/Users"
import Male from "../views/Male"
import Female from "../views/Female"
import Search from "../views/Search"

Vue.use(VueRouter)

  const routes = [
	  {
		  path: "/",
		  component: Users,
	  },
	  {
		  path: "/male",
		  component: Male,
	  },
	  {
		  path: "/female",
		  component: Female,
	  },
	  {
		  path: "/search",
		  component: Search,
	  }
]

const router = new VueRouter({
  routes
})

export default router
