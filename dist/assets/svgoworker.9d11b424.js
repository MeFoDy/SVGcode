import{o as s,b as e}from"./vendor.30782d67.js";self.addEventListener("message",(async a=>{const{svg:t}=a.data,o=s(t,{multipass:!0,plugins:e([{name:"removeViewBox",active:!1}])});a.ports[0].postMessage({result:o.data})}));