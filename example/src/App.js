import React from 'react'

import { Button } from 'mynpmui'
import 'mynpmui/dist/index.css'

const App = () => {
  return (
    <>
      <Button
        type='primary'
        text='Primary Button'
        onClick={() => alert('mesaj')}
      />
      <Button text='Default Button' onClick={() => alert('mesaj')} />
      <Button
        type='dashed'
        text='Dashed Button'
        onClick={() => alert('mesaj')}
      />
      <Button
        type='text'
        text='Text Button'
        onClick={() => alert('mesaj')}
      />
      <Button
        type='link'
        text='Link Button'
        onClick={() => alert('mesaj')}
      />
    </>
  )
}

export default App
