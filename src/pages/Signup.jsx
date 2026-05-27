function Signup() {

return(

<div className="min-h-screen flex items-center justify-center">

<form className="bg-white shadow-xl p-10 rounded w-[400px]">

<h2 className="text-3xl mb-6">
Signup
</h2>

<input
type="text"
placeholder="Name"
className="w-full border p-3 mb-4"
/>

<input
type="email"
placeholder="Email"
className="w-full border p-3 mb-4"
/>

<input
type="password"
placeholder="Password"
className="w-full border p-3 mb-4"
/>

<button className="w-full bg-[#D5846E] text-white py-3 rounded">
Create Account
</button>

</form>

</div>

)

}

export default Signup;