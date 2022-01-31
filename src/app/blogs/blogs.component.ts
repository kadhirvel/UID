import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service'; 
import { Blog } from '../models/blog.model';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit { 
  displayedColumns = ['position'];
  /** mat table data source object to assign blogs data  */
  dataSource = new MatTableDataSource<IBlog>(BLOG_DATA);
  constructor() { 
   } 
  ngOnInit(): void { 
  }

}

  /** IBlog data model to create Blogs collection */
export interface IBlog {
  name: string;
  imageurl: string; 
  desc: string;
}

  /** blogs data hardcoded API mock. We can connect with API to fetch these data, Demo puspose hardcoded here*/
const BLOG_DATA: IBlog[] = [
  {name: 'Lorem Epsum', imageurl: "./assets/well.png", desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '},
  { name: 'Lorem Epsum', imageurl:  "./assets/well.png", desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
  { name: 'Lorem Epsum', imageurl:  "./assets/well.png", desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
  { name: 'Lorem Epsum', imageurl: "./assets/well.png", desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} 
];
