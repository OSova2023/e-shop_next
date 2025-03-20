import { APP_NAME } from '@/lib/constants'
import React from 'react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='boeder-t'>
        <div className='p-5 flex-center'>{currentYear} @{APP_NAME}. Все права защищены</div>
    </footer>
  )
}

export default Footer