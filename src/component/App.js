import React from "react";
import ToList from "./ToDoList.js";

class App extends React.Component {
  state = {
    list: [
      { Ad: "Shahlar", id: "1" },
      { Ad: "Maliza", id: "2" },
      { Ad: "Said", id: "3" },
      { Ad: "Vahida", id: "4" },
    ],
  };

  Add=()=>{
    
    console.log("Salam necesen");
     let newList = this.state.list.filter((item) => {
       return item.Ad !== "";
     });

     var random_string="";
     var chatacters="abcdefgh0123897654"
     for(var i=0; i<chatacters.length;i++){
        random_string+=chatacters.charAt(Math.floor(Math.random()*chatacters.length));
     }

     const inp = document.querySelector("#myText");
     console.log(inp.value)
        if(inp.value===""){return "It's Empty"}
         this.state.list.push({Ad:inp.value,id:random_string})
         this.setState({list:this.state.list})
         console.log(this.state.list)
         inp.value="";
}

  delete=(item)=>{
   let newList=this.state.list.filter(li=>li.id!==item.id)
   this.setState({list:newList})
  }
  render() {
   
    return <ToList List={this.state.list}  addFunc={this.Add} del={this.delete} />;
  }
}

export default App;
