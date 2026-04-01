import InputBar from "./components/InputBar";
import Heading from "./components/Heading";
import Item from "./components/Item";

function App() {
   var arr=["Milk","Bread","Eggs","Butter","Cheese"];
    function submitclick(itm){
        console.log("Buy button clicked for item: " + itm);
    }
 return (
    <div className="App">
      <Heading/>
      <InputBar 
      />
      <ul>
        {arr.map((itm)=><Item  key={itm} itm={itm} handleSubmit={submitclick}/>)}
      </ul>
    </div>
  );
}
export default App;
