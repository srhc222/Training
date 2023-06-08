import { ItemDetailsComponent } from './screens/item-details/item-details.component';
import { HomeComponent } from './screens/home/home.component';
import { CatalogComponent } from './screens/catalog/catalog.component';
import { Catalog } from './data/pages-data';
import { catalog } from './data/catalog-data';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListComponent } from './screens/wish-list/wish-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'item-details', component: ItemDetailsComponent },
  { path: 'wishList', component: WishListComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
