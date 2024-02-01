
	const firstnameInput = document.getElementById ("firstname")
	const lastnameInput = document.getElementById ("lastname")
	const emailInput = document.getElementById ("email")
	const ageInput = document.getElementById ("age")
	const saveButtom = document.getElementById("save")

	saveButtom.addEventListener("click", function(e){
		e.preventDefault();
		const newtr = document.createElement("tr");
		 document.getElementById("mytbody").append(newtr);
		 const newFristname = document.createElement("td");
		 newFristname.innerText = firstnameInput.value;
		 newtr.append(newFristname);

		 const newlasttname = document.createElement("td");
		 newlasttname.innerText = lastnameInput.value;
		 newtr.append(newlasttname);

		 const newemail = document.createElement("td");
		 newemail.innerText = emailInput.value;
		 newtr.append(newemail);

		 const newage = document.createElement("td");
		 newage.innerText = ageInput.value;
		 newtr.append(newage);

	});

	//this the for loop you can see the result in the console
	let arr =[0,1,2,,3,4,5,6,7,8,9,10];
	for (var i = 1; i < arr.length-1 ; i++) {
		console.log(i);
	};


