export default function Home() {
  return (
    <div className='p-4 bg-slate-700 text-slate-100 h-screen'>
      {/* PASSAR O CURSOS NO NOME DAS CLASSES PARA VER O CSS RESULTANTE!! */}
      <h1 className='font-bold text-5xl flex items-center gap-3 text-violet-500 before:w-0.5 before:h-6 before:bg-sky-500'>Hello Tailwind</h1>
      <h2>Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button disabled className='bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'>Sign in</button>
    </div>
  );
}
