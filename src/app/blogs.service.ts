import { Injectable } from '@angular/core'; 

import { Blog } from './models/blog.model'

@Injectable({
  providedIn: 'root'
})
export class BlogsService { 
  constructor() { 

  }
  public  getBlogs() {
 
    let blogs:Blog[];
//** Demo purpose data hardcode. Actually data we will fetch it from API */
    blogs=[
        new Blog("345",'Total Orders',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","./assets/well.png"),
        new Blog("305",'Total Expenses',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","./assets/well.png"),
        new Blog("600",'Total Revenue',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","./assets/well.png"),
        new Blog("544",'Total Users',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","./assets/well.png")
    ]

    return blogs;               
}
}
