import { BlogDataService } from './blog-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostTitleComponent } from './blog-post-title/blog-post-title.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { HighlightDirective } from './highlight.directive';
import { CardComponent } from './card/card.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTitleComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective,
    CardComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
