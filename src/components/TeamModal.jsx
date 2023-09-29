import {useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import { UIContext } from '../context/UIcontext'

function TeamModal() {
    const {handleModal, openModal, teamMember } = useContext(UIContext);
    const {image, name, about, position} = teamMember


    return (
        <div className={`team-modal ${openModal && "toggle-modal"}`}>

            <div className="member-info">
                <div className="row position-relative">
                    <div className="col-sm-4 p-0">
                        <div className="modal-image h-100">
                            <img src={image} alt="" className='w-100' />
                        </div>
                    </div>
                    <div className="col-sm-8 team-context-container">
                        <div>
                            <h4 className='bold'>{name}</h4>
                            <h4 className=' bold'>{position}</h4>
                            <div className="team-info-context">
                                <p> {about} </p>
                            </div>
                        </div>
                    </div>
                    <FaTimes className='hide' onClick={handleModal} />
                </div>

            </div>
        </div>
    )
}

export default TeamModal