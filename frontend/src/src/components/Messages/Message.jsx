import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
          <div className='chat-image avtar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/boy" alt="avtar-image" />
            </div>
          </div>

          <div className={'chat-bubble text-white bg-blue-500'}>
                      Hi!  what is upp?
          </div>
          <div className={'chat-bubble text-white bg-blue-500'}>
                      12:43
          </div>
    </div>
  )
}

export default Message