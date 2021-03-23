
(function(){
    selectedItemsDisplay();
    cartSize()
})();


class ItemClass
{
  public poster:string;
  public price:number;
  constructor(poster:string,price:number)
  {
   this.poster=poster;
   this.price=price;
  }
}

var itemObjectArray=[];
var itemObjectArrayJSON;
var totalNumberOfItems=0;

let Item1AddedQuantity:number=0;
let Item2AddedQuantity:number=0;
let Item3AddedQuantity:number=0;
let Item4AddedQuantity:number=0;
let Item5AddedQuantity:number=0;
let Item6AddedQuantity:number=0;

function cartSize():void{
    var cartItemsSize=0;                    //cart size initial assignment 
    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
        cartItemsSize=itemObjectArray.length;
        document.getElementById("cartSizeNumber").innerHTML="Cart Size: "+cartItemsSize.toString();
    }
    else
    {
        document.getElementById("cartSizeNumber").innerHTML="Cart Size: "+cartItemsSize.toString();
    }
}

function selectedItemsDisplay():void{              //no of items in the cart & session storage
    var item1JSON= sessionStorage.getItem("Item1AddedQuantityJSONInfo");
    let Item1AddedQuantityFromJSON=JSON.parse(item1JSON);
    if(Item1AddedQuantityFromJSON==1)
    {
     var elementItem1=document.getElementById("Item1Selected");
     elementItem1.innerHTML="Selected";
    }

    var item2JSON= sessionStorage.getItem("Item2AddedQuantityJSONInfo");
    let Item2AddedQuantityFromJSON=JSON.parse(item2JSON);
    if(Item2AddedQuantityFromJSON==1)
    {
     var elementItem2=document.getElementById("Item2Selected");
     elementItem2.innerHTML="Selected";
    }

    var item3JSON= sessionStorage.getItem("Item3AddedQuantityJSONInfo");
    let Item3AddedQuantityFromJSON=JSON.parse(item3JSON);
    if(Item3AddedQuantityFromJSON==1)
    {
     var elementItem3=document.getElementById("Item3Selected");
     elementItem3.innerHTML="Selected";
    }

    var item4JSON= sessionStorage.getItem("Item4AddedQuantityJSONInfo");
    let Item4AddedQuantityFromJSON=JSON.parse(item4JSON);
    if(Item4AddedQuantityFromJSON==1)
    {
     var elementItem4=document.getElementById("Item4Selected");
     elementItem4.innerHTML="Selected";
    }

    var item5JSON= sessionStorage.getItem("Item5AddedQuantityJSONInfo");
    let Item5AddedQuantityFromJSON=JSON.parse(item5JSON);
    if(Item5AddedQuantityFromJSON==1)
    {
     var elementItem5=document.getElementById("Item5Selected");
     elementItem5.innerHTML="Selected";
    }

    var item6JSON= sessionStorage.getItem("Item6AddedQuantityJSONInfo");
    let Item6AddedQuantityFromJSON=JSON.parse(item6JSON);
    if(Item6AddedQuantityFromJSON==1)
    {
     var elementItem6=document.getElementById("Item6Selected");
     elementItem6.innerHTML="Selected";
    }
}

function poster1Add():void{                                                 //adding poster 1
    var item1JSON= sessionStorage.getItem("Item1AddedQuantityJSONInfo");
    let Item1AddedQuantityFromJSON=JSON.parse(item1JSON);
      
    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
    }

    Item1AddedQuantity=Item1AddedQuantityFromJSON+1;
    if(Item1AddedQuantity<2)
    {
        let item1={poster:"Dead pool", price:30};
        itemObjectArray.push(item1);
        itemObjectArrayJSON=JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
        
        let Item1AddedQuantityJSON=JSON.stringify(Item1AddedQuantity);
        sessionStorage.setItem("Item1AddedQuantityJSONInfo",Item1AddedQuantityJSON);

        var elementItem1=document.getElementById("Item1Selected");
        elementItem1.innerHTML="Selected";
        cartSize();
    }
}

function poster1Delete():void{                                                      //deleting poster 1
    var item1JSON= sessionStorage.getItem("Item1AddedQuantityJSONInfo");
    let Item1AddedQuantityFromJSON=JSON.parse(item1JSON);
    if(Item1AddedQuantityFromJSON!=null)
    {
        var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
        itemObjectArray=objEmptyCheckArray;
        for(let i=0;i<itemObjectArray.length;i++)
        {
         if(itemObjectArray[i].poster=="Dead pool")
         {
          itemObjectArray.splice(i, 1);
          itemObjectArrayJSON=JSON.stringify(itemObjectArray);
          sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
          let Item1AddedQuantityJSON=JSON.stringify(0);
          sessionStorage.setItem("Item1AddedQuantityJSONInfo",Item1AddedQuantityJSON);
         }
        }
        var elementItem1=document.getElementById("Item1Selected");
        elementItem1.innerHTML="";
        cartSize();
    }
}

