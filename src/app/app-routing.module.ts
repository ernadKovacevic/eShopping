import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './components/container/container.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
//{path: "" , redirectTo : "Home", pathMatch : "full"},
{path: "" , component : ContainerComponent},
{path: 'Home',  component : ContainerComponent},
{path: 'Products', component : ProductsComponent},
{path: 'About', component : AboutComponent},
{path: 'Contact', component: ContactComponent},
{path: 'Cart', component: CartComponent},
{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
