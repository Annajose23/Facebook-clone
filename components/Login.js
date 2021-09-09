import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"
            height={200}
            width={200}
            objectFit="contain"/>
            <h1 onClick={signIn} className="p-5 bg-blue-700 rounded-full
            text-white cursor-pointer">Login with facebook</h1>
        </div>
    )
}

export default Login
