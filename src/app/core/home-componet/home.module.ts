import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponetComponent } from './home-componet.component';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { InfoPersonComponetComponent } from '../info-person-componet/info-person-componet.component';
import { ProductContainerComponent } from '../product-container/product-container.component';
import { ProductltemComponentComponent } from '../productltem-component/productltem-component.component';
import { FormsModule } from '@angular/forms';
import { RecordComponent } from '../record/record.component';

@NgModule({
  declarations: [
    HomeComponetComponent,
    HeaderComponentComponent,
    InfoPersonComponetComponent,
    ProductContainerComponent,
    ProductltemComponentComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HomeComponetComponent,
    HeaderComponentComponent,
    InfoPersonComponetComponent,
    ProductContainerComponent,
    ProductltemComponentComponent,
    RecordComponent
  ],
  providers: [],
})
export class HomeModule { }
