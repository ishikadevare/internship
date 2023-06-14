import {useState} from "react";
import {useFormik} from "formik";
import './MyStyle.css';

function Student()
{
	const [msg, setMsg] = useState("");
	const initialValues= {rno:"", name:"", marks:""}
	const validate = (values) => {
		const errors={};
		if(values.rno == "")
		{
			errors.rno="Empty rno is not allowed";
			setMsg("");
		}
		if(parseInt(values.rno) < 1)
		{
			errors.rno="Min rno should be 1";
			setMsg("");
		}
		if(values.name.length == 0)
		{
			errors.name="Empty name is not allowed";
			setMsg("");
		}
		else if( ! values.name.match(/^[A-z ]+$/))
		{
			errors.name = " name should contain only alphabets";
			setMsg("");
		}
		if(values.marks == "")
		{
			errors.marks="Empty marks is not allowed";
			setMsg("");
		}
		if(parseInt(values.marks) < 0 || parseInt(values.marks) > 100)
		{
			errors.marks="Marks should be between 0 to 100";
			setMsg("");
		}
		
		return errors;
}

const onSubmit = (values) => {
	let r = parseFloat(values.rno);
	let n = values.name
	let m = parseFloat(values.marks);
	let ans = "rno: " + r +","+ " Name: " + n +","+ " marks: " + m;
	setMsg(ans);
}
const formik = useFormik({initialValues, validate, onSubmit})

return(
	<>
		<center>
			<h1> Fill the form </h1>
			<form onSubmit={formik.handleSubmit}>
		<input type="number" placeholder="Enter rno" name="rno" onChange={formik.handleChange} onBlur= {formik.handleBlur}/>
{formik.touched.rno && formik.errors.rno ? <div className="er"> {formik.errors.rno}</div>:null}
	<br/><br/>
	<input type = "text" placeholder="enter name" name="name" onChange={formik.handleChange} onBlur= {formik.handleBlur}/>
{formik.touched.name && formik.errors.name ? <div className="er"> {formik.errors.name}</div>:null}
			
	<br/><br/>
	<input type = "number" placeholder="enter marks" name="marks" onChange={formik.handleChange} onBlur= {formik.handleBlur}/>
{formik.touched.marks && formik.errors.marks ? <div className="er"> {formik.errors.marks}
</div>:null}
				<br/><br/>
				<input type="submit" />
				<br/><br/>
				</form>
				<h1> {msg} </h1>
			</center>
		</>
	);
}
	
	
export default Student;