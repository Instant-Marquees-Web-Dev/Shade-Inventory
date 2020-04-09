import { useState } from 'react'

export const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial)

  const handleChange = e => setInputs({
    ...inputs,
    [e.target.name]: e.target.value
  })

  const resetForm = () => setInputs(initial)

  return { inputs, setInputs, handleChange, resetForm}

}