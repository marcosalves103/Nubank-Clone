import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    Title,
    Description,
    CardFooter,
    Annotation,
} from './styles';

export default function Main() {
    return (
        <Container>
            <Header />

            <Content>
                <Menu/>
                <Card>
                    <CardHeader>
                        <MaterialIcons name="attach-money" size={28} color="#666" />
                        <MaterialIcons name="visibility-off" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 197.143,67</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Transfência de R$ 20,00 recebida de Tiagu MB hoje às 06:00h
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs />
        </Container>
    );
}
