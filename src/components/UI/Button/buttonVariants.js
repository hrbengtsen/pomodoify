export const buttonVariants = {
  variants: {
    primary: {
      color: 'text.0',
      backgroundColor: 'primary.0',
      borderColor: 'primary.0',
      fontWeight: 'bold',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: 'primary.0',
        borderColor: 'primary.0',
      },
      '&:focus': {
        backgroundColor: 'primary.0',
        borderColor: 'primary.0',
      }
    },
    secondary: {
      color: 'text.0',
      backgroundColor: 'secondary.0',
      borderColor: 'secondary.0',
      fontWeight: 'bold',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: 'secondary.0',
        borderColor: 'secondary.0'
      },
      '&:focus': {
        backgroundColor: 'secondary.0',
        borderColor: 'secondary.0'
      }
    },
    achievement: {
      color: 'bg.0',
      backgroundColor: 'bg.1',
      border: 'none',
      fontWeight: 'bold',
      boxShadow: 'none',
      width: '48px',
      borderRadius: 'circle',
      p: 'md',
      '&:hover': {
        backgroundColor: 'bg.1',
        color: 'text.0'
      },
      '&:focus': {
        backgroundColor: 'bg.1',
        color: 'text.0'
      }
    }
  }
};
