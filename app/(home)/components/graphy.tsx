import React, { FC } from 'react';

interface GraphyProps {
  src: string;
}

const Graphy: FC<GraphyProps> = ({ src }) => (
  <iframe
    src={src}
    style={{ width: '100%', height: '150%', border: 'none' }}
    allowFullScreen
  />
);

export default Graphy;
