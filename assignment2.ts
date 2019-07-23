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
        author : 'varsha',
        location : authorlocation.eng,
        avl : false
    },
    {
        coursename : 'Bootstrap',
        price : 700,
        rating : 3,
        author : 'ashvini',
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
  //console.log(`user country: ${authorlocation[authorArea]}`);
  let countryname : any = authorArea;
   console.log(countryname);

   let authorData:any[] = [];
   let details = authorDetails();
   
   for(let d of details){
        console.log(d.location);
        console.log(authorArea);
        console.log(countryname);
            if(d.location == countryname){

                authorData.push(d.coursename,d.price,d.author);
                
            break;
            }
   };
  // console.log(authorData);
   return authorData; //? authordata is of any[] and getAuthorLocationDetails() is of string[] then also how this return is accepted?
  };
   let Autdetails = 
 getAuthorLocationDetails(authorlocation.aus);
