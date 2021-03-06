import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Text } from '../src'

storiesOf('Text', module)
  .add(
    'Typography component',
    withInfo({
      inline: true,
      text:
        'A low-level component for setting font-size, typographic styles, margin, and color',
    })(() => <Text m={3}>Hello</Text>)
  )
  .add('fontSize', () => (
    <div>
      <Text fontSize={6}>Hello 6</Text>
      <Text fontSize={5}>Hello 5</Text>
      <Text fontSize={4}>Hello 4</Text>
      <Text fontSize={3}>Hello 3</Text>
      <Text fontSize={2}>Hello 2</Text>
      <Text fontSize={1}>Hello 1</Text>
      <Text fontSize={0}>Hello 0</Text>
    </div>
  ))
  .add('align', () => (
    <div>
      <Text align="left">Hello Left</Text>
      <Text align="center">Hello Center</Text>
      <Text align="right">Hello Right</Text>
    </div>
  ))
  .add('regular', () => <Text regular>Hello Regular</Text>)
  .add('bold', () => <Text bold>Hello Bold</Text>)
  .add('caps', () => <Text caps>Hello Caps</Text>)
  .add('maxWidth', () => (
    <Text maxWidth={16}>
      Hello I am some very long text that will be wrapped at 16rem because of my
      maxWidth prop!
    </Text>
  ))
  .add('strikethrough', () => <Text.s>Hello Strikethrough</Text.s>)
  .add('spacing', () => (
    <div>
      <Text mt={4} mb={2}>
        Hello Margin
      </Text>
      <Text p={3}>Hello Padding</Text>
    </div>
  ))
  .add('color', () => (
    <div>
      <Text color="primary">Hello Primary</Text>
      <Text color="accent">Hello Accent</Text>
      <Text color="error">Hello Error</Text>
    </div>
  ))
