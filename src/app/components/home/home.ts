import { Component } from '@angular/core';
import { Header } from './header/header';
import { CatNavigation } from './cat-navigation/cat-navigation';
import { SideNavbar } from "./side-navbar/side-navbar";
import { Products } from "../products/products";

@Component({
  selector: 'app-home',
  imports: [Header, CatNavigation, SideNavbar, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
