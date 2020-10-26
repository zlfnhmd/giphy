import React from 'react';
import styled from 'styled-components';

import styles from '../styles/gridRow.module.css';

import { Tile } from './Tile';

interface GridRowProps {
  rows: number;
  rowData: any[];
  handleClick(index: number): void;
}

export const GridRow = (props: GridRowProps) => {
  const GridRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: ${100 / props.rows}%;
    flex-grow: 0;
  `;

  return (
    <GridRowContainer className={styles.gridRowContainer}>
      {props.rowData.map((image, index) => (
        <Tile key={image.id} handleClick={props.handleClick} imageIndex={index} imageUrl={image.images.original.url} />
      ))}
    </GridRowContainer>
  );
};
