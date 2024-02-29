

import {  useEffect, useState} from "react"
import FirstQuiz from "./components/firstquiz"
import SecondQuiz from "./components/secondQuiz"
import ThirdQuiz from "./components/thirdquiz"
import "./App.css"


function App() {
const [pseudo,setPsudo]=useState()
const [result1,setResult1]=useState()
const [result2,setResult2]=useState()
const [result3,setResult3]=useState()
const [start,setStart]=useState(true)
const [firstquiz,setFirstQuiz]=useState(true)
const [secondquiz,setSecondQuiz]=useState(true)
const [thirdquiz,setThirdQuiz]=useState(true)
const [index,setIndex]=useState(0)

useEffect(()=>{
let i=0
  if(result1===true){i=i+1}
  if(result2===false){i=i+1}
  if(result3===false){i=i+1}
  setIndex(i)


},[thirdquiz])


  return (
    <div className="App   h-screen w-screen flex-col flex items-center gap-10  pt-10">
      <h1 className="text-7xl font-bold ">Quiz app</h1>

<div className="w-full h-full flex justify-center ">



{start===true ? <div className=" gap-3 bg-teal-700 border rounded-lg w-2/4 h-2/3 flex flex-col items-center justify-center">

<label htmlFor="" className="text-white">Enter Your Name</label>
<input className="text-slate-400 w-2/4 h-10 rounded-md" id="" type="text" placeholder="Ex. Pedro" onChange={(element)=>{setPsudo(element.target.value)}} />

<button className="bg-white border rounded-md w-2/4 h-10"  onClick={()=>{setStart(false)}} >Start Quiz</button>
</div> : null }





{start===false && firstquiz===true  ? <FirstQuiz  param={{un:pseudo,deux : setFirstQuiz,trois:setResult1}} /> : null}




{firstquiz===false && secondquiz===true ? <SecondQuiz param={{un:setSecondQuiz,deux:setResult2}}/>  : null }



{secondquiz===false && thirdquiz===true ? <ThirdQuiz param={{un:setThirdQuiz,deux:setResult3}} /> : null}





{thirdquiz===false ? <div className=" gap-3 bg-teal-700 border rounded-lg w-2/4 h-2/3 flex flex-col items-center justify-center"> 

<h1 className="text-white">Quiz Finished</h1>
<h2 className="text-white">{`${index}/3`}</h2>
<button className="bg-white rounded-md w-2/4 h-10" onClick={()=>{

setStart(true)
setFirstQuiz(true)
setSecondQuiz(true)
setThirdQuiz(true)
setIndex(0)

}}>Restart Quiz</button>


</div> : null}



</div>




    </div>
  );
}

export default App;
