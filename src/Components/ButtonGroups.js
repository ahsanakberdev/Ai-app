import {React} from 'react'
import { Video,ScreenShare } from '../Imports/ImportImages'
import ModalBox from './Modal/ModalBox';

function ButtonGroups() {
  return (
    <div className='button-groups'>
        <button>
            <img src={Video} alt='call'/>
            Video Call
        </button>
        <button>
            <img src={ScreenShare} alt='screenshare'/>
            Screenshare
        </button>

    </div>
  )
}

export default ButtonGroups