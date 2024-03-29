import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StorePage } from './store.page';
import { DappsPageModule } from './main/dapps/dapps.module';
import { DappDetailPageModule } from './main/dapps/dapp-detail/dapp-detail.module';
import { CategoriesPageModule } from './main/categories/categories.module';
import { CategoryTypePageModule } from './main/categories/category-type/category-type.module';
import { SearchPageModule } from './main/search/search.module';

const routes: Routes = [
  {
    path: 'tabs', // Bottom Tab Navigation
    component: StorePage,
    children: [
      // 1st Tab
      {
        path: 'dapps',
        children: [
          {
            path: '',
            loadChildren: () => DappsPageModule
          },
          {
            path: ':dappId',
            loadChildren: () => DappDetailPageModule
          }
        ]
      },
      // 2nd Tab
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => CategoriesPageModule
          },
          {
            path: ':categoryType',
            loadChildren: () => CategoryTypePageModule
          }
        ]
      },
      // 3rd Tab
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => SearchPageModule
          },
        ]
      },
       //  Default Tab
      {
        path: '',
        redirectTo: '/store/tabs/dapps',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/store/tabs/dapps',
    pathMatch: 'full'
  },
  { path: 'categories', loadChildren: () => CategoriesPageModule },
  { path: 'category-type', loadChildren: () => CategoryTypePageModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule {}
