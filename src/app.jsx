export function App() {

  return (
    <>
      <div className='h-lvh flex flex-col justify-center items-center gap-2'>
        <span className='text-4xl font-bold text-black font-mono' >
          OPC Total Tax Calculator
        </span>
        <input placeholder='Paste the copied tax here' className='px-6 py-2 h-12 w-60 border-2 border-black' id='tax'>Paste the copied tax here</input>
        <button innerText="Calculate" className='px-4 py-2 hover:text-black text-white text-xl bg-black hover:bg-white font-bold rounded-lg border-black border-2 shadow-lg hover:scale-110 ease-in duration-100' onClick={calcTax}/>
      </div>
    </>
  )
}

const calcTax = () => {
  const tax = document.getElementById("tax").value.split("\t");
  const first = []
  const second = []

  for (let i = 6; i < tax.length; i = i + 3){
    first.push(tax[i])
  }

  for (let i = 0; i < first.length; i++) {
    second.push(parseInt(first[i].split(" ")[0].replace(/"/g,'')))
  }
  console.log(second)

  let sum = 0
  second.map(e => sum += e)
  
  console.log(sum)
}
