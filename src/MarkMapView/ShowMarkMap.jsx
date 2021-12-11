import { useEffect, useRef } from "react"
import {Transformer} from 'markmap-lib'
import {Markmap} from 'markmap-view'
function ShowMarkMap({markDown, option}){
  if (window.innerWidth <= 480){
    option = null
  }
  const ref = useRef(null);
  useEffect(() => {
      ref.current.innerHTML = "";
      const transformer = new Transformer()
      const { root} = transformer.transform(markDown)
      Markmap.create('#mindmap', option, root)
  }, [markDown, option])
  return <svg ref={ref} id = {"mindmap"}> </svg>
}

export default ShowMarkMap