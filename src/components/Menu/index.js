import React from 'react';
import SvgQRCode from 'react-native-qrcode-svg';
import { QRCode as CustomQRCode } from 'react-native-custom-qr-codes-expo';

import { Container, Code } from './styles';

export default function Menu() {
    return (
        <Container>
            <Code>
                <CustomQRCode
                    value="https://rychillie.net"
                    size={80}
                    color="#fff"
                    backgroundColor="#8B10AE"
                />
            </Code>
        </Container>
    );
}
