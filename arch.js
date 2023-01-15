//console.log("Hello, World!");
class student{
    constructor(name, age , marks)
    {
      this.name=name
      this.age=age
      this.marks=marks
    }
    
    function(minplacement){
      console.log(this)
      return (minmarks)=>{
    
    console.log('inside elegibleforcurrentcompany',this)
    if(this.marks>minmarks &&this.age >minplacement){
      console.log(this.log+"ready for placement")
    }else
    {
      console.log(this.name +"he is nor ready for the placement")
    }
    }
    
    }
    }
    var obj1=new student("jack",'28','777')
    var obj2=new student("jac",'27',664)
    obj1.function(19)(79)
    
    var obj3=new student("jacki",'20')
    var obj5=new student("jackt",'22')
    
    obj1.function(55)