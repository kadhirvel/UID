  /** Blog data model to create Blogs collection for Home Page */
export class Blog { 
 
    blogID:string ;
    title: string ;
    desc:string;
    imageUrl: string;

    constructor(blogID:string,    title: string ,   desc:string, imageUrl: string) {
        this.blogID=blogID;
        this.title=title;
        this.desc=desc;
        this.imageUrl=imageUrl;
    } 
}