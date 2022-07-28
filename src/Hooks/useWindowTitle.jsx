import { useEffect } from 'react'

export default function useWindowTitle(title) {
  useEffect(() => {
    document.title = `Zip it solar | ${title}`
  }, [title])
}
