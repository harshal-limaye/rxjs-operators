import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferComponent } from './buffer/buffer.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EndWithComponent } from './end-with/end-with.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SkipLastComponent } from './skip-last/skip-last.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { SkipComponent } from './skip/skip.component';
import { StartWithComponent } from './start-with/start-with.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilUsecaseComponent } from './take-until-usecase/take-until-usecase.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'take', component: TakeComponent },
  { path: 'takeUntil', component: TakeUntilComponent },
  { path: 'takeUntilUseCase', component: TakeUntilUsecaseComponent },
  { path: 'takeLast', component: TakeLastComponent },
  { path: 'takeWhile', component: TakeWhileComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'skipWhile', component: SkipWhileComponent },
  { path: 'skipUntil', component: SkipUntilComponent },
  { path: 'skipLast', component: SkipLastComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'bufferCount', component: BufferCountComponent },
  { path: 'startWith', component: StartWithComponent },
  { path: 'endWith', component: EndWithComponent },
  { path: 'defaultIfEmpty', component: DefaultIfEmptyComponent },
  { path: 'first', component: FirstComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
