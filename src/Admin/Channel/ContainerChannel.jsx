import React from 'react';
import Channels from './Channels'
import ModalChannel from './ModalChannel'

const ContainerChannel = () => {
    return ( <div>
        <ModalChannel labelButton="Crear" isPost={true}/>
        <Channels/>
    </div> );
}
 
export default ContainerChannel;