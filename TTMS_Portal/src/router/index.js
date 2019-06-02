import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file)
  }
}

export default new Router({
  routes: [
    route("/Login",'/Login',"Login"),
    // /login路径，路由到登录组件
    {
      path:"/", // 根路径，路由到 Layout组件
      component: () => import('../pages/Layout'),
      redirect:"/index/dashboard",
      children:[ // 其它所有组件都是 Layout的子组件
        route("/index/dashboard","/Dashboard","Dashboard"),
        ///#后面的路径index/dashboard   对应带pages/producemanage/group/groupmanage
        route("/news/notifymanage/notifymanage",'/news/notifymanage/notifymanage',"NotifyManage"),
        route("/producemanage/group/groupmanage",'/producemanage/group/groupmanage',"GroupManage"),
        route("/producemanage/project/projectinfomanage",'/producemanage/project/projectinfomanage',"ProjectInfoManag"),
        route("/producemanage/product/productlist",'/producemanage/product/productlist',"ProductList"),
        route("/TourismInformation",'/TourismInformation',"TourismInformation"),
        route("/InventoryDistribution",'/InventoryDistribution',"InventoryDistribution"),
        route("/appendix",'/appendix',"appendix"),
        route("/DreferentialPolicy",'/DreferentialPolicy',"DreferentialPolicy"),
        route("/InfoPanel",'/InfoPanel',"InfoPanel"),
        route("/ProductClassify",'/ProductClassify',"ProductClassify"),
        route("/producemanage/product/createproduct",'/producemanage/product/createproduct',"CreateProduct"),
        route("/sysmanage/userauth/RoleInfoManage",'/sysmanage/userauth/RoleInfoManage',"RoleInfoManage"),
        route("/sysmanage/userauth/usermanage",'/sysmanage/userauth/usermanage',"UserManage"),
        route("/RouteSetting",'/RouteSetting',"RouteSetting")
      ]
    }
  ]
})
// /*注册页面路由*/
// var router =  new Router({
//   routes: [
//     route("/Layout",'/Layout',"liyunfei"),
// 		// /login路径，路由到登录组件
// 		route("/Login",'/Login',"Login"),
// 		route("/InfoManage",'/InfoManage',"InfoManage"),
// 		route("/City",'/City',"City"),
// 		route("/ChannelManage",'/ChannelManage',"ChannelManage"),
// 		route("/OrganizeManage",'/OrganizeManage',"OrganizeManage"),
// 		route("/ProductList",'/ProductList',"ProductList"),
// 		route("/ProInfoManage",'/ProInfoManage',"ProInfoManage"),
// 		route("/addProject",'/addProject',"addProject"),
// 		route("/UserInfoManage",'/UserInfoManage',"UserInfoManage"),
// 		route("/RoleInfoManage",'/RoleInfoManage',"RoleInfoManage"),
// 		route("/addRole",'/addRole',"addRole"),
// 		route("/TeamNumManage",'/TeamNumManage',"TeamNumManage"),
// 		route("/CreateProduct",'/CreateProduct',"CreateProduct"),
//     /*    {
//           path:"/", // 根路径，路由到 Layout组件
//           component: () => import('../pages/Layout'),
//           redirect:"/index/dashboard",
//           children:[ // 其它所有组件都是 Layout的子组件
//             route("/index/dashboard","/Dashboard","Dashboard"),
//             route("/item/category",'/item/Category',"Category"),
//             route("/item/brand",'/item/Brand',"Brand"),
//             route("/item/list",'/item/Goods',"Goods"),
//             route("/item/specification",'/item/specification/Specification',"Specification"),
//             route("/user/statistics",'/item/Statistics',"Statistics"),
//             route("/trade/promotion",'/trade/Promotion',"Promotion")
//           ]
//         }*/
//   ]
// })

