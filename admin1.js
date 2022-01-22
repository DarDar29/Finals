
    let uname,upass

function login(){
    uname=document.getElementById("uname").value
    upass=document.getElementById("psw").value
   if(uname=="" || upass==""){
    window.alert("Enter Username or Password.");
   }else{
    
    
   if(uname=="admin" && upass=="123"){
    location.href = "admin.html";
   }else{
    window.alert("Invalid Login");
   }
   }
}
function viewpro(){
    var products=[
        {
            "ProductID":1,
            "Name":"Little Red Riding hood",
            "Genre":"Fairy tale, Tale, Children's literature",
            "Price":"¥"+181.97
        },
        {
            "ProductID":2,
            "Name":"Peter Pan",
            "Genre":"Children's literature, Novel, Fantasy Fiction, Young adult fiction",
            "Price":"¥"+159.22
        },
        {
            "ProductID":3,
            "Name":"Jughead the Hunger",
            "Genre":"Thriller, Mystery, Crime fiction, Suspense, Horror",
            "Price":"¥"+341.19
        },
    ]
    var mainContainer = document.getElementById("view")
    for(var i=0;i<products.length;i++){
        var newDiv = document.createElement('div');
        newDiv.innerHTML= "Manga#:"+products[i].ProductID +  '\n -Name:' + products[i].Name+'\n -Genre:'+products[i].Genre+"\n -Price:"+products[i].Price
        mainContainer.appendChild(newDiv)
    }

}
  
