import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { PayeelistComponent } from './components/payeelist/payeelist.component';
import { RequestsComponent } from './components/requests/requests.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AdminComponent } from './components/admin/admin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    TransactionsComponent,
    PayeelistComponent,
    RequestsComponent,
    AdminComponent,
    AdmindashboardComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonToggleModule,
    MatTooltipModule
  ],
  providers: [LoginService, AuthGuard, {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
