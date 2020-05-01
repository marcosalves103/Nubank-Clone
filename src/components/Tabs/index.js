import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    TabsConatainer,
    TabItem,
    TabText,
} from './style';

export default function Tabs() {
    return (
        <Container>
            <TabsConatainer>
                <TabItem>
                    <MaterialIcons name="person-add" size={24} color="#fff" />
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="chat-bubble-outline" size={24} color="#fff" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-downward" size={24} color="#fff" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="arrow-upward" size={24} color="#fff" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <MaterialIcons name="lock" size={24} color="#fff" />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsConatainer>
        </Container>
    );
}
