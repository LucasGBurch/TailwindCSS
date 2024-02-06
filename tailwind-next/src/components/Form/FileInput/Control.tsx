import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />
  /* sr-only Tailwind: input fica invisível e funciona como parte da label de selecionar o arquivo!! */
}
