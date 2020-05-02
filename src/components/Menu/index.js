import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { QRCode as CustomQRCode } from 'react-native-custom-qr-codes-expo';

import {
    Container,
    Code,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText,
} from './styles';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            }),
        }}
        >
            <Code>
                <CustomQRCode
                    content="https://rychillie.net"
                    size={80}
                    color="#fff"
                    backgroundColor="#8B10AE"
                />
            </Code>

            <Nav>
                <NavItem>
                    <MaterialIcons name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}
