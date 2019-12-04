import React, { Component ,Fragment }  from 'react';
import Media from 'react-media';

import '../App.css';

class screen1 extends Component {

  

constructor() {
super();

this.state={
  // arr:[{code:"123",city:"karachi"},{code:"1234",city:"lahore"},{code:"12345",city:"islamabad"}],
  arr:[{code:"98001" ,city:"Washington "},{code:"90001",city:"Los angeles"},{code:"60007",city:"chicago"},{code:"94016",city:"san francisco"},{code:"02101",city:"Boston"},
  {code:"77001",city:"houston texas"},{code:"33101",city:"Miami"},{code:"75001",city:"dallas"}],
  array:[]

}

this.zip=this.zip.bind(this);
this.search=this.search.bind(this);
this.result=this.result.bind(this);
// this.city=this.city.bind(this);
this.info=this.info.bind(this);
}

 


// componentWillMount(state,props){
//   const {arr }=this.state;
//   fetch('http://dummy.restapiexample.com/api/v1/employees')
//   .then(response => response.json())
//   .then(data => {
//    data.map((i)=>{
  
//   return arr.push(i)
  
//   }) // Prints result from `response.json()` in getRequest
//   })
//   .catch(error => console.error(error))
// }

 result(e){
    const {array}=this.state;

  array.map((i)=>{
  // {this.state.res.length<1 && this.setState({res: " "})}
      return this.setState({res: i.city});
    })

    // await this.city();

    }

              async search(key,myArray){
              const {array}=this.state;

                for (var i=0; i < myArray.length; i++) {
                  if (myArray[i].code === key) {
                    await console.log(myArray[i])
                    await console.log("ok")
                  await array.push(myArray[i])
                  await this.result();
                  
                  }
                }
              }

                      zip(e){
                      const {arr}=this.state;
                      console.log(e.target.value);
                        this.setState({zip: e.target.value})
                      // arr.map((i)=>{
                      //   return console.log(i.code);
                      // })
                     if(e.target.value==(null||undefined),e.target.value.length<1){

                      this.setState({res: ""})
                     }

                      this.search(e.target.value,arr);

                      }

                            info(){
                                const {zip,res,inp2,inp3,inp4}=this.state;
                                if(zip && res && inp2 && inp3 && inp4){
                               
                                alert("zip"+" "+zip+"\n"
                                +"city"+":"+res
                                +"\n"+"street"+":"+inp2+"\n"
                                +"\n"+"house_no"+":"+inp3
                                +"\n"+"country"+":"+inp4)
                                }
                                else{
                                  alert("please fill all field")
                                }

                            }
                            // city(e){
                            //   const {res} = this.state;
                            //   e.target.value = res
                            // }
render() {
    return (
      <div className="App">
      
        <header className="App-header">
          
       <h1>intern App</h1>
         
        </header>
   
  
    <center>  <div className="work">
  
           <div style={{marginTop:"20px"}}>
               <form>
       <label>Zip</label> <br className="break"/><input  className="input" placeholder="073635" onChange={this.zip} type="text"  required />  
       <br className="break"/>
       <label className="p_1">City</label> <br className="break"/><input value= {this.state.res} className="input1" id="city" type="text" placeholder="..."  required/>
       <br className="break"/><br className="break2"/>
       <label className="p_2">Street</label><br className="break"/> <input className="input2" onChange={(e)=>{this.setState({"inp2": e.target.value})}} type="text" placeholder="..."  required/>
       <br className="break"/>
       <label className="p_3">House no:</label><br className="break"/> <input className="input3" onChange={(e)=>{this.setState({"inp3": e.target.value})}} type="text" placeholder="..."  required/>
       <br className="break"/><br className="break2"/>
       <label className="p_4">Country:</label><br className="break"/> <input className="input4" onChange={(e)=>{this.setState({"inp4": e.target.value})}} type="text" placeholder="..."  required/>
       <br className="break"/><br className="break2"/>
       <button className="btn" onClick={this.info}> info </button>
       </form>

        </div>


       
    

        </div>
      </center>
      </div>
    );
  }
}

export default screen1;
