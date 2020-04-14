import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export const useCookies = ({key}) => {
  const initial = Cookies.get(key)
  const [cookie, setStateCookie] = useState(initial || '')
  const IN_1HR = 1/24

  useEffect(() => {
    Cookies.set(key, cookie, {
      expires: IN_1HR
    })
  }, [cookie, key])


  return [cookie, setStateCookie]
}