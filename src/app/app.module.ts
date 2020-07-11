import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleCreatComponent } from './article-creat/article-creat.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserpanierComponent } from './userpanier/userpanier.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { CheckComponent } from './check/check.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    ArticleDetailComponent,
    ArticleCreatComponent,
    ArticleListComponent,
    ArticleUpdateComponent,
    UsermenuComponent,
    UserpanierComponent,
    ChekoutComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
