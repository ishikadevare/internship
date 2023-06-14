function find()
	{
		let num = document.getElementById("num");
		let ans = document.getElementById("ans");

		if (num.value == "")
		{
			alert("input is empty");
			num.focus();
			ans.innerHTML = "";
			return;
		}
		let n = parseFloat(num.value);
		if (n < 0)
		{
			alert("Don't be negative");
			num.value = "";
			num.focus();
			ans.innerHTML = "";
			return;
		}
		let r = Math.sqrt(n);
		let msg = "square root = " + r.toFixed(2);
		ans.innerHTML = msg;
	}