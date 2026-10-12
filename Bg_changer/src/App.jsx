import { useState } from 'react'
import Color_button from './componet/button'
function App() {
  let [background, setbackground] = useState('bg-black')
  const colmap = {
    red: 'bg-red-500 hover:bg-red-600',
    purple: 'bg-purple-700 hover:bg-purple-800',
    blue: 'bg-blue-500 hover:bg-blue-600',
    pink: 'bg-pink-500 hover:bg-pink-600',
    green: 'bg-green-500 hover:bg-green-600',
  }
  return (
    <>
      <div className={`w-full min-h-screen grid grid-cols-[1fr_200px] ${background} justify-center`}>
        <div className='m-3 col-start-2 self-center justify-self-end w-13 h-134 bg-gradient-to-br from-amber-100 to-yellow-200 shadow-xl rounded-2xl flex flex-col items-center justify-center gap-3'>
          <Color_button
            color_name='red'
            colMap={colmap}
            onClick={() => {
              setbackground(colmap.red);
              console.log("Red button clicked!");
            }}
          />

          <Color_button color_name='purple' colMap={colmap} onClick={() => {
            setbackground(colmap.purple);
          }} />
          <Color_button color_name='blue' colMap={colmap} onClick={() => {
            setbackground(colmap.blue);
          }} />
          <Color_button color_name='green' colMap={colmap} onClick={() => {
            setbackground(colmap.green);
          }} />
          <Color_button color_name='pink' colMap={colmap} onClick={() => {
            setbackground(colmap.pink);
          }} />
        </div>
      </div>
    </>
  )
}

export default App
