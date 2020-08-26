import React, {useEffect} from "react"
import { connect } from 'react-redux'

import {fetchContacts, deleteContact} from "./../store/actions/contacts.action"
import Icon from './common/icons'

const ContactList = ({
    tokenId,
    totalContacts,
    contactList,
    fetchContacts,
    deleteContact
}) => {

    useEffect(() => {
        fetchContacts()
    },[])

  

   const renderProfileImage = (url) => {
       return <img className="dp" src={url} alt="" />
   }

    return(
        <div>
            <div className="title"> Contact List <p className="sub_txt">({totalContacts ? totalContacts : '...'}) </p> </div>
                {
                    contactList ?
                    <table>
                        <thead className="contact_th">
                            <td> Name </td>
                            <td> Email </td>
                            <td> Phone </td>
                        </thead>
                        {
                            contactList.map(contact => (
                            <tr>
                                <td> 
                                    <span>{renderProfileImage(contact.photo) } </span>
                                    <span cla="ct-name"> {contact.name}  </span>
                                </td>
                                <td> {contact.email || '-'} </td>
                                <td> {contact.phoneNumber} </td>
                                <td onClick={() => deleteContact(contact.metaData.resourceName) } className="clickable_item hover_view">
                                    <Icon name="delete"/>
                                </td>
                            </tr>
                           ))
                        }
                    </table>
                    : ''
                }
            
        </div>
        
    )
}

const mapStateToProps = state => ({
    contactList: state.contacts.contactList,
    totalContacts: state.contacts.totalItems,
    tokenId: state.user.tokenId,
})

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts()),
    deleteContact: (payload) => dispatch(deleteContact(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)