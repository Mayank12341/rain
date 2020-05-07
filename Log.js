class Log extends BaseClass {
    constructor() {
      super(random(0,1200),10,20,random(5,10),random(20,100));
       this.width=random(5,10);
      this.height=random(20,100);
       this.x=random(0,1200)
       this.y=10
       if(this.y>300){
           this.y=0
      
       }
 
    }
  };
  