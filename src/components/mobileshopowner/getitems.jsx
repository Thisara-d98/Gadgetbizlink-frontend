import React from 'react';
import {useState,useEffect} from 'react';


function Getitems(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
            fetch("http://localhost:5000/getitems")
            .then((result)=>result.json())
            .then((data)=>{
                console.log("checkpoint")
                console.log(data)
                setUsers(data)
            })
            .catch((err)=>{
                console.error("Error fetching items", err)
            });
        },[]);

    return (
        
        <div class="row">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            
                {users.map((user,index)=>(      
                    <div class="card col-sm-6 col-12">  
                        <div class="card-body">     
                            <div key={index}>
                                <h5 class="card-title" name="type" >{user.itemtype} </h5>
                                <h6 class="card-subtitle mb-2 text-muted" name="brand">{user.itembrand}</h6>
                                <h6 class="card-subtitle mb-2 text-muted" name="model">{user.itemmodel}</h6>
                                <h6 class="card-subtitle mb-2 text-muted" name="price">{user.itemprice}</h6>
                            </div>
                        </div>
                    </div>
                ))}
           
        </div>
    );

}

export default Getitems;