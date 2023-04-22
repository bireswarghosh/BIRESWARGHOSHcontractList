const express = require('express'); // Import the express module
const app = express(); // Create an instance of express
const port = 8000; // Set the port for the server
const path = require("path"); // Import the path module for working with file paths
//const ejs = require('ejs'); // Import the ejs module for rendering EJS templates


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: "marvel",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "iron man",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});



app.get('/', function(req, res){

    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
})
app.post('/add-new-contract', function(req, res){
    
    contactList.push(req.body);
    return res.redirect('/');

});
  

// this is the common part
app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

// this is for delate  fun 

app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = req.query.phone

    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});
