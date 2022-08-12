import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, {useContext} from "react";
import TodoCard from "../components/TodoCard";
import TodoFormModal from "../components/TodoFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import {TodoContext} from "../context/TodoContext";

const Home: React.FC = () => {
  const {
    todos,
    onAddNewTodoButtonClick,
  } = useContext(TodoContext)
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Todos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
          <IonGrid className={"ion-margin-bottom"}>
            <IonRow>
              <IonCol className={"ion-text-center"}>
                <IonButton onClick={onAddNewTodoButtonClick}>Add New TODO</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonContent>
            {todos.map((todo, i) => (
              <TodoCard
                key={i}
                todo={todo}/>
            ))}
            {todos.length === 0 ? (
              <IonItem className={"ion-margin-bottom"}>
                <IonGrid>
                  <IonRow>
                    <IonCol className={"ion-text-center"}>
                      <IonText>
                        No todos added yet
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ) : null}
          </IonContent>
        </IonContent>
        <DeleteConfirmModal/>
        <TodoFormModal/>
      </IonPage>
  );
};

export default Home;
