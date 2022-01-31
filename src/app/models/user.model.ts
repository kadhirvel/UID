  /** USer data model to create USers list */
export class User { 
 
    userid:string ;
    name: string ;
    Desc:string;
    imageUrl: string; 

    constructor(userid:string,    name: string ,   Desc:string, imageUrl: string) {
        this.userid=userid;
        this.name=name;
        this.Desc=Desc;
        this.imageUrl=imageUrl;
    } 
}