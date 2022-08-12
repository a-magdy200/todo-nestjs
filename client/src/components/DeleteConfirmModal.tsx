import {IonButton, IonButtons, IonContent, IonItem, IonModal} from "@ionic/react";
import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";

const DeleteConfirmModal = () => {
  const {
    todoDeleteModalState,
    onDeleteTodoSubmit,
    closeTodoDeleteModal,
  } = useContext(TodoContext)
  return (
    <IonModal className={"custom-modal"} onWillDismiss={closeTodoDeleteModal} isOpen={todoDeleteModalState.isOpen}>
      <IonContent className="ion-padding">
        <IonItem className={"ion-margin-bottom"}>
          Are you sure you want to delete this item?
        </IonItem>
        <IonItem className={"ion-justify-content-center ion"}>
          <IonButtons>
            <IonButton onClick={closeTodoDeleteModal} fill={"solid"} color={"light"}>
              Cancel
            </IonButton>
            <IonButton onClick={onDeleteTodoSubmit} fill={"solid"} color={"danger"}>
              Yes, I'm sure
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonContent>
    </IonModal>
  );
}
export default DeleteConfirmModal;
