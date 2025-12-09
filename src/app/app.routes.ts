import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { Cart } from './components/home/cart/cart';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: '**',
        component: NotFound
    }
];
