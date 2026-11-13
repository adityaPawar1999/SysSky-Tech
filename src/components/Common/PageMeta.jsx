import { useEffect } from 'react'
export function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | SYSSKYTECH`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.content = description
  }, [title, description])
  return null
}