function poster2Add():void{
    var item2JSON= sessionStorage.getItem("Item2AddedQuantityJSONInfo");
    let Item2AddedQuantityFromJSON=JSON.parse(item2JSON);
       
    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
    }
   
    Item2AddedQuantity=Item2AddedQuantityFromJSON+1;
    if(Item2AddedQuantity<2)
    {
        let item2={poster:"Marvel Heros 2016 ", price:50};
        itemObjectArray.push(item2);
        itemObjectArrayJSON=JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
        
        let Item2AddedQuantityJSON=JSON.stringify(Item2AddedQuantity);
        sessionStorage.setItem("Item2AddedQuantityJSONInfo",Item2AddedQuantityJSON);

        var elementItem2=document.getElementById("Item2Selected");
        elementItem2.innerHTML="Selected";
        cartSize();
    }
}

function poster2Delete():void{
    var item2JSON= sessionStorage.getItem("Item2AddedQuantityJSONInfo");
    let Item2AddedQuantityFromJSON=JSON.parse(item2JSON);
    if(Item2AddedQuantityFromJSON!=null)
    {
        var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
        itemObjectArray=objEmptyCheckArray;
        for(let i=0;i<itemObjectArray.length;i++)
        {
         if(itemObjectArray[i].poster=="Marvel Heros 2016")
         {
          itemObjectArray.splice(i, 1);
          itemObjectArrayJSON=JSON.stringify(itemObjectArray);
          sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
          let Item2AddedQuantityJSON=JSON.stringify(0);
          sessionStorage.setItem("Item2AddedQuantityJSONInfo",Item2AddedQuantityJSON);
         }
        }
        var elementItem2=document.getElementById("Item2Selected");
        elementItem2.innerHTML="";
        cartSize();
    }
}


function poster3Add():void{
    var item3JSON= sessionStorage.getItem("Item3AddedQuantityJSONInfo");
    let Item3AddedQuantityFromJSON=JSON.parse(item3JSON);
    Item3AddedQuantity=Item3AddedQuantityFromJSON+1;
    
    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
    }
   
    if(Item3AddedQuantity<2)
    {
        let item3={poster:"Spiderman", price:25};
        itemObjectArray.push(item3);
        itemObjectArrayJSON=JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
        
        let Item3AddedQuantityJSON=JSON.stringify(Item3AddedQuantity);
        sessionStorage.setItem("Item3AddedQuantityJSONInfo",Item3AddedQuantityJSON);

        var elementItem3=document.getElementById("Item3Selected");
        elementItem3.innerHTML="Selected";
        cartSize();
    }
}

function poster3Delete():void{
    var item3JSON= sessionStorage.getItem("Item3AddedQuantityJSONInfo");
    let Item3AddedQuantityFromJSON=JSON.parse(item3JSON);
    if(Item3AddedQuantityFromJSON!=null)
    {
        var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
        itemObjectArray=objEmptyCheckArray;
        for(let i=0;i<itemObjectArray.length;i++)
        {
         if(itemObjectArray[i].poster=="spiderman")
         {
          itemObjectArray.splice(i, 1);
          itemObjectArrayJSON=JSON.stringify(itemObjectArray);
          sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
          let Item3AddedQuantityJSON=JSON.stringify(0);
          sessionStorage.setItem("Item3AddedQuantityJSONInfo",Item3AddedQuantityJSON);
         }
        }
        var elementItem3=document.getElementById("Item3Selected");
        elementItem3.innerHTML="";
        cartSize();
    }
}

function poster4Add():void{
    var item4JSON= sessionStorage.getItem("Item4AddedQuantityJSONInfo");
    let Item4AddedQuantityFromJSON=JSON.parse(item4JSON);
    Item4AddedQuantity=Item4AddedQuantityFromJSON+1;

    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
    }

    if(Item4AddedQuantity<2)
    {
        let item4={poster:"Three Heros", price:40};
        itemObjectArray.push(item4);
        itemObjectArrayJSON=JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
        
        let Item4AddedQuantityJSON=JSON.stringify(Item4AddedQuantity);
        sessionStorage.setItem("Item4AddedQuantityJSONInfo",Item4AddedQuantityJSON);

        var elementItem4=document.getElementById("Item4Selected");
        elementItem4.innerHTML="Selected";
        cartSize();
    }
}

