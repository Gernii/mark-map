import {RadioInput, ShowAndHideBtn, markmap} from "../assets/FunctionStorage"

const GUIViewer = ({checked, onChange}) => {
  return (
    <>
      <ShowAndHideBtn />
      <div className='sidebar'>
        <header>MODEL</header>
        <ul className='submenu'>
        {
          markmap.map(value => {
            return <RadioInput label={value.name} value={value.id} key = {value.id} checked={checked} setter={onChange}/>
          })
        }
        <li>
          <div></div>
        </li>
        </ul>
      </div>
    </>
  )
}

export default GUIViewer