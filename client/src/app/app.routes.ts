import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MemberList } from '../features/members/member-list/member-list';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { Message } from '../features/members/message/message';
import { Home } from '../features/home/home';
import { List } from '../features/list/list';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'members', component: MemberList},
    {path:'member-detail/:id', component: MemberDetailed},
    {path:'message', component:Message},
    {path: 'list', component: List}
];
