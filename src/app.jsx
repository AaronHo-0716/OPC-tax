import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-lvh flex flex-col justify-center items-center gap-2'>
        <span className='text-3xl font-bold text-black font-mono' >
          OPC Total Tax Calculator
        </span>
        <input placeholder='Paste the copied tax here' className='px-6 py-2 border-2 border-black'>Paste the copied tax here</input>
        <button innerText="Calculate" className='px-4 py-2 hover:text-black text-white text-xl bg-black hover:bg-white font-bold rounded-lg border-black border-2 shadow-lg hover:scale-110 ease-in duration-100'/>
      </div>
    </>
  )
}
