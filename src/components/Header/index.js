import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Top, Logo, Title } from './style';

import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Rychillie</Title>
            </Top>

            <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
        </Container>
    );
}
