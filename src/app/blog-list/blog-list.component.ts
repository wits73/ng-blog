import { BlogPostTitleComponent } from './../blog-post-title/blog-post-title.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from './../blog-post';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage: number;

  @ViewChildren('tile') blogPostTitleComponents: QueryList<BlogPostTitleComponent>;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();

  }

  updatePage(newPage) {
    this.currentPage = newPage;
  }

  exapndAll() {
    this.blogPostTitleComponents.forEach(e => e.showFullSummary());
  }
}
