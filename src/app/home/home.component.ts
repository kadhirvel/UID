import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service'; 
import { Blog } from '../models/blog.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  blogs!: Blog[];
   /**  blogsService instance  */
  blogsService!: BlogsService;
  constructor() {
    this.blogsService= new BlogsService();
   }
   
  /** This method will help to get the blogs detail from backend */
   getBlogs() {
     
    this.blogs=this.blogsService.getBlogs();
    console.log(this.blogs);
  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
