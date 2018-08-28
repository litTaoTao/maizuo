import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Myhead from '@/components/head/Myhead'
import Home from '@/components/pages/Home'
import Movie from '@/components/pages/Movie'
import Cinama from '@/components/pages/Cinama'
import My from '@/components/pages/My'
import Card from '@/components/pages/Card'
import Shop from '@/components/pages/Shop'
import Movielist from '@/components/pages/Movielist'
import Addr from '@/components/search/addr'
import Detail from '@/components/pages/detail'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
     redirect:{name:'home'}
    },
    {
    	path:'/myhead',
    	name:'myhead',
    	component:Myhead
    },
    {
    	path:'/home',
    	name:'home',
    	component:Home
    },
    {
    	path:'/movie',
    	name:'movie',
    	component:Movie,
    	children:[
    		{
    			path:':type?',
    			component:Movielist
    			
    		}
    	]
    		
    	
    
    },
    {
    	path:'/cinama',
    	name:'cinama',
    	component:Cinama
    },
    {
    	path:'/shop',
    	name:'shop',
    	component:Shop
    },
    {
    	path:'/card',
    	name:'card',
    	component:Card
    },
    {
    	path:'/my',
    	name:'my',
    	component:My
    },
    {
    	path:'/addr',
    	name:'addr',
    	component:Addr
    },
    {
    	path:'/detail/:id?',
    	component:Detail,
    	name:'detail',
    	props:true
    }
    
  ]
})
