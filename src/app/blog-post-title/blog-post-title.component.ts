import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from './../blog-post';
import { TruncatePipe } from '../truncate.pipe';
@Component({
  selector: 'app-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.scss']
})
export class BlogPostTitleComponent implements OnInit {

  @Input() post: BlogPost;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.post.summary = this.truncatePipe.transform(this.post.summary, 10);
  }
}
