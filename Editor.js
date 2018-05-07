import React from 'react';
//import { render } from 'react-dom';
//import MonacoEditor from 'react-monaco-editor';
//import brace from 'brace';
import AceEditor from 'react-ace';
import Iframe from 'react-iframe';
//import  Open from 'opn';
//import Browser from './Browser';
//import axios from 'axios';
//import path from "fs";
import 'brace/mode/java';
import 'brace/mode/html';
import 'brace/theme/github';
import 'brace/theme/eclipse';
import 'brace/snippets/bro';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/mode/json';
import 'brace/mode/mysql';
import 'brace/mode/ruby';
import 'brace/mode/typescript';
import 'brace/mode/css';
import 'brace/mode/python';
import 'brace/mode/powershell';
import 'brace/mode/php';
import 'brace/mode/text';
import 'brace/mode/jsx';
import 'brace/ext/error_marker';
import 'brace/mode/jsp';
import 'brace/mode/pascal';
import 'brace/mode/xml';
import 'brace/mode/sql';
//import 'brace/keybinding/vim';
//import 'brace/mode/enableBasicAutocompletion';

//import { emitKeypressEvents } from 'readline';


var theme={
  eclipse:'eclipse',
  github:'github',
  chrome:"chrome",
  monokai:'monokai',
  terminal:'terminal',
  iplastic:'iplastic'
}
var defaults ={
  markdown:'markdown',
  java:'java',
  xml:'xml',
  jsp:'jsp',
  pascal:'pascal',
  javascript:"javascript",
  python:"python",
  json:"json",
  html:"html",
  mysql:"mysql",
  css:"css",
  typescript:"typescript",
  ruby:"ruby",
  php:"php",
  text:"text",
  jsx:"jsx",
  sql:"sql"

}
/*
var  setOptions={
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }
  */
//var javascript;
class Editor extends React.Component {
  constructor(){
    super();
    this.state={
      mode:'javascript',
      code: defaults.javascript,
      theme:'eclipse',
      //readOnly:false,
      //setOptions:{setOptions}
    }
    this.changeMode = this.changeMode.bind(this);
    //this.toggleReadOnly = this.toggleReadOnly.bind(this);
    this.changetheme =this.changetheme.bind(this);
  }
 /*changeValue(newValue,e){
    var value= e.target.value;
    this.setState({
      value:value
    })
  }*/
 /* onChange(newCode) {
    var mode = this.state.mode
		this.setState({
			code:this.defaults[mode]
		});
  }*/
  changetheme(e) {
    var theme = e.target.value;
    this.setState({
      theme:theme
    })
  }
  changeMode (e) {
   /* //e.preventdefault();
  var  setOptions={
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2,
      }*/
   // var api="http://localhost:3002/";
    var mode = e.target.value;
    var code =defaults[mode];
    /*axios.post(api, path.filePath,  path.fileName, code)
    .then(function (stdout){
      console.log(stdout);
    })*/
		this.setState({
      mode: mode,
      code:defaults[mode],
      //setOptions:setOptions
		});
  }
  /*
  toggleReadOnly (e) {
   //e.preventdefault();
		this.setState({
			readOnly: !this.state.readOnly
    }, () => this.refs.editor.focus());
    //e.preventdefault();
  }
  */
  render() {
    const styleList = {
      //padding: 5,
      margin: 1,
      position: "relative",
      top: 1,
      //textcolor:purple50,
     
      display: "flex",
      overflow: "hidden",
      backgroundcolor: "#555"
    };
    return(
<div>
<select onChange={this.changeMode} value={this.state.mode}>
						<option value="markdown">Markdown</option>
						<option value="javascript">JavaScript</option>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="json">json</option>
            <option value="html">html</option>
            <option value="mysql">mysql</option>
            <option value="css">css</option>
            <option value="typescript">typescript</option>
            <option value="ruby">ruby</option>
            <option value="php">php</option>
            <option value="jsx">jsx</option>
            <option value="text">text</option>
            <option value="jsp">jsp</option>
            <option value="pascal">pascal</option>
            <option value="xml">xml</option>
            <option value="sql">sql</option>
					</select>
          <select onChange={this.changetheme} value={this.state.theme}>
            <option value="eclipse">eclipse</option>
            <option value="github">github</option>
            <option value="chrome">chrome</option>
            <option value="terminal">terminal</option>
            <option value="iplastic">iplastic</option>
            <option value="monokai">monokai</option>
           
          </select>
 <div>       
					
  <AceEditor
  mode={this.state.mode}
  theme={this.state.theme}
  name="blah2"
  readOnly={this.state.readOnly}
  width="1000px"
  //enableSnippets="bro"
  //enableLiveAutocompletion={true}
  //onLoad={this.state.onLoad}
  //onChange={this.onChange}
  //code = {this.state.code}
  fontSize={18}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={this.state.code}
  //enableBasicAutocompletion= {true}
  //enableLiveAutocompletion= {true}
  
  //////////////////////
 /* enableBasicAutocompletion= {true}
  enableLiveAutocompletion= {true}
  enableSnippets= {true}
  showLineNumbers= {true}
  tabSize= {1}
  */
  setOptions={this.state.setOptions}
  /*
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  
  }}*/
  />
  
  
      	<div >
           <h6>TERMINAL</h6>
          <Iframe url="http://localhost:3003"
        
          width="1000px"
          height="200px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>
       </div>
       
       </div>
  
  </div>
    )
  }
}
export default Editor;