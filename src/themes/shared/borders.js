/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import type {BordersT} from '../types.js';

const borders: BordersT = {
  border100: {
    borderTopColor: 'hsla(0, 0%, 0%, 0.04)',
    borderRightColor: 'hsla(0, 0%, 0%, 0.04)',
    borderBottomColor: 'hsla(0, 0%, 0%, 0.04)',
    borderLeftColor: 'hsla(0, 0%, 0%, 0.04)',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
  },
  border200: {
    borderTopColor: 'hsla(0, 0%, 0%, 0.08)',
    borderRightColor: 'hsla(0, 0%, 0%, 0.08)',
    borderBottomColor: 'hsla(0, 0%, 0%, 0.08)',
    borderLeftColor: 'hsla(0, 0%, 0%, 0.08)',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
  },
  border300: {
    borderTopColor: 'hsla(0, 0%, 0%, 0.12)',
    borderRightColor: 'hsla(0, 0%, 0%, 0.12)',
    borderBottomColor: 'hsla(0, 0%, 0%, 0.12)',
    borderLeftColor: 'hsla(0, 0%, 0%, 0.12)',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
  },
  border400: {
    borderTopColor: 'hsla(0, 0%, 0%, 0.16)',
    borderRightColor: 'hsla(0, 0%, 0%, 0.16)',
    borderBottomColor: 'hsla(0, 0%, 0%, 0.16)',
    borderLeftColor: 'hsla(0, 0%, 0%, 0.16)',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
  },
  border500: {
    borderTopColor: 'hsla(0, 0%, 0%, 0.2)',
    borderRightColor: 'hsla(0, 0%, 0%, 0.2)',
    borderBottomColor: 'hsla(0, 0%, 0%, 0.2)',
    borderLeftColor: 'hsla(0, 0%, 0%, 0.2)',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
  },
  border600: {
    borderTopColor: 'hsla(0, 0%, 0%, 0.24)',
    borderRightColor: 'hsla(0, 0%, 0%, 0.24)',
    borderBottomColor: 'hsla(0, 0%, 0%, 0.24)',
    borderLeftColor: 'hsla(0, 0%, 0%, 0.24)',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderTopWidth: '1px',
    borderRightWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '1px',
  },
  radius100: '2px',
  radius200: '4px',
  radius300: '8px',
  radius400: '12px',
  /** Datepicker (Range), Progress Bar, Slider, Tag */
  useRoundedCorners: true,
  /** Button, ButtonGroup */
  buttonBorderRadius: '0px',
  /** Input, Select, Textarea, Checkbox */
  inputBorderRadius: '0px',
  /** Popover, Menu, Tooltip */
  popoverBorderRadius: '0px',
  /** Card, Datepicker, Modal, Toast, Notification */
  surfaceBorderRadius: '0px',
};

export default borders;
