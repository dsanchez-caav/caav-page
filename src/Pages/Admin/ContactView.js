import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { CContactView } from '../../Components';
import { useParams } from 'react-router-dom'
import Getcontact from '../../Context/SearchContact';

const ContactView = () => {
  let { id } = useParams();
  window.scrollTo(0, 0);
  const [t, i18n] = useTranslation("global");

  const [contacts, setContacts] = React.useState([]);

  function ActualizarContact(id) {
    Getcontact(id).then((contacts) => {
      setContacts(contacts);
    });
  }

  React.useEffect(() => {
    ActualizarContact(id);
  }, []);



  return (
    <>
      <Helmet>
        <title>CAAV - {t("pagestitles.pageadminconview")} </title>
      </Helmet>
      {contacts && contacts.map((contact) => (
        <>
          <CContactView name={contact.data().user_name} email={contact.data().user_email} phone={contact.data().user_phone} mess={contact.data().message} date={contact.data().Date} />
        </>
      ))}

    </>
  )
}

export default ContactView