import { NgModule } from "@angular/core";

import {RouterModule} from '@angular/router';




import { ProductDetailGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list.component";
import { ProductFilterPipe } from "./product-filter.pipe";

import { ProductDetailComponent } from "./product-detail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
    ],
    imports: [
       RouterModule.forChild([
    {path:'products',component:ProductListComponent},
    {path:'product/:id',
    canActivate:[ProductDetailGuard],
    component:ProductDetailComponent},
    ]),
    SharedModule
  ],
  providers:[ProductService,ProductDetailGuard],
    
})

export class ProductModule{}