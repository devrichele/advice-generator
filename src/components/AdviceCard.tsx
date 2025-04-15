"use client";

import {useState} from 'react';
import {useEffect} from 'react';

function AdviceCard () {
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState<number | null>(null)

    const fetchAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        setAdvice(data.slip.advice)
        setId(data.slip.id)

    }

    useEffect(() =>{
        fetchAdvice()
    }, [])
    //quando o componente carrega pela primeira vez, ele chama a function fetchAdvice, que faz a requisição para a API e atualiza o estado com o novo conselho.
    
    
  return (
    <div className="bg-gray-700 text-white p-6  rounded-xl text-center max-w-md w-full mx-auto shadow-xl relative">
        <p className='text-green-400 text-sm tracking-[4px] mb-4'>AdviceCard #{id}</p>
        <h1 className='text-xl mb-6'>{advice}</h1>
        <div className="mb-6">
        <img
          src="/imagens/pattern-divider-desktop.svg"
          alt="divider"
          className="hidden sm:block mx-auto"
        />
      </div>
        <button
            onClick={fetchAdvice}
            className='bg-green-400 p-4 rounded-full absolute left-1/2 -bottom-6 -translate-x-1/2 hover:shadow-[0px_0px_20px_hsl(150,100%,66%)] transition flex items-center justify-center'>
            <img src="/imagens/icon-dice.svg" alt="dice" className="w-6 h-6" />
        </button>
    </div>
  )
}

export default AdviceCard