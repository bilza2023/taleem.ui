async function a(e,o){try{const t=localStorage.getItem("token");return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(o)})}catch(t){return t}}export{a};