let employee=[
    {
        id:151290,
        name:"Satyanadella",
        Age:24,
        sex:"male",
        username:"Satya",
        address:{
            street:"duvaada jagannatham",
            city:"Vizag",
            state:"Andhra pradesh"
        }


    },
    {
        id:151291,
        name:"Indra Nooyi",
        Age:29,
        sex:"Female",
        username:"Indra",
        address:{
            street:"Abdul kalam",
            city:"Chennai",
            state:"Tamil Nadu"
        }
    },
    {
        id:151292,
        name:"Nirmala Sitharaman",
        Age:28,
        sex:"Female",
        username:"Nirmala",
        address:{
            street:"Pankaj colony",
            city:"Mumbai",
            state:"Maharashtra"
        }
    },
    {
        id:151293,
        name:"Sunder pichai",
        Age:26,
        sex:"male",
        username:"Sunder",
        address:{
            street:"Anna Durai",
            city:"Chennai",
            state:"Tamil Nadu"
        }
    },
    {
        id:151294,
        name:"Indira Gandhi",
        Age:34,
        sex:"Female",
        username:"Indira",
        address:{
            street:"Virat Jain",
            city:"New Delhi",
            state:"New Delhi"
        }
    },
    {
        id:151295,
        name:"Narendra Modi",
        Age:29,
        sex:"male",
        username:"Narendra",
        address:{
            street:"Gurajada",
            city:"Ahmadabad",
            state:"Gujarat"
        }
    },
    {
        id:151296,
        name:"Sarojini Naidu",
        Age:35,
        sex:"Female",
        username:"Sarojini",
        address:{
            street:"Harijana Wada",
            city:"Banglore",
            state:"Karnataka"
        }
    }
]
// let data=employee.forEach((employee)  =>
//    {
//            console.log(employee.Age)
//     })
//     console.log(data)


   let butn1=document.getElementById("allEmployee");
   butn1.addEventListener("click",() => {
    console.log(employee)
      display(employee)
       })

       
//code to filterout male employees
       let butn2=document.getElementById("male")
       butn2.addEventListener("click",() =>{
          let details= employee.filter((employees) =>{
             return employees.sex=="male"
          })
          console.log(details)
          display(details)//calling display funtion to display all male employees in table format
       })

//code to filter out female employees
       let butn3=document.getElementById("female")
       butn3.addEventListener("click",() =>{
           let femaledetails=employee.filter((employees) =>{
               return employees.sex=="Female"
           })
           console.log(femaledetails)
           display(femaledetails)//calling display funtion to display all female employees in table format
       })

//code to filterout data based on searched value
        function validate(){
             let inputs=document.getElementById("search_value")
             
             let entered_value=inputs.value
             console.log(entered_value)
           
         

          let display_onsearch= employee.filter((employees) =>{
                    return employees.username==entered_value;
            })
            
            console.log(display_onsearch)
            display(display_onsearch)
         }

     //display employee information in table format    
       function display(employee)
       {
           let table1=document.createElement("table");
           let result1=document.querySelector(".resultall");
         
           let caption=table1.createCaption()
           caption.innerHTML="Employee Information"
           let row1=table1.insertRow()
                 let t1=table1.createTHead()
                 h1=document.createElement("th")                          //creating th
                 let cell=row1.insertCell();
                 h1.innerText="Id";
                 cell.appendChild(h1)
    
                let h2=document.createElement("th")   
                 h2.innerText="Name"
                 let cell1=row1.insertCell();
                 cell1.appendChild(h2)
    
                 let h3=document.createElement("th")     
                 h3.innerText="Age"
                 let cell2=row1.insertCell();
                 cell2.appendChild(h3)
    
                 let h4=document.createElement("th")    
                 h4.innerText="Sex"
                 let cell3=row1.insertCell();
                 cell3.appendChild(h4)
    
                 let h5=document.createElement("th")   
                 h5.innerText="UserName"
                 let cell4=row1.insertCell();
                 cell4.appendChild(h5)
    
                 let h6=document.createElement("th")    
                 h6.innerText="Street"
                 let cell5=row1.insertCell();
                 cell5.appendChild(h6)
    
                 let h7=document.createElement("th")    
                 h7.innerText="City"
                 let cell6=row1.insertCell();
                 cell6.appendChild(h7)
    
                 
                 let h8=document.createElement("th")   
                 h8.innerText="State"
                 let cell7=row1.insertCell();
                 cell7.appendChild(h8)
    


           for(var i=0;i<employee.length;i++)
           {
               let row=table1.insertRow()
               let id=row.insertCell()
               id.innerHTML=employee[i].id;
               let name=row.insertCell()
               name.innerHTML=employee[i].name
               let age=row.insertCell()
               age.innerHTML=employee[i].Age
               let sex=row.insertCell()
               sex.innerHTML=employee[i].sex;
               let username=row.insertCell()
               username.innerHTML=employee[i].username
               let street=row.insertCell()
               street.innerHTML=employee[i].address.street
               let city=row.insertCell()
               city.innerHTML=employee[i].address.city
               let state=row.insertCell()
               state.innerHTML=employee[i].address.state

               
             
           }
            result1.appendChild(table1)
           console.log(table1)
       }