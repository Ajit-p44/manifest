import * as tokens from '@project44-manifest/design-tokens';
import type * as Stitches from '@stitches/react';
import { defaultThemeMap } from '@stitches/react';

type Variant =
  | 'body-bold'
  | 'body'
  | 'caption-bold'
  | 'caption'
  | 'display'
  | 'heading'
  | 'subtext-bold'
  | 'subtext'
  | 'subtitle'
  | 'title';

export type VariantToken = `$${Variant}`;

type Variants = {
  [variant in VariantToken]: Stitches.CSSProperties;
};

const media = {
  lg: `(min-width: ${tokens.sizeLarge})`,
  md: `(min-width: ${tokens.sizeMedium})`,
  sm: `(min-width: ${tokens.sizeSmall})`,
  xl: `(min-width: ${tokens.sizeXLarge})`,
  xs: `(min-width: ${tokens.sizeXSmall})`,
};

const theme = {
  borderWidths: {
    large: tokens.borderWidthLarge,
    medium: tokens.borderWidthMedium,
    small: tokens.borderWidthSmall,
  },
  colors: {
    'background-danger': tokens.colorBackgroundDanger,
    'background-primary': tokens.colorBackgroundPrimary,
    'background-secondary': tokens.colorBackgroundSecondary,
    'background-side-nav': tokens.colorBackgroundSideNav,
    'background-success': tokens.colorBackgroundSuccess,
    'background-surface': tokens.colorBackgroundSurface,
    'background-tertiary': tokens.colorBackgroundTertiary,
    'background-top-nav': tokens.colorBackgroundTopNav,
    'background-warning': tokens.colorBackgroundWarning,

    'border-danger': tokens.colorBorderDanger,
    'border-disabled': tokens.colorBorderDisabled,
    'border-primary': tokens.colorBorderPrimary,
    'border-success': tokens.colorBorderSuccess,
    'border-warning': tokens.colorBorderWarning,

    'brand-default': tokens.colorBrandDefault,
    'brand-active': tokens.colorBrandActive,
    'brand-hover': tokens.colorBrandHover,
    'brand-gradient': tokens.colorBrandGradient,

    'data-viz-danger-fill': tokens.colorDataVizDangerFill,
    'data-viz-danger-hover': tokens.colorDataVizDangerHover,
    'data-viz-danger-line': tokens.colorDataVizDangerLine,
    'data-viz-neutral-fill': tokens.colorDataVizNeutralFill,
    'data-viz-neutral-hover': tokens.colorDataVizNeutralHover,
    'data-viz-primary-fill': tokens.colorDataVizPrimaryFill,
    'data-viz-primary-fill-alt': tokens.colorDataVizPrimaryFillAlt,
    'data-viz-primary-hover': tokens.colorDataVizPrimaryHover,
    'data-viz-primary-line': tokens.colorDataVizPrimaryLine,
    'data-viz-secondary-fill': tokens.colorDataVizSecondaryFill,
    'data-viz-secondary-fill-alt': tokens.colorDataVizSecondaryFillAlt,
    'data-viz-secondary-hover': tokens.colorDataVizSecondaryHover,
    'data-viz-secondary-line': tokens.colorDataVizSecondaryLine,
    'data-viz-tertiary-fill': tokens.colorDataVizTertiaryFill,
    'data-viz-tertiary-fill-alt': tokens.colorDataVizTertiaryFillAlt,
    'data-viz-tertiary-hover': tokens.colorDataVizTertiaryHover,
    'data-viz-tertiary-line': tokens.colorDataVizTertiaryLine,
    'data-viz-warning-fill': tokens.colorDataVizWarningFill,
    'data-viz-warning-hover': tokens.colorDataVizWarningHover,
    'data-viz-warning-line': tokens.colorDataVizWarningLine,

    'palette-black': tokens.colorPaletteBlack,
    'palette-white': tokens.colorPaletteWhite,
    'palette-blue-50': tokens.colorPaletteBlue50,
    'palette-blue-100': tokens.colorPaletteBlue100,
    'palette-blue-200': tokens.colorPaletteBlue200,
    'palette-blue-300': tokens.colorPaletteBlue300,
    'palette-blue-400': tokens.colorPaletteBlue400,
    'palette-blue-500': tokens.colorPaletteBlue500,
    'palette-blue-600': tokens.colorPaletteBlue600,
    'palette-blue-700': tokens.colorPaletteBlue700,
    'palette-blue-800': tokens.colorPaletteBlue800,
    'palette-blue-900': tokens.colorPaletteBlue900,
    'palette-brown-50': tokens.colorPaletteBrown50,
    'palette-brown-100': tokens.colorPaletteBrown100,
    'palette-brown-200': tokens.colorPaletteBrown200,
    'palette-brown-300': tokens.colorPaletteBrown300,
    'palette-brown-400': tokens.colorPaletteBrown400,
    'palette-brown-500': tokens.colorPaletteBrown500,
    'palette-brown-600': tokens.colorPaletteBrown600,
    'palette-brown-700': tokens.colorPaletteBrown700,
    'palette-brown-800': tokens.colorPaletteBrown800,
    'palette-brown-900': tokens.colorPaletteBrown900,
    'palette-green-50': tokens.colorPaletteGreen50,
    'palette-green-100': tokens.colorPaletteGreen100,
    'palette-green-200': tokens.colorPaletteGreen200,
    'palette-green-300': tokens.colorPaletteGreen300,
    'palette-green-400': tokens.colorPaletteGreen400,
    'palette-green-500': tokens.colorPaletteGreen500,
    'palette-green-600': tokens.colorPaletteGreen600,
    'palette-green-700': tokens.colorPaletteGreen700,
    'palette-green-800': tokens.colorPaletteGreen800,
    'palette-green-900': tokens.colorPaletteGreen900,
    'palette-grey-50': tokens.colorPaletteGrey50,
    'palette-grey-100': tokens.colorPaletteGrey100,
    'palette-grey-200': tokens.colorPaletteGrey200,
    'palette-grey-300': tokens.colorPaletteGrey300,
    'palette-grey-400': tokens.colorPaletteGrey400,
    'palette-grey-500': tokens.colorPaletteGrey500,
    'palette-grey-600': tokens.colorPaletteGrey600,
    'palette-grey-700': tokens.colorPaletteGrey700,
    'palette-grey-800': tokens.colorPaletteGrey800,
    'palette-grey-900': tokens.colorPaletteGrey900,
    'palette-indigo-50': tokens.colorPaletteIndigo50,
    'palette-indigo-100': tokens.colorPaletteIndigo100,
    'palette-indigo-200': tokens.colorPaletteIndigo200,
    'palette-indigo-300': tokens.colorPaletteIndigo300,
    'palette-indigo-400': tokens.colorPaletteIndigo400,
    'palette-indigo-500': tokens.colorPaletteIndigo500,
    'palette-indigo-600': tokens.colorPaletteIndigo600,
    'palette-indigo-700': tokens.colorPaletteIndigo700,
    'palette-indigo-800': tokens.colorPaletteIndigo800,
    'palette-indigo-900': tokens.colorPaletteIndigo900,
    'palette-orange-50': tokens.colorPaletteOrange50,
    'palette-orange-100': tokens.colorPaletteOrange100,
    'palette-orange-200': tokens.colorPaletteOrange200,
    'palette-orange-300': tokens.colorPaletteOrange300,
    'palette-orange-400': tokens.colorPaletteOrange400,
    'palette-orange-500': tokens.colorPaletteOrange500,
    'palette-orange-600': tokens.colorPaletteOrange600,
    'palette-orange-700': tokens.colorPaletteOrange700,
    'palette-orange-800': tokens.colorPaletteOrange800,
    'palette-orange-900': tokens.colorPaletteOrange900,
    'palette-pink-50': tokens.colorPalettePink50,
    'palette-pink-100': tokens.colorPalettePink100,
    'palette-pink-200': tokens.colorPalettePink200,
    'palette-pink-300': tokens.colorPalettePink300,
    'palette-pink-400': tokens.colorPalettePink400,
    'palette-pink-500': tokens.colorPalettePink500,
    'palette-pink-600': tokens.colorPalettePink600,
    'palette-pink-700': tokens.colorPalettePink700,
    'palette-pink-800': tokens.colorPalettePink800,
    'palette-pink-900': tokens.colorPalettePink900,
    'palette-purple-50': tokens.colorPalettePurple50,
    'palette-purple-100': tokens.colorPalettePurple100,
    'palette-purple-200': tokens.colorPalettePurple200,
    'palette-purple-300': tokens.colorPalettePurple300,
    'palette-purple-400': tokens.colorPalettePurple400,
    'palette-purple-500': tokens.colorPalettePurple500,
    'palette-purple-600': tokens.colorPalettePurple600,
    'palette-purple-700': tokens.colorPalettePurple700,
    'palette-purple-800': tokens.colorPalettePurple800,
    'palette-purple-900': tokens.colorPalettePurple900,
    'palette-red-50': tokens.colorPaletteRed50,
    'palette-red-100': tokens.colorPaletteRed100,
    'palette-red-200': tokens.colorPaletteRed200,
    'palette-red-300': tokens.colorPaletteRed300,
    'palette-red-400': tokens.colorPaletteRed400,
    'palette-red-500': tokens.colorPaletteRed500,
    'palette-red-600': tokens.colorPaletteRed600,
    'palette-red-700': tokens.colorPaletteRed700,
    'palette-red-800': tokens.colorPaletteRed800,
    'palette-red-900': tokens.colorPaletteRed900,
    'palette-yellow-50': tokens.colorPaletteYellow50,
    'palette-yellow-100': tokens.colorPaletteYellow100,
    'palette-yellow-200': tokens.colorPaletteYellow200,
    'palette-yellow-300': tokens.colorPaletteYellow300,
    'palette-yellow-400': tokens.colorPaletteYellow400,
    'palette-yellow-500': tokens.colorPaletteYellow500,
    'palette-yellow-600': tokens.colorPaletteYellow600,
    'palette-yellow-700': tokens.colorPaletteYellow700,
    'palette-yellow-800': tokens.colorPaletteYellow800,
    'palette-yellow-900': tokens.colorPaletteYellow900,

    'primary-default': tokens.colorPrimaryDefault,
    'primary-active': tokens.colorPrimaryActive,
    'primary-hover': tokens.colorPrimaryHover,

    'text-contrast': tokens.colorTextContrast,
    'text-danger': tokens.colorTextDanger,
    'text-disabled': tokens.colorTextDisabled,
    'text-primary': tokens.colorTextPrimary,
    'text-secondary': tokens.colorTextSecondary,
    'text-success': tokens.colorTextSuccess,
    'text-tertiary': tokens.colorTextTertiary,
    'text-warning': tokens.colorTextWarning,
  },
  opacity: {
    disabled: tokens.opacityDisabled,
  },

  motion: {
    'duration-instant': tokens.motionDurationInstant,
    'duration-short': tokens.motionDurationShort,
    'duration-medium': tokens.motionDurationMedium,
    'duration-long': tokens.motionDurationLong,
    'easing-linear': tokens.motionEasingLinear,
    'easing-standard': tokens.motionEasingStandard,
    'easing-entrance': tokens.motionEasingEntrance,
    'easing-exit': tokens.motionEasingExit,
  },

  fonts: {
    character: "'Noto Sans', sans-serif",
    mono: tokens.fontFamilyMono,
    text: tokens.fontFamilyText,
  },
  fontSizes: {
    large: tokens.fontSizeLarge,
    medium: tokens.fontSizeMedium,
    small: tokens.fontSizeSmall,
    'x-large': tokens.fontSizeXLarge,
    'x-small': tokens.fontSizeXSmall,
    'xx-large': tokens.fontSizeXxLarge,
  },
  fontWeights: {
    bold: tokens.fontWeightBold,
    regular: tokens.fontWeightRegular,
    semibold: tokens.fontWeightSemibold,
  },
  letterSpacings: {
    large: tokens.letterSpacingLarge,
    medium: tokens.letterSpacingMedium,
    small: tokens.letterSpacingSmall,
    'x-small': tokens.letterSpacingXSmall,
  },
  lineHeights: {
    large: tokens.lineHeightLarge,
    medium: tokens.lineHeightMedium,
    small: tokens.lineHeightSmall,
    'x-large': tokens.lineHeightXLarge,
    'x-small': tokens.lineHeightXSmall,
    'xx-large': tokens.lineHeightXxLarge,
  },
  radii: { full: tokens.radiusFull, small: tokens.radiusSmall },
  shadows: { large: tokens.shadowLarge, medium: tokens.shadowMedium, small: tokens.shadowSmall },
  sizes: {
    large: tokens.sizeLarge,
    medium: tokens.sizeMedium,
    small: tokens.sizeSmall,
    'x-large': tokens.sizeXLarge,
    'x-small': tokens.sizeXSmall,
  },
  space: {
    medium: tokens.spaceMedium,
    small: tokens.spaceSmall,
    large: tokens.spaceLarge,
    'x-large': tokens.spaceXLarge,
    'x-small': tokens.spaceXSmall,
  },
  zIndices: {
    dropdown: tokens.zIndexDropdown,
    modal: tokens.zIndexModal,
    overlay: tokens.zIndexOverlay,
    popover: tokens.zIndexPopover,
    sticky: tokens.zIndexSticky,
    tooltip: tokens.zIndexTooltip,
  },
};

