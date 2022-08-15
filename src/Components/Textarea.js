import { useState } from "react";

const Textarea = (props) => {
    const [text,newtext] =useState("") 
    const capital = ()=>{
        var newtxt=text.toUpperCase();
        newtext(newtxt)
    }
    const small = ()=>{
        var newtxt=text.toLowerCase();
        newtext(newtxt)
    }
    const trims = ()=>{
        var newtxt=text.trim();
        newtext(newtxt)
    }
    const removespace = ()=>{
        var newtxt="";
        for(var i=0;i<text.length;i++){
            if(text[i]!=' '){
                newtxt+=text[i];
            }
        }
        newtext(newtxt)
    }
    const eachword=()=>{
        var words=text.split(" ")
        var newtxt=""
        words.forEach(ele => {
            newtxt+=ele[0].toLocaleUpperCase()+ele.substring(1)+" "
        });
        newtext(newtxt)
    }
    const changevalue=(eve)=>{
        newtext(eve.target.value)
    }
    var char=text.length
    var words=text.split(" ")
    var time=words.length*(0.02)
  return (
    <div className="container">
      <div className="mb-3"  >
        <h2 style={{margin:"20px"}}>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="enter text"
          value={text}
          onChange={changevalue}
        ></textarea>
        <button style={{margin:"20px"}} onClick={capital} className="btn btn-primary">Capitalise</button>
        <button style={{margin:"20px"}} onClick={small} className="btn btn-primary">Decapitalise</button>
        <button style={{margin:"20px"}} onClick={removespace} className="btn btn-primary">remove spaces</button>
        <button style={{margin:"20px"}} onClick={eachword} className="btn btn-primary">Capitalize first letter of each word</button>
        <button style={{margin:"20px"}} onClick={trims} className="btn btn-primary">Remove spaces from start and end</button>
        <p style={{margin:"20px"}}>number of characters - {char}</p>
        <p style={{margin:"20px"}}>number of words - {text==""?0:words.length}</p>
        <p style={{margin:"20px"}}>Approx typing time - {text==""?0:words.length*(0.02)} min</p>
        </div>
    </div>
  );
};

// Textarea.propTypes={
//     heading: PropTypes.string
// }

export default Textarea;
