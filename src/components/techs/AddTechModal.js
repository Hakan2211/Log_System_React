import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addTech} from '../../actions/techActions'


const AddTechModal = ({addTech}) => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const onSubmit = () => {
        if(firstName ==='' || lastName ===''){
            M.toast({html: 'Please enter the first and last name'})
        }else{
            addTech({
                firstName,
                lastName
            })
            M.toast({html: `${firstName} ${lastName} was added as a tech.`})

            setFirstName('')
            setLastName('')
            
        }
       
    }
    
    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name='FirstName' 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First name
                        </label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name='LastName' 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="LastName" className="active">
                            Last name
                        </label>
                    </div>
                </div>

            </div>
            
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">
                    Enter
                </a>
            </div> 

        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}


export default connect(null, {addTech})(AddTechModal)
