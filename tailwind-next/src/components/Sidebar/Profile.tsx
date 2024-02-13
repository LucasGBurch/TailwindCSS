/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile pb-4">
      <img
        src="https://github.com/LucasGBurch.png"
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Lucas Burch</span>
        <span className="truncate text-sm text-zinc-500">
          lucasburch@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
