//12th june 2021                DAY 7

//1st ques obj display
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);

//2nd ques obj removal
var student = { 
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student);
delete student.rollno;
console.log(student);

//3rd ques obj length
var student = {
     name : "David Rayy",
     sclass : "VI",
     rollno : 12 
};

  console.log(Object.keys(student).length);

//4th ques display status        
 var library = [ 
     {
        
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true },
        
        {  
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
         readingStatus: true },
         
         {  title: 'Mockingjay: The Final Book of The Hunger Games', 
         author: 'Suzanne Collins',
         readingStatus: false }
           ]; 
               
           const zee = library.find((library) => {
            return library.title == 'The Road Ahead'
        })  

           const zo = library.find((library) => {
            return library.title == 'Walter Isaacson'
        })  

        const zoo = library.find((library) => {
            return library.title == 'Mockingjay: The Final Book of The Hunger Games'
        })  
           console.log(zee);
           console.log(zo);
           console.log(zoo);

//5th ques  volume of cylinder
class User
{
    constructor(pi, radius, height)
    {
        this.pi = pi;
        this.radius = radius;
        this.height = height;

        let V = (2*pi*radius*height);
        return V;
    }

   
}   

const some = new User(3.14, 2, 5);

console.log(User.constructor());
//CHHAVI58dudejamad



           



