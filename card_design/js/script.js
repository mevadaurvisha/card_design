let students = [{
    name: "Riya",
    lname: "patel",
    age: 20,
    email : "rm@gmail.com",
    contact : 1234567890,
    hobbies: "trawelling",
    city: "surat",
},{
    name: "Dipali",
    lname: "Hadiya",
    age: 22,
    email : "dh@3gmail.com",
    contact : 1234567890,
    hobbies: "talking",
    city: "surat",
},{
    name: "Priya",
    lname: "Patel",
    age: 19,
    email : "Priya@gmail.com",
    contact : 993456234,
    hobbies: "singing",
    city: "pune",
},{
    name: "Astha",
    lname: "Nakrani",
    age: 19,
    email : "as@gmail.com",
    contact : 4657833354,
    hobbies: "dancind",
    city: "navsari", 
}
,{
    name: "Gunjan",
    lname: "Saxena",
    age: 23,
    email : "gs12PfM@example.com",
    contact : 1234567890,
    hobbies: "playing",
    city: "up",
},{
    name: "Srushti",
    lname: "Ahir",
    age: 20,
    email : "ahir2357@gmail.com",
    contact : 993456234,
    hobbies: "eating",
    city: "Baroda",
},{
    name: "vaishali",
    lname: "sisara",
    age: 20,
    email : "vaishu12@gmail.com",
    contact : 4657833354,
    hobbies: "reading",
    city: "vesu-surat", 
}
,{
    name: "Divya",
    lname: "Ahir",
    age: 21,
    email : "zqPfM@example.com",
    contact : 1234567890,
    hobbies: "stitching",
    city: "surat",
},{
    name: "siya",
    lname: "patel",
    age: 20,
    email : "sp45@gmail.com",
    contact : 993456234,
    hobbies: "teaching",
    city: "rajkot",
},{
    name: "puja",
    lname: "nakrani",
    age: 23,
    email : "pn467@gmail.com",
    contact : 4657833354, 
    hobbies: "writing",
    city: "mumbai",
}
,{
    name: "nisha",
    lname: "Ahir",
    age: 21,
    email : "zqPfM2342@example.com",
    contact : 1234567890,
    hobbies: "Studying",
    city: "surat",
},{
    name: "krishna",
    lname: "lathiya",
    age: 22,
    email : "kishu456@gmail.com",
    contact : 993456234,
    hobbies: "trawelling",
    city: "daman",
},{
    name: "Devanshi",
    lname: "katariya",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354, 
    hobbies: "naturing",
    city: "nagpur",
},{
    name: "Kinjal",
    lname: "Ahir",
    age: 20,
    email : "ra@gmail.com",
    contact : 993456234,
    hobbies: "walking",
    city: "dharamshala",
},{
    name: "Dhruv",
    lname: "chudasma",
    age: 19,
    email : "gopi@gmail.com",
    contact : 4657833354,
    hobbies: "Reading",
    city: "Delhia", 
}
,{
    name: "Vidhi",
    lname: "Rathod",
    age: 20,
    email : "zqPfM@example.com",
    contact : 1234567890 ,
    hobbies: "listening",
    city: "Vapi",
},{
    name: "Priyanshi",
    lname: "Gohil",
    age: 20,
    email : "sfg@gmail.com",
    contact : 993456234,
    hobbies: "Adventuring",
    city: "Junagadh",
},];
 

for (let i = 0; i < students.length-1; i++) {
card.innerHTML += `<div class=" card bg-danger-subtle  border-3 text-center  " style= "width: 350px;; margin: 0 auto; padding: 20px; margin-top: 80px; border-radius: 20px; position: relative;">
<a href="#"></a><h4 class="text-bold" >Name :- ${students[i].name} ${students[i].lname}</h4><p class="fs-5 fw-bolder">
Age :-  ${students[i].age}</p><p class="fs-5 fw-bolder">
Email :-  ${students[i].email}</p><p  class="fs-5 fw-bolder">Contact :-  ${students[i].contact}</p><P class="fs-5 fw-bolder">
hobbies :- ${students[i].hobbies}</P><P class="fs-5 fw-bolder">
City :- ${students[i].city}</P></div></br></br></br>`
};
