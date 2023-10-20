import {useContext} from 'react'
import { UIContext } from '../context/UIcontext'

function TeamModal() {
    const {openModal, teamMember,setModal } = useContext(UIContext);
    const {image, name, about, position} = teamMember


    return ( 
        <div className={`team-modal ${openModal && "toggle-modal"}`} onMouseEnter={()=>setModal(true)} onMouseLeave={()=>setModal(false)}>

            <div className="member-info  shadow" >
                <div className="row position-relative"  >
                    <div className="col-sm-4 p-0">
                        <div className="modal-image h-100"  style={{ background: `url(${image}) center center/cover no-repeat` }}>
                           
                        </div>
                    </div>
                    <div className="col-sm-8 team-context-container">
                        <div>
                            <h4 className='bold mb-4'>{name}</h4>
                            <h4 className=' bold'>{position}</h4>
                            <div className="team-info-context">
                                <p> {about} </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeamModal