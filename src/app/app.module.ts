import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './screens/home/home.component';
import { CatalogComponent } from './screens/catalog/catalog.component';
import { ItemDetailsComponent } from './screens/item-details/item-details.component';
import { WishListComponent } from './screens/wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    HomeComponent,
    CatalogComponent,
    ItemDetailsComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
