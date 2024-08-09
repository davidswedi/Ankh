import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PostHomeComponent } from './components/posts/post-home/post-home.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { PostDetailComponent } from './components/home/blog/post-detail/post-detail.component';
import { HomeBlogComponent } from './components/home/blog/home-blog/home-blog.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';

const routeConfig: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    title: 'Login',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign up',
  },
  {
    path: '',
    component: BlogComponent,
    title: 'Blog',
    children: [
      {
        path: 'home-blog',
        component: HomeBlogComponent,
        title: 'Home',
      },
      {
        path: 'post-detail/:id',
        component: PostDetailComponent,
        title: 'Posts',
      },
      {
        path: '',
        redirectTo: 'home-blog',
        pathMatch: 'full',
      },
    ],
  },
];

export default routeConfig;
