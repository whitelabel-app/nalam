import React from 'react';
import { Container, Label } from './styled';

function Header({ label }) {
    if (typeof label === 'string') {
        return <Label>{label}</Label>;
    }
    return label;
}

export default function Section(props) {
    const { label, children, style } = props;

    return (
        <Container style={style}>
            <Header label={label} />
            {children}
        </Container>
    );
}
