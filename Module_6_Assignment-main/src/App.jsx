/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [textArea, setTextArea] = useState()

  const handleClick = () => {
    setTextArea(
      <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro totam, veritatis deserunt ipsa, eaque ullam cupiditate in eius doloribus quasi amet accusamus rerum unde molestias? Aliquid dignissimos eveniet nisi ea, labore incidunt non. Quia tempore ad culpa dicta similique placeat, optio at quo possimus corrupti dolores. Soluta eveniet eum aliquid! Deserunt, cupiditate et soluta pariatur nihil doloremque nemo recusandae unde? Alias, odit! Ipsa dolorum minus recusandae! Exercitationem repellat, ipsum, quae quod culpa est saepe consequuntur et vero cum quia ex dicta architecto, dolores nisi debitis natus ab! Dolorem, recusandae blanditiis veritatis veniam et consequatur consectetur impedit nam labore alias.</p>
      </>
    )
  }
  return (
    <div>
      <Header title='Asifur Rahman' />
      <button onClick={handleClick} className='py-4 px-8 bg-green-400 text-center rounded-full my-10 mx-10 text-3xl '>text area</button>
      <div className=' bg-green-200 px-10 py-10 text-2xl' >
        {textArea}
      </div>
      <footer className='w-full py-8 bg-slate-300 mt-60 text-center text-2xl'>
        <p>© || Asifur Rahman</p>
      </footer>
    </div>
  )
}

export default App
