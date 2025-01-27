import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import {
  BorderStyle,
  BorderColor,
  BorderRadius,
  AlignItems,
  BackgroundColor,
  IconColor,
  TextVariant,
  TextColor,
} from '../../../../helpers/constants/design-system';
import Box from '../../../ui/box';
import { AvatarIcon, Text } from '../../../component-library';
import {
  ICON_NAMES,
  ICON_SIZES,
} from '../../../component-library/icon/deprecated';
import {
  DelineatorType,
  getDelineatorTitle,
} from '../../../../helpers/constants/flask';

export const SnapDelineator = ({
  snapName,
  type = DelineatorType.default,
  children,
}) => {
  const t = useI18nContext();
  const isError = type === DelineatorType.Error;
  return (
    <Box
      className="snap-delineator__wrapper"
      borderStyle={BorderStyle.solid}
      borderColor={BorderColor.borderDefault}
      borderRadius={BorderRadius.LG}
      backgroundColor={
        isError ? BackgroundColor.errorMuted : BackgroundColor.backgroundDefault
      }
    >
      <Box
        className="snap-delineator__header"
        alignItems={AlignItems.center}
        padding={1}
      >
        <AvatarIcon
          iconName={ICON_NAMES.SNAPS}
          size={ICON_SIZES.XS}
          backgroundColor={
            isError ? IconColor.errorDefault : IconColor.infoDefault
          }
          margin={1}
          iconProps={{
            size: ICON_SIZES.XS,
            color: IconColor.infoInverse,
          }}
        />
        <Text
          variant={TextVariant.bodySm}
          color={isError ? TextColor.errorDefault : TextColor.default}
          className="snap-delineator__header__text"
          marginLeft={1}
          marginTop={0}
          marginBottom={0}
        >
          {t(getDelineatorTitle(type), [snapName])}
        </Text>
      </Box>
      <Box className="snap-delineator__content" padding={4}>
        {children}
      </Box>
    </Box>
  );
};

SnapDelineator.propTypes = {
  snapName: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.ReactNode,
};
