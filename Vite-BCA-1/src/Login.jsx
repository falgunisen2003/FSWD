const Login = () => {
    return ( 
           
<div 
  className=" bg-transparent flex items-center justify-center bg-gradient-to-br from-black to-purpleDark to-black "
  style={{ backgroundImage: `url('/logo1 2.png')`, backgroundSize: "cover", backgroundPosition: "center", backgroundSize: "800px auto", backgroundRepeat: "no-repeat", padding:"50px"  }}
>               
 <div className="bg-black/70 text-white rounded-2xl px-30 pt-20 pb-5 shadow-lg ">
                
                    <div className="text-center mb-6">
                        <img
                            src="public/logo1 2.png"
                            alt="Logo"
                            className="mx-auto h-18 w-18 mb-2"
                        />
                        <h1 className="text-xl font-bold">Log in to your account</h1>
                    </div>
                    <form>
                        <div className="mb-4">
                            {/* <label htmlFor="email" className="sr-only">
                                Email
                                </label> */}
                               <h1>Email</h1>
                            <input
                                type="email"
                                id="email"
                                // placeholder="Email"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-purple-600 text-white"
                            />
                             
                        </div>
                        <div className="mb-4">
                            {/* <label htmlFor="password" className="sr-only">
                                Password
                            </label> */}
                             <h1>Password</h1>
                            <input
                                type="password"
                                id="password"
                                // placeholder="Password"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-purple-600 text-white"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm">
                                <input
                                    type="checkbox"
                                    className="mr-2 accent-purple-600"
                                />
                                Remember me
                            </label>
                            <a
                                href="#"
                                className="text-sm text-purple-500 hover:underline"
                            >
                                Forgot password
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold"
                        >
                            Log in
                        </button>
                    </form>
                    <p className="text-sm text-center mt-4">
                        Don’t have an account?{" "}
                        <a href="#" className="text-purple-500 hover:underline">
                            Sign up now
                        </a>
                    </p>
                </div>
            </div>
            
    );
};

export default Login;




