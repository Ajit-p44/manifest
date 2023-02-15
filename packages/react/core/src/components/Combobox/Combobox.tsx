import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useComboBox } from '@react-aria/combobox';
import { useFocusRing } from '@react-aria/focus';
import { useFilter } from '@react-aria/i18n';
import { useHover } from '@react-aria/interactions';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useComboBoxState } from '@react-stately/combobox';
import type { AriaComboBoxProps } from '@react-types/combobox';
import { Overlay, Placement, useOverlayPosition } from '@project44-manifest/react-overlay';
import { Popover } from '@project44-manifest/react-popover';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { ListBoxBase, ListBoxBaseProps } from '../ListBoxBase';
import { useStyles } from './Combobox.styles';

export type ComboboxElement = 'div';

export interface ComboboxOptions<T extends As = ComboboxElement>
  extends Options<T>,
    AriaComboBoxProps<object>,
    StyleProps {
  /**
   * Helper text to append to the form control input element.
   */
  helperText?: React.ReactNode;
  /**
   * Props passed to the helper text.
   */
  helperTextProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * Label of the input element
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label.
   */
  labelProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * The maxHeight specified for the overlay element.
   * By default, it will take all space up to the current viewport height.
   */
  maxHeight?: number;
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   *
   * @default 4
   */
  offset?: number;
  /**
   * The placement of the element with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
   * there is insufficient room for it to render completely.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The size of the combobox
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Icon displayed at the start of the combobox.
   */
  startIcon?: React.ReactElement;
}

export type ComboboxProps<T extends As = ComboboxElement> = Props<ComboboxOptions<T>>;

export const Combobox = createComponent<ComboboxOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    autoFocus,
    className: classNameProp,
    css,
    isDisabled,
    helperText,
    helperTextProps: helperTextPropsProp = {},
    label,
    labelProps: labelPropsProp = {},
    maxHeight,
    offset = 4,
    placement = 'bottom',
    shouldFlip = true,
    validationState,
    size = 'medium',
    startIcon,
  } = props;

  const isInvalid = validationState === 'invalid';

  const containerRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { contains } = useFilter({ sensitivity: 'base' });

  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
  });

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
  } = useComboBox(
    {
      ...props,
      buttonRef,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state,
  );

  const { overlayProps } = useOverlayPosition({
    isOpen: state.isOpen,
    maxHeight,
    offset,
    onClose: state.close,
    overlayRef: popoverRef,
    placement,
    shouldFlip,
    scrollRef: listBoxRef,
    targetRef: containerRef,
  });

  const { buttonProps } = useButton(triggerProps, buttonRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: true,
    within: true,
  });

  const handleClose = React.useCallback(() => void state.close(), [state]);

  const { className } = useStyles({
    hasStartIcon: Boolean(startIcon),
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-combobox': true,
    'manifest-combobox--disabled': isDisabled,
    'manifest-combobox--invalid': isInvalid,
    [`manifest-combobox--${size}`]: size,
  });

  const containerDimensions = containerRef.current?.getBoundingClientRect();

  return (
    <FormControl
      className={classes}
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <Comp
        {...mergeProps(hoverProps, focusProps)}
        ref={mergeRefs(containerRef, forwardedRef)}
        className="manifest-combobox__wrapper"
      >
        {startIcon && <span className="manifest-combobox__icon">{startIcon}</span>}

        <input {...inputProps} ref={inputRef} className="manifest-combobox__input" />

        <button {...buttonProps} ref={buttonRef} className="manifest-combobox__button">
          <Icon icon="expand_more" />
        </button>

        <Overlay isOpen={state.isOpen && !isDisabled}>
          <Popover
            {...overlayProps}
            ref={popoverRef}
            className="manifest-combobox__popover"
            css={{ left: containerDimensions?.left, width: containerDimensions?.width }}
            isOpen={state.isOpen}
            onClose={handleClose}
          >
            <ListBoxBase
              {...(listBoxProps as ListBoxBaseProps)}
              ref={listBoxRef}
              disallowEmptySelection
              className="manifest-combobox__list-box"
              state={state}
            />
          </Popover>
        </Overlay>
      </Comp>
    </FormControl>
  );
});