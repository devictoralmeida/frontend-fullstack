import { StyledButton } from "../../styles/buttons";
import { StyledHeadline2, StyledParagraph } from "../../styles/typography";
import ContactsLists from "../ContactsLists/ContactsLists";
import AddContactModal from "../AddContactModal/AddContactModal";
import { useContactsContext } from "../../providers/ContactContext";

const Dashboard = () => {
  const { isAddModal, setIsAddModal, contactsList } = useContactsContext();

  console.log(contactsList)

  return (
    <>
      {isAddModal ? <AddContactModal /> : null}
      <div className="dashboardContainer">
        <div className="contacts-header">
          <StyledHeadline2 fontsize="medium">Contatos</StyledHeadline2>
          <StyledButton
            buttonstyle="disabled"
            buttonsize="medium"
            padding="none"
            onClick={() => setIsAddModal(true)}
          >
            +
          </StyledButton>
        </div>
        {contactsList.length >= 1 ? (
          <ContactsLists />
        ) : (
          <StyledParagraph fontweight="bold" color="gray">
            O cliente ainda não possui nenhum contato cadastrado
          </StyledParagraph>
        )}
      </div>
    </>
  );
};

export default Dashboard;
