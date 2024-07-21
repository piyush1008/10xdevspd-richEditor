import React, { useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";


function Counter(quill, options) {
    const container = document.querySelector('#counter');
    quill.on(Quill.events.TEXT_CHANGE, () => {
      const text = quill.getText();
      // There are a couple issues with counting words
      // this way but we'll fix these later
      container.innerText = text.split(/\s+/).length-1;
    });
  }

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ]
export default function TextEditor(){
    Quill.register('modules/counter', Counter);
   const wrapperRef= useCallback(wrapper =>{
        if(wrapper == null ) return;
        wrapper.innerHTML=""

        const editor=document.createElement('div')
        wrapper.appendChild(editor)
        new Quill(editor, {theme: "snow",modules: { toolbar: TOOLBAR_OPTIONS,  counter: true  }  });
    })
    return (
        <div>
            <div className="container"  ref={wrapperRef}></div>

            {/* <div id="counter">0</div> */}
        </div>
    )
}