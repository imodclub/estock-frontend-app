import React from 'react'
import { GoogleLogin } from 'react-google-login'
import swal from 'sweetalert'
import axios from 'axios'

const clientId =
    '1023176701223-rpflu19cunp430jjou007i99c7qeusqb.apps.googleusercontent.com';
const baseUrl = `http://localhost:3001/api/auth/signup`



function Login() {
    const onSuccess = async (res) => {
        const email = res.profileObj.email
        const name = res.profileObj.name
        const connectAPI = await axios.post(baseUrl, { email: email, name: name, password: "null", role: "user" })
            .then(res => {
                console.log(res)
                console.log(res.data)
        })
        console.log('[Login Success] currentUser', name)
        swal('Success', name, 'success', {
          buttons: true
        }).then((value) => {
            //window.location.href ="/dashboard"
        })
    }

    const onFailure = (res) => {
        console.log('[Login Failure] res :', res)
    }
    return (
      <>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login on UBU Gmail"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ maginTop: "100px" }}
          isSignedIn={false}
        />
      </>
    );
}



export default Login
