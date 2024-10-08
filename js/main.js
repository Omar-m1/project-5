

(async function getApi (){
    var ahmed = await fetch ("https://dummyjson.com/products");
    var element = await ahmed.json();
    var data = element.products;
    var myText="";
    for (var i=0; i<data.length ;i++){

        var cartoona =      `<div class="col-md-4 text-center mb-4  ">
                            <img src="${data[i].images[0]}" style=" height:400px" class ="img-fluid">
                            <h4>${data[i].title}</h4>
                            <h6>${data[i].category}</h6>
                            <h6>${data[i].price}$</h6>
                            </div>
                            `;

            myText= myText +cartoona;              
        } 
        
    document.querySelector(".test").innerHTML = myText;                    
})();