import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ArticleCreatComponent } from './article-creat/article-creat.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserpanierComponent } from './userpanier/userpanier.component';
import { CheckComponent } from './check/check.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addarticles', component: ArticleCreatComponent},
  { path: 'detailarticle/:id', component:ArticleDetailComponent},
  { path: 'updatearticle/:id', component:ArticleUpdateComponent },
  { path: 'listearticle', component:ArticleListComponent},
  { path: 'menuJour', component: UsermenuComponent },
  { path: 'menupanier', component:UserpanierComponent},
  { path: 'check/:id', component:CheckComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
