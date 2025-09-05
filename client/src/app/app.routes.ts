import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MemberList } from '../features/members/member-list/member-list';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { Message } from '../features/members/message/message';
import { Home } from '../features/home/home';
import { List } from '../features/list/list';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { Notfound } from '../shared/notfound/notfound';
import { ServerError } from '../shared/server-error/server-error';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MemberList },
      { path: 'member-detail/:id', component: MemberDetailed },
      { path: 'message', component: Message },
      { path: 'list', component: List },
    ],
  },
  {path:'errors', component: TestErrors},
  {path:'server-error', component: ServerError},
  {path:'**', component: Notfound}
];
