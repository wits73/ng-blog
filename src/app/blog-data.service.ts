import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost [][] {
    return  [
              [
                { title: 'post 1', summary: 'post 1 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 2', summary: 'post 2 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 3', summary: 'post 3 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 4', summary: 'post 4 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'}
              ],
              [
                { title: 'post 1-1', summary: 'post 1-1 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 2-1', summary: 'post 2-1 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 3-1', summary: 'post 3-1 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 4-1', summary: 'post 4-1 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'}
              ],
              [
                { title: 'post 5', summary: 'post 5 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 6', summary: 'post 6 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 7', summary: 'post 7 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'},
                { title: 'post 8', summary: 'post 8 Lorem ipsum dolor sit amet, consecteture test somthings and soemthings'}
              ]
            ];
  }
}
