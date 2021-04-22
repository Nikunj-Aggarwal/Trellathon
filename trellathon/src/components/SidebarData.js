import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title : 'Trending',
        path : '/trending',
        icon : <BiIcons.BiTrendingUp />,
        className: 'nav-text'
    },
    {
        title : 'Dashboard',
        path : '/dashboard',
        icon : <AiIcons.AiOutlineDashboard />,
        className: 'nav-text'
    },
]