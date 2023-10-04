import {React,ReactDOM,useState} from 'react';

function Addnewitem(){

    const [itemtype,setItemtype]=useState('');    
    const [itemname,setItemname]=useState('');
    const [itemmodel,setItemmodel]=useState('');
    const [itemprice,setItemprice]=useState('');
    const [buttonText,setButtonText]=useState('submit');

    const handleSubmit = async e=>{
        console.log("check frontend")
        e.preventDefault();
        setButtonText('submitted..')
        try {
            const body={itemtype,itemname,itemmodel,itemprice}
            const res=await fetch(
                "http://localhost:5000/addnewitem",
                {
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(body)
                }
            );
            console.log(res);
        }
        catch(err){
            console.log("error fetching");
        }
    } 

    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div className=" col-12 container">
                <form>
                    <div class="form-group">
                        <label for="itemtype">Item type</label>
                        <input type="text" name="itemtype" class="form-control"  value={itemtype} onChange={(e)=>setItemtype(e.target.value)} id="itemtype" placeholder="Enter item type"/>
                    </div>
  
                    <div class="form-group">
                        <label for="itembrand">Brand</label>
                        <input type="text" name="itemname" class="form-control" value={itemname}  onChange={(e)=>setItemname(e.target.value)} id="itembrand" placeholder="Enter item brand"/>
                    </div>

                    <div class="form-group">
                        <label for="itemtype">Item Model</label>
                        <input type="text" name="itemmodel" class="form-control" value={itemmodel} onChange={(e)=>setItemmodel(e.target.value)} id="itemmodel" placeholder="Enter item model"/>
                    </div>
  
                    <div class="form-group">
                        <label for="itemmodel">price</label>
                        <input type="text" name="itemprice" class="form-control"  value={itemprice} onChange={(e)=>setItemprice(e.target.value)} id="itembrand" placeholder="Enter item Price"/>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={handleSubmit} >{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default Addnewitem;
