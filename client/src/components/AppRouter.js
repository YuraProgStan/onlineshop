import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/const';
import {Context} from '../index';
import {observer} from "mobx-react-lite";
import {Admin, Auth, Basket, DevicePage, Shop} from "../pages";

const AppRouter = observer(  () => {

    const {user} = useContext(Context);
    if(!user.isAuth) {
        return (
            <Routes>
                <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<Shop/>}/>
                <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Auth/>}/>}
                <Route key={REGISTRATION_ROUTE} path={REGISTRATION_ROUTE} element={<Auth/>}/>}
                <Route key={DEVICE_ROUTE} path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>}/>}
                <Route path={'*'} element={<Navigate to={SHOP_ROUTE}/>}/>
            </Routes>
        );
    }
    return(
        <Routes>
            <Route key={ADMIN_ROUTE} path={ADMIN_ROUTE} element={<Admin/>}/>
            <Route key={BASKET_ROUTE} path={BASKET_ROUTE} element={<Basket/>}/>}
            <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<Shop/>}/>
            <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Auth/>}/>}
            <Route key={REGISTRATION_ROUTE} path={REGISTRATION_ROUTE} element={<Auth/>}/>}
            <Route key={DEVICE_ROUTE} path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>}/>}
            <Route path={'*'} element={<Navigate to={SHOP_ROUTE}/>}/>
        </Routes>
    );
});

export default AppRouter;