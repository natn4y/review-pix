'use client'
import { useState, } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
  const [selection, setSelection] = useState('');
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();



  const handleSelectionChange = (newSelection: string) => {
    setSelection(newSelection);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setInputValue(numericValue);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/realizar-saque', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: selection,
          valor: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      alert('Saque realizado com sucesso!');
    } catch (error) {
      router.push('/error');
    }
  };

  return (
    <div className="flex flex-col gap-4 text-white">
      <div className='flex gap-4'>
        {/* Opção CPF */}
        <div
          className={`flex flex-col md:flex-row gap-4 justify-center items-center border-2 ${selection === 'cpf' ? 'border-primary' : 'border-gray-300'} hover:bg-primary ${selection === 'cpf' ? 'bg-primary' : 'bg-[#148305]'} p-4 rounded-xl w-full sm:w-[48%] min-h-[140px] transition-all hover:scale-105 cursor-pointer`}
          onClick={() => handleSelectionChange('cpf')}
        >
          <div>
            <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
              <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path>
            </svg>

          </div>
          <p className="font-bold text-2xl">CPF</p>
        </div>

        {/* Opção Celular */}
        <div
          className={` md:flex-row gap-4 flex flex-col justify-center items-center border-2 ${selection === 'celular' ? 'border-primary' : 'border-gray-300'} hover:bg-primary ${selection === 'celular' ? 'bg-primary' : 'bg-[#148305]'} p-4 rounded-xl w-full sm:w-[48%] min-h-[140px] transition-all hover:scale-105 cursor-pointer`}
          onClick={() => handleSelectionChange('celular')}
        >
          <div>
            <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="white">
              <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path>
            </svg>


          </div>
          <p className="font-bold text-2xl">Celular</p>
        </div>
      </div>

      {selection !== '' && (
        <div className="border-primary mt-4 mb-16 p-4 border rounded-2xl w-full">
          <input
            className="border-gray-500 px-4 py-2 border w-full placeholder:text-gray-400"
            type="text"
            placeholder={`Digite seu ${selection === 'cpf' ? 'CPF' : 'Celular'}`}
            value={inputValue}
            onChange={handleInputChange}
          />

          <div className="flex gap-4 mt-4 w-full sm:w-auto">
            <button
              onClick={handleSubmit}
              className="bg-primary hover:bg-[#148305] px-4 py-2 rounded-md w-full font-bold text-white transition-all"
            >
              Realizar Saque
            </button>
          </div>
        </div>
      )}
    </div>
  );
}