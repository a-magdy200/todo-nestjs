import {IonButton, IonButtons, IonContent, IonInput, IonItem, IonLabel, IonModal, IonTextarea} from "@ionic/react";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../context/TodoContext";

const TodoFormModal = () => {
  const {
    todoFormModalState,
    closeTodoFormModal,
    onSubmit,
  } = useContext(TodoContext)
  const {todo} = todoFormModalState;
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const onSubmitClick = () => {
    onSubmit({
      ...todo,
      title,
      description
    })
  }
  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [todo.id])
  return (
    <IonModal className={"custom-modal"} onWillDismiss={closeTodoFormModal} isOpen={todoFormModalState.isOpen}>
      <IonContent className="ion-padding">
        <IonItem className={"ion-margin-bottom"}>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput
            value={title}
            onIonChange={e => {
              if (e?.target?.value) {
                setTitle(e.target.value.toString())
              }
            }}
            type="text"
            placeholder="Cook dinner"
          />
        </IonItem>
        <IonItem className={"ion-margin-bottom"}>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea
            value={description}
            onIonChange={e => {
              if (e?.target?.value) {
                setDescription(e.target.value.toString())
              }
            }}
            placeholder="Grab ingredients..." />
        </IonItem>
        <IonItem className={"ion-justify-content-center ion"}>
          <IonButtons >
            <IonButton onClick={closeTodoFormModal} fill={"solid"} color={"danger"}>
              Cancel
            </IonButton>
            <IonButton onClick={onSubmitClick} fill={"solid"} color={"success"}>
              Save
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonContent>
    </IonModal>
  );
}
export default TodoFormModal;
