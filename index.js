var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var j = 1;
		var i = 0;

		function AddRow(){

			var AddRown = document.getElementById('look');
			var NewRow = AddRown.insertRow(j);

			list1[i] = document.getElementById("firstname").value;
			list2[i] = document.getElementById("lastname").value;
			list3[i] = document.getElementById("email").value;
			list4[i] = document.getElementById("age").value;

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);

			cel1.innerHTML = list1[i];
			cel2.innerHTML = list2[i];
			cel3.innerHTML = list3[i];
			cel4.innerHTML = list4[i];

			j++;
			i++;
		}

        const myButton = document.getElementById('myButton');
        function handleClick() {
            alert('The form  has been submitted!');
          }
          myButton.addEventListener('click', handleClick);
