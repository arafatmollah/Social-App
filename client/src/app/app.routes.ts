import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MemberList } from '../features/members/member-list/member-list';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { Message } from '../features/members/message/message';

export const routes: Routes = [
    {path:'', Component: HomeComponent},
    {path:'/member-list', component: MemberList},
    {path:'/member-detail/:id', component: MemberDetailed},
    {path:'/message', component:Message}
];
