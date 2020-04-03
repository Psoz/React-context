import ModalContext from "./ModalContext";
import React, { useState } from 'react';

const ModalProvider = ({children}) => {
  const [modals,setModals] = useState({});

  const addModal = (name,modalState) => {
    setModals({...modals, 
      [name]:modalState});
  } 

  const openModal = (name,component) => {
    modals[name].isOpen(true);
    modals[name].componentToRender(component);
  }

  const closeModal = (name) => {
    modals[name].isOpen(false);
  }


  const context = {
    addModal,
    modals,
    openModal,
    closeModal,
  }


    return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}

export default ModalProvider;