


export default function SecondQuiz(props){

    return (
    
    
    <div className=" gap-3 bg-teal-700 border rounded-lg w-2/4 h-2/3 flex flex-col items-center justify-center">
    
    
    
    
    <h1 className="text-white">Which of this is not a programming language ?</h1>
    
    <button id="un"  className="bg-white border rounded-md w-2/4 h-10"   onClick={(d)=>{
         document.getElementById("deux").classList.remove("bg-blue-600")
         document.getElementById("trois").classList.remove("bg-blue-600") 
         document.getElementById("quatre").classList.remove("bg-blue-600")
         d.currentTarget.classList.add("bg-blue-600")
        props.param.deux(true)}} >Python</button>
    <button id="deux"  className="bg-white border rounded-md w-2/4 h-10"   onClick={(d)=>{
          document.getElementById("un").classList.remove("bg-blue-600")
          document.getElementById("trois").classList.remove("bg-blue-600") 
          document.getElementById("quatre").classList.remove("bg-blue-600")
          d.currentTarget.classList.add("bg-blue-600")
        props.param.deux(true)}}>JavaScript</button>
    <button id="trois"  className="bg-white border rounded-md w-2/4 h-10"   onClick={(d)=>{
        document.getElementById("un").classList.remove("bg-blue-600")
        document.getElementById("deux").classList.remove("bg-blue-600")
        document.getElementById("quatre").classList.remove("bg-blue-600")
        d.currentTarget.classList.add("bg-blue-600")
        props.param.deux(false)}}>MS-03</button>
    <button id="quatre"  className="bg-white border rounded-md w-2/4 h-10"   onClick={(d)=>{
         document.getElementById("un").classList.remove("bg-blue-600")
         document.getElementById("deux").classList.remove("bg-blue-600")
         document.getElementById("trois").classList.remove("bg-blue-600") 
         d.currentTarget.classList.add("bg-blue-600")
        props.param.deux(true)}}>Java</button>
    
    <button className="bg-white border rounded-md w-1/4 h-10"   onClick={()=>{props.param.un(false)}}>Next Question</button>
    
    
        
    </div>
    
    )
    
    
    
    }