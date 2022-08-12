import moment from 'moment';
import {IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle} from "@ionic/react";
import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
export interface Todo {
  id: number
  title: string
  description: string
  created_at: string
}
interface TodoCardProps {
  todo: Todo
}
const TodoCard = ({todo}: TodoCardProps) => {
  const {
    onDeleteTodoClick,
    onEditTodoClick,
  } = useContext(TodoContext)
  return (
    <IonCard>
    <IonCardTitle className={"ion-padding"}>{todo.title}</IonCardTitle>
    <IonCardSubtitle className={"ion-padding-horizontal"}>{moment(todo.created_at).format("MM-DD-YYYY, hh:mmA")}</IonCardSubtitle>
    <IonCardContent>
      {todo.description}
      <IonButtons>
        <IonButton
          onClick={() => onEditTodoClick(todo)}
          color={"secondary"} fill={"solid"}>
          Edit
        </IonButton>
        <IonButton
          onClick={() => onDeleteTodoClick(todo.id)}
          color={"danger"} fill={"solid"}>
          Delete
        </IonButton>
      </IonButtons>
    </IonCardContent>
  </IonCard>
  );
}
export default TodoCard;
