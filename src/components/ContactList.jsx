import React, {useEffect} from "react"
import { connect } from 'react-redux'

import {fetchContacts, deleteContact} from "./../store/actions/contacts.action"
import Icon from './common/icons'
import UserInfo from './common/UserInfo'

const ContactList = ({
    totalContacts,
    contactList,
    fetchContacts,
    deleteContact
}) => {

    useEffect(() => {
        fetchContacts()
    },[])


    return(
        <div>
            <div className="title"> Contact List <p className="sub_txt">({totalContacts ? totalContacts : '...'}) </p> </div>
                {
                    contactList ?
                    <table>
                        <thead className="contact_th">
                            <td className="w_40"></td>
                            <td> Name </td>
                            <td> Email </td>
                            <td> Phone </td>
                            <td> Action </td>
                        </thead>
                        {
                            contactList.map(contact => (
                            <tr className="reactangle_box">
                                <td></td>
                                <td> 
                                    <UserInfo name={contact.name} dp_url={contact.photo} />
                                </td>
                                <td> {contact.email || '-'} </td>
                                <td> {contact.phoneNumber} </td>
                                <td onClick={() => deleteContact(contact.metaData.resourceName)}>
                                    <span className="clickable_item hover_view"> <Icon name="delete"/> </span>
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