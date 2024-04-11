import React from 'react';

import NoServicesMessage from './NoServicesMessage';
import Clock from './Clock';
import TrainServices from './TrainServices';

import './css/font.less';

import { css } from '@emotion/react';

import { processServices } from '../../../api/ProcessServices';
import { isValidResponseApi, useServiceInformation } from '../../../hooks/useServiceInformation';

interface IProps {
  platforms?: string[];
  station: string;
  useLegacyTocNames?: boolean;
  showUnconfirmedPlatforms: boolean;
  hasCasing: boolean;
}

const base = css`
  --board-width: 2250px;
  --board-height: 470px;
  --row-height: calc(var(--board-height) / 4);

  width: var(--board-width);
  height: var(--board-height);
  background: #000;
  padding: 24px;

  user-select: none;

  font-family: 'DataDisplay';
  color: hsl(39, 100%, 45%);
  font-size: 72px;

  position: relative;

  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  display: flex;
  flex-direction: column;
`;

export default function FullBoard({ station, platforms, useLegacyTocNames, showUnconfirmedPlatforms, hasCasing }: IProps) {
  const [trainData] = useServiceInformation(station);

  const services = isValidResponseApi(trainData)
    ? processServices(trainData.trainServices!!, platforms ?? null, !!useLegacyTocNames, station, showUnconfirmedPlatforms).filter(
        (s) => !s.hasDeparted
      )
    : null;

  const css = [base, hasCasing && { '--board-height': '580px', padding: 84, paddingLeft: 96 }];

  if (!services || services.length === 0) {
    return (
      <article css={css}>
        <NoServicesMessage />
        <Clock />
      </article>
    );
  }

  return (
    <article css={css}>
      <TrainServices services={services} />
      <Clock />
    </article>
  );
}
