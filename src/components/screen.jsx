import React from 'react'
import { useState } from 'react'

export default function Screen() {

var [invalue,setInvalue] = useState(
   [{},{},{}] 
)
const [dis, setDis] = useState(false);

var [combi, setCombi] = useState([])
 
const handleChange = (index, event) => {
 
  let data = [...invalue];
   data[index][event.target.name] = event.target.value;
  setInvalue(data);
}


 const addFields = () => {
   let newfield= {};
  setInvalue(invalue.concat(newfield))
}



const combine = (str) =>
    str.reduceRight((a, v) => v.flatMap(c => a.map(r => c + r)));

function splitArray(arr){
  var res = [];
  for(let i = 0; i < arr.length; i += 3){
      res.push(arr.slice(i, i + 3));        
      
  }
  return res;
}


function combination(str){

    return (combine(splitArray(str)));
    
}
function handleSubmit(e) {
  var chars = invalue.map(function(item) {
    return item['num'];
  });
 
  setCombi(combi.concat(combination(chars)));
  setDis(true);
  e.preventDefault();
 
}
 
 


  return (
    <div className=' h-2/4  w-full lg:w-2/4 m-auto bg-gray-800 shadow-md '>
        <div className='grid lg:grid-cols-2 p-3 md:grid-cols-2  h-full  '>

        <div className ='h-full w-full'>
          <div className='grid grid-cols-1 '>
          <button disabled={!combi} onClick={addFields} className=' w-full border-b-4 border-gray-900  text-white  p-5'>
            Add Box 
          </button>
          {/* <button onClick={addFields} className=' w-full border-2 border-yellow-500 text-white  p-5'>
            Remove
          </button> */}
           
          </div>

        {/* this is for the dynamic form */}
        <form  className=' w-full py-3 max-h-52 overflow-y-auto ' onSubmit={handleSubmit}>
        <div className='grid place-items-center  gap-y-5 grid-cols-3 justify-center  '>
        {invalue.map((input, index) => {
          return (
    
            <div key={index}>
              <input
              max={5}
              type='text'
               className='w-20 h-11 p-3 border-b-2 hover:shadow-2xl focus:border-b-2 focus:border-green-500 border-yellow-500 bg-gray-900 text-yellow-500'
              placeholder='Value'
              maxLength={1}
              required='required'
                name='num'   
                  value={invalue.name} 
                 onChange={event => handleChange(index, event)} 
              />
               
            </div>
          )
        })}
          
        </div>
      </form>   

          
          <div className='grid grid-cols-2'>
          <button type='submit' disabled={dis} onClick={handleSubmit} className='bg-gray-900 border-r-4 border-gray-800 p-3 text-white'>
              Cobine
            </button>
            <button onClick={()=> {setCombi(combi=[]); setDis(false)}} className='bg-gray-900 p-3  text-white'>
              Clear
            </button>
            
          </div>
        </div>

        <div className=' w-full p-3 h-full '>
   
        <ul className='flex flex-wrap h-64 max-h-64 shadow-md rounded-md shadow-yellow-500 overflow-y-auto p-1 my-6 m-auto mx-3 text-yellow-500 bg-gray-900 text-white'>
     
        {
     
         
         
          combi.map((input, index)=>{
            return (
            
                <li key={index} className='mx-3'>
                  {input}
                </li>
             
            );
          }

           )
           
        }
        </ul>
        </div>

        </div>
        </div>
  )
}
