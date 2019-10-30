import Home from "./components/Units/Units";
import Profile from "./components/User/Profile";
import AddUnit from "./components/Units/AddUnit";
import Layout from './pages/Layout.vue'
export const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        children: [
            { path: "home", name: "home", component: Home },
            { path: "profile", name: "profle", component: Profile },
            { path: "unit/add", name: "addUnit", component: AddUnit }
        ]
    }
];
