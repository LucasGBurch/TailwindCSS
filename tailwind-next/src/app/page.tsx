export default function Home() {
  return (
    <div className="p-4 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen text-center flex flex-col items-center">
      {/* PASSAR O CURSOR NO NOME DAS CLASSES PARA VER O CSS RESULTANTE!! */}
      <div className=" max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl flex items-center gap-3">
          Rapidly build modern websites without ever leaving your HTML
        </h1>
        <p className="mt-4 dark:text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero nam pariatur aliquid natus animi fugiat, ipsum molestiae
          distinctio iste eligendi, quisquam tempore voluptatem ad illo eos
          molestias delectus labore!
        </p>
        <button className="bg-sky-500 dark:bg-sky-400 dark:text-sky-950 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60">
          Sign in
        </button>
      </div>
    </div>
  )
}
