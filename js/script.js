let output = document.getElementById("output")
		let increment=0;
		function add(){
		increment++;
		let value=document.createElement("p");
		output.appendChild(value);
		value.innerHTML="welcome";
		}
		 let stop=setInterval(()=>{
		 if (increment==5){
		 clearInterval(stop);
		 }
		 else{
		 add()
		 }
		 },2000)
