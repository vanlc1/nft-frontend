import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { breakpoints } from './breakpoints'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

import {
  Button,
  Card,
  Accordion,
  Link,
  Text,
  Textarea,
  Tabs,
  StackDivider,
  Input,
} from './components'

import '@fontsource/inter/variable.css'
export const baseTheme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  fontSizes: {
    h1: '24px',
    h2: '20px',
    h3: '18px',
    h4: '16px',
  },
  colors,
  breakpoints,
  components: {
    Button,
    Tabs,
    StackDivider,
    Card,
    Accordion,
    Link,
    Text,
    Textarea,
    Steps,
    Input,
  },
})