function poster4Delete():void{
    var item4JSON= sessionStorage.getItem("Item4AddedQuantityJSONInfo");
    let Item4AddedQuantityFromJSON=JSON.parse(item4JSON);
    if(Item4AddedQuantityFromJSON!=null)
    {
        var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
        itemObjectArray=objEmptyCheckArray;
        for(let i=0;i<itemObjectArray.length;i++)
        {
         if(itemObjectArray[i].poster=="Three Heros")
         {
          itemObjectArray.splice(i, 1);
          itemObjectArrayJSON=JSON.stringify(itemObjectArray);
          sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
          let Item4AddedQuantityJSON=JSON.stringify(0);
          sessionStorage.setItem("Item4AddedQuantityJSONInfo",Item4AddedQuantityJSON);
         }
        }
        var elementItem4=document.getElementById("Item4Selected");
        elementItem4.innerHTML="";
        cartSize();
    }
}

function poster5Add():void{
    var item5JSON= sessionStorage.getItem("Item5AddedQuantityJSONInfo");
    let Item5AddedQuantityFromJSON=JSON.parse(item5JSON);
    Item5AddedQuantity=Item5AddedQuantityFromJSON+1;

    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
    }

    if(Item5AddedQuantity<2)
    {
        let item5={poster:"Black Panther", price:60};
        itemObjectArray.push(item5);
        itemObjectArrayJSON=JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
        
        let Item5AddedQuantityJSON=JSON.stringify(Item5AddedQuantity);
        sessionStorage.setItem("Item5AddedQuantityJSONInfo",Item5AddedQuantityJSON);

        var elementItem5=document.getElementById("Item5Selected");
        elementItem5.innerHTML="Selected";
        cartSize();
    }
}

function poster5Delete():void{
    var item5JSON= sessionStorage.getItem("Item5AddedQuantityJSONInfo");
    let Item5AddedQuantityFromJSON=JSON.parse(item5JSON);
    if(Item5AddedQuantityFromJSON!=null)
    {
        var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
        itemObjectArray=objEmptyCheckArray;
        for(let i=0;i<itemObjectArray.length;i++)
        {
         if(itemObjectArray[i].poster=="Black Panther")
         {
          itemObjectArray.splice(i, 1);
          itemObjectArrayJSON=JSON.stringify(itemObjectArray);
          sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
          let Item5AddedQuantityJSON=JSON.stringify(0);
          sessionStorage.setItem("Item5AddedQuantityJSONInfo",Item5AddedQuantityJSON);
         }
        }
        var elementItem5=document.getElementById("Item5Selected");
        elementItem5.innerHTML="";
        cartSize();
    }
}

function poster6Add():void{
    var item6JSON= sessionStorage.getItem("Item6AddedQuantityJSONInfo");
    let Item6AddedQuantityFromJSON=JSON.parse(item6JSON);
    Item6AddedQuantity=Item6AddedQuantityFromJSON+1;

    var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        itemObjectArray=objEmptyCheckArray;
    }

    if(Item6AddedQuantity<2)
    {
        let item6={poster:"Marvel heros Omega", price:55};
        itemObjectArray.push(item6);
        itemObjectArrayJSON=JSON.stringify(itemObjectArray);
        sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
        
        let Item6AddedQuantityJSON=JSON.stringify(Item6AddedQuantity);
        sessionStorage.setItem("Item6AddedQuantityJSONInfo",Item6AddedQuantityJSON);

        var elementItem6=document.getElementById("Item6Selected");
        elementItem6.innerHTML="Selected";
        cartSize();
    }
}

function poster6Delete():void{
    var item6JSON= sessionStorage.getItem("Item6AddedQuantityJSONInfo");
    let Item6AddedQuantityFromJSON=JSON.parse(item6JSON);
    if(Item6AddedQuantityFromJSON!=null)
    {
        var objEmptyCheckJSON= sessionStorage.getItem("articleObjectArrayJSONInfo");
        var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
        itemObjectArray=objEmptyCheckArray;
        for(let i=0;i<itemObjectArray.length;i++)
        {
         if(itemObjectArray[i].poster=="Marvel heros Omega")
         {
          itemObjectArray.splice(i, 1);
          itemObjectArrayJSON=JSON.stringify(itemObjectArray);
          sessionStorage.setItem("articleObjectArrayJSONInfo",itemObjectArrayJSON);
          let Item6AddedQuantityJSON=JSON.stringify(0);
          sessionStorage.setItem("Item6AddedQuantityJSONInfo",Item6AddedQuantityJSON);
         }
        }
        var elementItem6=document.getElementById("Item6Selected");
        elementItem6.innerHTML="";
        cartSize();
    }
}

