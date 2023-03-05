import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('./tabs/search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'country',
        loadChildren: () =>
          import('./tabs/country/country.module').then(
            (m) => m.CountryPageModule
          ),
      },
      {
        path: 'value',
        loadChildren: () =>
          import('./tabs/value/value.module').then((m) => m.ValuePageModule),
      },
      {
        path: 'year',
        loadChildren: () =>
          import('./tabs/year/year.module').then((m) => m.YearPageModule),
      },
      {
        path: 'found',
        loadChildren: () =>
          import('./tabs/found/found.module').then((m) => m.FoundPageModule),
      },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
