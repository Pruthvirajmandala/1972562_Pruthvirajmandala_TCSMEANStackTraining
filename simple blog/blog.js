var ObjectArray =[];   
var ObjectArrayJSON;
var count=0;                                              
(function(){                                                        // invoked function
    publishedarticles();
})();
function onFormSubmit(){
    var data = readFormData();
    insertfromsession(data);
    retrivefromsession();
    resetData();
}
function readFormData() {                                           //read values
    var obj = {}   
    obj.Title = document.getElementById("Title").value;
    obj.desc = document.getElementById("desc").value;
    obj.addImage = document.getElementById("addImage").files[0].name;
    return obj; 
}

function insertfromsession(data)                                   //insert data in to session
{
    var objEmptyCheckJSON= localStorage.getItem("ObjectArrayJSONInfo");
    var objEmptyCheckArray=JSON.parse(objEmptyCheckJSON);
    if(objEmptyCheckArray!=null)
    {
        ObjectArray=objEmptyCheckArray;
    }    
    
    ObjectArray.push(data);
    ObjectArrayJSON=JSON.stringify(ObjectArray);
    localStorage.setItem("ObjectArrayJSONInfo",ObjectArrayJSON)
}
function retrivefromsession(){                                      //retrive from session
    var obj= localStorage.getItem("ObjectArrayJSONInfo");
    var obj1=JSON.parse(obj);
    const div = document.createElement('div');
    div.className = 'row';
    div.id='postblog';
    if(obj1!=null)
    {
    count=obj1.length-1;
    }
    const heading = document.createElement('div');
    const desc = document.createElement('div');
    const image = document.createElement('img');
    heading.id="blogtitle";
    desc.id="articledesc";
    image.id="articleimage";
    heading.innerHTML=obj1[count].Title;                //console.log(obj1[count].Title);
    desc.innerHTML=obj1[count].desc;                    //console.log(obj1[count].descr);
    image.src=obj1[count].addImage;                     // console.log(obj1[count].addImage);
    div.appendChild(heading);
    div.appendChild(desc);
    div.appendChild(image);
    document.getElementById('articleBlogs').appendChild(div);


}

function publishedarticles()                                    //articles are displayed here
{
    var obj= localStorage.getItem("ObjectArrayJSONInfo");
    var obj1=JSON.parse(obj);
    console.log(obj1);   
    if(obj1!=null)
    {
        for(var i=0;i<obj1.length;i++){
            const div = document.createElement('div');
            div.className = 'row';
            div.id='postblog';
            const heading = document.createElement('div');
            const desc = document.createElement('div');
            const image = document.createElement('img');
            heading.id="blogtitle";
            desc.id="articledesc";
            image.id="articleimage";
            heading.innerHTML=obj1[i].Title;                    //console.log(obj1[i].Title); 
            desc.innerHTML=obj1[i].desc;                           //console.log(obj1[i].desc);
            image.src=obj1[i].addImage;                             //console.log(obj1[i].addImage);
            div.appendChild(heading);
            div.appendChild(desc);
            div.appendChild(image);
            document.getElementById('articleBlogs').appendChild(div);
            }
    }
    count=obj1.length-1;
    

}

function resetData() {
    document.getElementById("Title").value="";
    document.getElementById("desc").value="";
    document.getElementById("addImage").files[0].name="";
}