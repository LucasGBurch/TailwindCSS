'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  // Memorizando cálculo pesado para o navegador com o Memo. Só mudará se os arquivos selecionados mudarem, em vez de a cada renderização que não faz diferença.
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    // Objeto com o primeiro arquivo selecionado do Array, caso haja algum:
    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full dark:bg-violet-500/10">
        <User className="w-8 h-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover" // obj-cover para cobrir sem distorção de imagem
      />
    )
  }
}
