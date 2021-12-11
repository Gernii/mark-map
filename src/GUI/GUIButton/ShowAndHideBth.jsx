import {BiMenu, BiChevronLeft} from 'react-icons/bi'
const ShowAndHideBtn = () => {
  return (
      <>
        <input type="checkbox" id="check" />
        <label htmlFor='check'>
          <BiChevronLeft  className='bx-arrow-back' id='back'  />
          <BiMenu className='bx-menu' id='btn' />
        </label>

      </>
  )
}

export default ShowAndHideBtn
