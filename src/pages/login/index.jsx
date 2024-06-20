import React, { useEffect } from 'react'
import { useGetValue } from '../../hooks/useGetValue'
import { useSignInMutation } from '../../context/api/userApi'
import { useNavigate } from 'react-router-dom'

import './login.scss'

const initialState = {
  UserName: "john32",
  password: "12345678"
}

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState)
  const [signIn, { data, isSuccess, isError, error }] = useSignInMutation()
  let navigate = useNavigate()
  
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("x-auth-token", data.data.token)
      navigate("/admin/adminproducts")
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      alert(error.data.message)
    }
  }, [isError])

  const handleLogin = (e) => {
    e.preventDefault()
    signIn(formData)
  }

  return (
    <div className="form__wrapper container">
      <form onSubmit={handleLogin} className='form'>
        <h2>Login</h2>
        <div className="form__inputs">
          <input autoFocus value={formData.UserName} onChange={handleChange} type="text" name='UserName' />
          <input value={formData.password} onChange={handleChange} type="password" name='password' />
        </div>
        <div className="form__btn">
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login