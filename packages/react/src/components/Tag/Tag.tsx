import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { useStyles } from './Tag.styles';

export type TagElement = 'div';

export interface TagOptions<T extends As = TagElement> extends Options<T>, StyleProps {
  /**
   * Whether the tag is removeable.
   */
  isRemovable?: boolean;
  /**
   * Handler called on tag removable.
   */
  onRemove?(): void;
}

export type TagProps<T extends As = TagElement> = Props<TagOptions<T>>;

export const Tag = createComponent<TagOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isRemovable,
    onRemove,
    ...other
  } = props;

  const { className } = useStyles({ css, isRemovable });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-tag')} ref={forwardedRef}>
      <Typography className="manifest-tag__text" variant="caption">
        {children}
      </Typography>
      {isRemovable && (
        <IconButton
          aria-label="remove"
          className="manifest-tag__button"
          onClick={onRemove}
          size="small"
          variant="tertiary"
        >
          <Icon className="manifest-tag__icon" icon="clear" />
        </IconButton>
      )}
    </Comp>
  );
});
