import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ApiClientService } from './_services/api-client.service';
import { DishComponent } from './common/dish/dish.component';
import { DishesRepository } from './_services/dishes-repository.service';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatListModule} from '@angular/material/list';
import { IngredientsComponent } from './common/ingredients/ingredients.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderStateService } from './_services/order-state.service';
import { OrderComponent } from './order/order.component';
import { OrderGuard } from './_helpers/order.guard';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderInfoCardComponent } from './common/order/order-info-card/order-info-card.component';
import { PortionsComponent } from './common/order/order-info-card/portions/portions.component';
import { ClientInfoComponent } from './common/order/order-info-card/client-info/client-info.component';
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { RegistrationComponent } from './registration/registration.component';
import { MustMatchDirective } from "./_helpers/validators/must-match.directive";
import { OrderViewComponent } from './order-view/order-view.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HistoryComponent } from './history/history.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import {CdkTableModule} from '@angular/cdk/table';
import { OnlyForAdminDirective } from './only-for-admin.directive';
import { OnlyForClientDirective } from './only-for-client.directive';
import {SanitizeHtmlPipe} from "./_helpers/sanitize.html.pipe";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DishComponent,
    IngredientsComponent,
    OrderComponent,
    OrderListComponent,
    OrderInfoCardComponent,
    PortionsComponent,
    ClientInfoComponent,
    RegistrationComponent,
    MustMatchDirective,
    OrderViewComponent,
    AdminPageComponent,
    HistoryComponent,
    AddDishComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    FormsModule,
    CdkTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiClientService,
    DishesRepository,
    OrderStateService,
    OrderGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
