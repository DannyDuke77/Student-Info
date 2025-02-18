
function getPeople(){
    var id = document.getElementById("id-input").value;
    var infoBox = document.getElementById("info")
    for(let i = 0; i < peopleDetails.length; i++){
        if(id == peopleDetails[i].number || id == peopleDetails[i].name){
            return infoBox.innerHTML = 
            "<strong>Name: </strong>" + peopleDetails[i].name + "<br>" + 
            "<strong>ID: </strong>" + peopleDetails[i].number + "<br>" + 
            "<strong>Occupation: </strong>" + peopleDetails[i].occupation + "<br>" + 
            "<strong>Allergies: </strong>" + peopleDetails[i].allergies + "<br>" +
            "<strong>Likes: </strong>" + peopleDetails[i].likes
            
        } 
    }   return infoBox.innerHTML = "Please enter correct ID";
}

const peopleDetails = [
    {
        name : "Daniel Gitau",
        number : 1162,
        occupation : "Student",
        allergies : ["None"],
        likes : ["Motor Racing", " Coding", " Driving"]
    },
    {
        name : "Stephen Kamau",
        number : 1254,
        occupation : "Employed",
        allergies : ["Latex"],
        likes : ["Coding", " Singing", " Piano"]
    },
    {
        name : "Deborah Wanjiru",
        number : 4587,
        occupation : "Employed",
        allergies : ["Peanuts", "Latex", "Milk Products", "Sugar"],
        likes : ["Singing", "Cooking"]
    },
    {
        name : "James Bond",
        number : 2545,
        occupation : "Actor",
        allergies : ["None"],
        likes : ["Gaming"]
    },
    {
        name : "Lewis Hamilton",
        number : 44,
        occupation : "Formula 1 Driver",
        allergies : ["Peanuts", "Salt water"],
        likes : ["Designing", "Gaming"]
    },
    {
        name : "Harry Kane",
        number : 10,
        occupation : "Footballer",
        allergies : ["Wheat", "Pollen", "Cat fur"],
        likes : ["Gaming"]
    },
    {
        name : "George Clooney",
        number : 1075,
        occupation : "Accountant",
        allergies : ["Gluten", "Peanuts", "Protein"],
        likes : ["Politics", "Sports"]
    }
];

