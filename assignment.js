function authorDetails() {
    var authors = [{
            coursename: 'HTML5',
            price: 400.50,
            rating: 4,
            author: 'minal',
            location: authorlocation.ind,
            avl: false
        },
        {
            coursename: 'CSS',
            price: 700.75,
            rating: 5,
            author: 'ashvini',
            location: authorlocation.eng,
            avl: true
        },
        {
            coursename: 'Bootstrap',
            price: 700,
            rating: 3,
            author: 'varsha',
            location: authorlocation.aus,
            avl: true
        },
        {
            coursename: 'JavaScript',
            price: 1000,
            rating: 4,
            author: 'omkar',
            location: authorlocation.nz,
            avl: true
        },
    ];
    return authors;
}
;
var authorlocation;
(function (authorlocation) {
    authorlocation[authorlocation["ind"] = 0] = "ind";
    authorlocation[authorlocation["eng"] = 1] = "eng";
    authorlocation[authorlocation["nz"] = 2] = "nz";
    authorlocation[authorlocation["aus"] = 3] = "aus";
})(authorlocation || (authorlocation = {}));
;
function getAuthorLocationDetails(authorArea) {
    console.log("country: " + authorlocation[authorArea]);
    var authorData = [];
    var details = authorDetails();
    for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
        var d = details_1[_i];
        if (d.avl) {
            authorData.push(d.coursename, d.price, d.author);
            break;
        }
    }
    ;
    console.log(authorData);
    return authorData; //? authordata is of any[] and getAuthorLocationDetails() is of string[] then also how this return is accepted?
}
;
var Adetails = getAuthorLocationDetails(authorlocation.aus); //is it giving index ?
