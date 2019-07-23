function authorDetails(){
    let authors = [{
        coursename : 'HTML5',
        price : 400.50,
        rating : 4,
        author : 'minal',
        location : authorlocation.ind,
        avl : false
    },
    {
        coursename : 'CSS',
        price : 700.75,
        rating : 5,
        author : 'ashvini',
        location : authorlocation.eng,
        avl : true
    },
    {
        coursename : 'Bootstrap',
        price : 700,
        rating : 3,
        author : 'varsha',
        location : authorlocation.aus,
        avl : true
    },
    {
        coursename : 'JavaScript',
        price : 1000,
        rating : 4,
        author : 'omkar',
        location : authorlocation.nz,
        avl : true
    },
];
return authors;
};

enum authorlocation {'ind' , 'eng', 'nz', 'aus'};
  function getAuthorLocationDetails(authorArea:authorlocation):Array<string>{
   console.log(`country: ${authorlocation[authorArea]}`);
   let authorData = [];
   let details = authorDetails();
   for(let d of details){
       if(d.avl){
           authorData.push(d.coursename,d.price,d.author);
           break;
       }
   };
   console.log(authorData);
   return authorData; //? authordata is of any[] and getAuthorLocationDetails() is of string[] then also how this return is accepted?
  };
   let Adetails = 
 getAuthorLocationDetails(authorlocation.aus);//is it giving index ?
