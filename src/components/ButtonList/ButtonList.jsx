import React from 'react';
import { Ul, Li, Button } from './ButtonListStyled';
import buttons from './buttonData';

export default function ButtonList() {
  return (
    <div>
      <Ul>
        {buttons.map(button => (
          <Li key={button.id}>
            <Button onClick={button.onClick}>{button.label}</Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
}
