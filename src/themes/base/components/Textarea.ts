import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Textarea: ComponentStyleConfig = {
  baseStyle: () => {
    return {
      fontWeight: '400',
    }
  },

  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
  },

  variants: {
    primary: () => ({
      fontSize: '14px',
      height: '85px',
      color: 'inkGray.30',
      borderWidth: '1px',
      borderRadius: '8px',
      boxShadow: 'none',
      _focus: {
        borderColor: 'green.50',
      },
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: 'sm',
    variant: 'primary',
  },
}
