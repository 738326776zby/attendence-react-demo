import PeopleAttendance from '../views/PeopleAttendance';

let routes = [
    {
      path: "/",
      component: PeopleAttendance,
      exact:true
    },
    {
        path: "/people-attendance",
        component: PeopleAttendance,
      
      }

    // {
    //   path: "/shop",
    //   component: Shop
    // },
    // {
    //   path: "/user",
    //   component: User,  
    //   routes:[   /*嵌套路由*/
    //     {
    //       path: "/user/",
    //       component: UserList
    //     },
    //     {
    //       path: "/user/add",
    //       component: UserAdd
    //     },
    //     {
    //       path: "/user/edit",
    //       component: UserEdit
    //     }
    //   ]
    // },
    // {
    //   path: "/news",
    //   component: News
    // }
];

export default routes;