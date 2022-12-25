
import './App.css';
import React,{useState} from 'react';
function App() {
  const [msgs,setmsgs]=useState([
    {message:"hello",me:true,type:"btns",content:[{id:"a1",text:"h1"},{id:"a2",text:"h2"},{id:"a3",text:"h3"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hellow",me:true,type:"btns",content:[]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
    {message:"hello2",me:false,type:"btns",content:[{id:"c1",text:"c1"},{id:"c2",text:"c2"}]},
  ])

  return (
    <div className="App d-flex flex-column">
      <div className='p-3 messages d-flex flex-column'>
        {
          msgs.map((ele)=>{
            if (ele.me===true){
              return(
                <div className='pb-2 message d-flex flex-row-reverse justifu-content-start align-items-center'>
                  <div className='message-content w-25 d-flex flex-column justifu-content-start align-items-center bg-primary'>
                    <span className='text-light' >
                      {ele.message}
                    </span>
                    {
                      ele.content.map((btn)=>{
                        return(
                          <button className='btn bg-warning' style={{width:"80%",height:"30px",marginBottom:"4px"}}>{btn.text}</button>
                        )

                      })
                    }
                  </div>
        
                </div>
              )
            }else{
              return(
                <div className='pb-2 message d-flex flex-row justifu-content-start align-items-center'>
                  <div style={{backgroundColor:"rgb(210,210,210)"}} className='message-content w-25 d-flex flex-column justifu-content-start align-items-center'>
                    <span className='text-dark'>
                      {ele.message}
                    </span>
                    {
                      ele.content.map((btn)=>{
                        return(
                          <button className='btn bg-warning' style={{width:"80%",height:"30px",marginBottom:"4px"}}>{btn.text}</button>
                        )

                      })
                    }
                  </div>
                </div>
              )
            }
          })
        }

      </div>
      <div className='controls d-flex flex-row'>
        <input type="text" className='sendbox'/>
        <button className='sendbtn btn btn-dark'>Send</button>

      </div>
      
      
    </div>
  );
}

export default App;
