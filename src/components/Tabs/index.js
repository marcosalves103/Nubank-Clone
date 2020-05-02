import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    TabsConatainer,
    TabItem,
    TabText,
} from './style';

export default function Tabs({ translateY }) {
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                }),
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp',
            }),
        }}
        >
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
