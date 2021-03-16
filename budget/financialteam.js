(function(){
    insertRecordFromSession();
    getTotalBudget();
})();

function insertRecordFromSession(){
    var obj= sessionStorage.getItem("budgetStringArrayInfo");
    var obj1=JSON.parse(obj);
    
    var table = document.getElementById("employeeList");
    var body = table.getElementsByTagName("tbody")[0];
    for(var i=0;i<obj1.length;i++){
    var newRow = body.insertRow(body.length);  // row created 
    var objElement=obj1[i];
    var cell1 = newRow.insertCell(0);          // cell created & values are passed
    cell1.innerHTML=obj1[i].clientName;                 // value placed 
    var cell2 = newRow.insertCell(1);          
    cell2.innerHTML=obj1[i].projectName;                 
    var cell3 = newRow.insertCell(2);          
    cell3.innerHTML=obj1[i].budget;                 
    }    
}

function getTotalBudget(){
    var totalCost=0;
    var obj= sessionStorage.getItem("budgetStringArrayInfo");
    var obj1=JSON.parse(obj);  
    for(var i=0;i<obj1.length;i++){
        totalCost=totalCost+parseInt(obj1[i].budget); 
    }
    console.log(totalCost);
    document.getElementById("totalCost").innerHTML=totalCost;
}