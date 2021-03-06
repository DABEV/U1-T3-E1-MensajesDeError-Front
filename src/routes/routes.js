import ErrorOne from "@/pages/ErrorOne.vue";
import ErrorTwo from "@/pages/ErrorTwo.vue";
import ErrorThree from "@/pages/ErrorThree.vue";

const routes = [
    
    {
        path: "/",
        component:() => import("@/pages/Layout/Landing.vue"),
        redirect: "/",
        children: [
            {
                path: "",
                name: "Landing",
                component:() => import("@/pages/Layout/Landing.vue") ,
            }
        ]

    },
    {
        path: "/",
        component: ErrorOne,
        redirect: "/error500",
        children: [
          {
            path: "error500",
            name: "Error 500",
            component: ErrorOne,
          },
        ]
      },
      {
        path: "*",
        component: ErrorTwo,
        redirect: "/error404",
        children: [
          {
            path: "error404",
            name: "Error 404",
            component: ErrorTwo,
          },
        ]
      },
      {
        path: "/",
        component: ErrorThree,
        redirect: "/error503",
        children: [
          {
            path: "error503",
            name: "Error 503",
            component: ErrorThree,
          },
        ]
      }, 
]

export default routes;