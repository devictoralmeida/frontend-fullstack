import { StyledHeadline2, StyledHeadline3, StyledParagraph } from "../../styles/typography";
import { StyledClientModal } from "./style";
import { StyledButton } from "../../styles/buttons";
import { useState } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeydownPress } from "../../hooks/useKeydownPress";
import { useClientContext } from "../../providers/ClientContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const RemoveClientModal = () => {
  const { client, setIsRemoveClientModal, handleLogout } = useClientContext();
  const [loading, setLoading] = useState(false);

  const modalRef = useOutClick(() => setIsRemoveClientModal(false));
  const buttonRef = useKeydownPress("Escape", (element) => element?.click());

  const removeClient = async () => {
    try {
      setLoading(true);

      await api.delete(`/clients/${client!.id}`);

      toast.success("Cliente deletado com sucesso", {
        className: "toast-sucess",
      });
    } catch (error: any) {
      toast.error("Oops! Algo deu errado ao deletar o cliente", {
        className: "toast-error",
      });
    } finally {
      setIsRemoveClientModal(false);
      handleLogout();
      setLoading(false);
    }
  };

  return (
    <div className="modalOverlay" role="dialog">
      <StyledClientModal ref={modalRef}>
        <header>
          <StyledHeadline2 fontweight="bold" fontsize="small">
            Cliente
          </StyledHeadline2>
          <StyledParagraph
            fontweight="bold"
            color="gray"
            ref={buttonRef}
            onClick={() => setIsRemoveClientModal(false)}
          >
            X
          </StyledParagraph>
        </header>
        <div className="remove-content">
          <StyledHeadline3 fontweight="bold" fontsize="medium">
            Tem certeza que deseja excluir o cliente {client!.full_name}?
          </StyledHeadline3>
          <div className="buttons-container">
            <StyledButton
              type="button"
              buttonsize="medium"
              buttonstyle="danger"
              disabled={loading}
              onClick={async () => removeClient()}
            >
              {loading ? "Excluindo..." : "Excluir cliente"}
            </StyledButton>
            <StyledButton
              type="button"
              buttonsize="medium"
              buttonstyle="register"
              disabled={loading}
              onClick={() => setIsRemoveClientModal(true)}
            >
              Voltar
            </StyledButton>
          </div>
        </div>
      </StyledClientModal>
    </div>
  );
};

export default RemoveClientModal;
