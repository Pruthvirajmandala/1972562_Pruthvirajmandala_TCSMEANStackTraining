var budgetStringArray =[];   //Array for storing Program Manager details 
var budgetStringArrayJSON;

function onFormSubmit(){  
    var data = readFormData(); //Read data
    insertSessionArray(data);
    
function readFormData() {
    var obj = {}    // empty object is created for storing data in that object
    obj.clientName = document.getElementById("clientName").value;
    obj.projectName = document.getElementById("projectName").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    
    return obj; 
}
function insertSessionArray(data) //Json object
{
    var objEmptyCheckJSON= sessionStorage.getItem("budgetStringArrayInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    
    if(objEmptyCheckArray!=null)
    {
        budgetStringArray=objEmptyCheckArray;
    }
        
    budgetStringArray.push(data); // pushing data
    console.log(budgetStringArray);
     budgetStringArrayJSON=JSON.stringify(budgetStringArray);
    console.log(budgetStringArrayJSON);
    sessionStorage.setItem("budgetStringArrayInfo",budgetStringArrayJSON)
}
function resetData() {  //Reset
    document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";
}
}