const themeMap = defaultThemeMap;

const variants: Variants = {
  $display: {
    fontSize: '$xx-large',
    fontWeight: '$bold',
    letterSpacing: '$x-small',
    lineHeight: '$xx-large',
  },
  $heading: {
    fontSize: '$x-large',
    fontWeight: '$bold',
    letterSpacing: '$small',
    lineHeight: '$x-large',
  },
  $title: {
    fontSize: '$large',
    fontWeight: '$bold',
    letterSpacing: '$medium',
    lineHeight: '$large',
  },
  $subtitle: {
    fontSize: '$medium',
    fontWeight: '$bold',
    letterSpacing: '$medium',
    lineHeight: '$medium',
  },
  $body: {
    fontSize: '$medium',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$medium',
  },
  '$body-bold': {
    fontSize: '$medium',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$medium',
  },
  $subtext: {
    fontSize: '$small',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$small',
  },
  '$subtext-bold': {
    fontSize: '$small',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$small',
  },
  $caption: {
    fontSize: '$x-small',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$x-small',
  },
  '$caption-bold': {
    fontSize: '$x-small',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$x-small',
  },
};

export const utils = {
  // Color
  bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({ backgroundColor: value }),

  // Layout
  d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
  h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
  minH: (value: Stitches.PropertyValue<'minHeight'>) => ({ minHeight: value }),
  minW: (value: Stitches.PropertyValue<'minWidth'>) => ({ minWidth: value }),
  size: (value: Stitches.PropertyValue<'width'>) => ({ height: value, width: value }),
  w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),

  // Space
  m: (value: Stitches.PropertyValue<'margin'>) => ({ margin: value }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({ marginRight: value }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginBottom: value, marginTop: value }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingBottom: value,
    paddingTop: value,
  }),

  // Typography
  typography: (variant: VariantToken) => variants[variant],
};

export const defaultTheme = {
  prefix: 'manifest',
  theme,
  media,
  utils,
  themeMap,
};
