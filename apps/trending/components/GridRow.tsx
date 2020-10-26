import React from 'react';
import styled from 'styled-components';

import styles from '../styles/gridRow.module.css';

import { Tile } from './Tile';

interface GridRowProps {
  totalRows: number;
  rowData: any[];
}

export const GridRow = (props: GridRowProps) => {
  const GridRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: ${100 / props.totalRows}%;
    flex-grow: 0;
  `;

  return (
    <GridRowContainer className={styles.gridRowContainer}>
      {props.rowData.map(image => (
        <Tile key={image.id} imageId={image.id} imageUrl={image.images.original.url} />
      ))}
    </GridRowContainer>
  );
};
