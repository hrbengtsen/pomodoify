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
        borderColor: 'text.0',
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
        borderColor: 'text.0'
      }
    },
    danger: {
      color: 'bg.0',
      backgroundColor: 'danger.0',
      borderColor: 'danger.0',
      fontWeight: 'bold',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: 'danger.0',
        borderColor: 'danger.0'
      },
      '&:focus': {
        backgroundColor: 'danger.0',
        borderColor: 'text.0'
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
    },
    newAchievement: {
      color: 'bg.0',
      backgroundColor: 'secondary.0',
      border: 'none',
      fontWeight: 'bold',
      boxShadow: 'none',
      width: '48px',
      borderRadius: 'circle',
      p: 'md',
      '&:hover': {
        backgroundColor: 'secondary.0',
        color: 'bg.0'
      },
      '&:focus': {
        backgroundColor: 'secondary.0',
        color: 'bg.0'
      }
    },
    timer: {
      backgroundColor: 'bg.1',
      border: 'none',
      borderRadius: 'circle',
      p: '0',
      m: '0',
      '&:not(.active):hover': {
        backgroundColor: 'bg.1'
      },
      '&:not(.active):focus': {
        backgroundColor: 'bg.1'
      },
      '&.active': {
        backgroundColor: 'button.0'
      }
    },
    timerControl: {
      backgroundColor: 'bg.0',
      border: 'none',
      borderRadius: 'circle',
      p: 'md',
      '&:not(.active):hover': {
        backgroundColor: 'bg.0',
        color: 'text.1'
      },
      '&:not(.active):focus': {
        backgroundColor: 'bg.0',
        color: 'text.1'
      },
      '&.active': {
        backgroundColor: 'bg.0',
        color: 'primary.0'
      }
    },
    link: {
      color: 'text.0',
      backgroundColor: 'bg.0',
      border: 'none',
      fontWeight: 'bold',
      boxShadow: 'none',
      p: '0',
      m: '0',
      '&:hover': {
        backgroundColor: 'bg.0',
        border: 'none',
      },
      '&:focus': {
        backgroundColor: 'bg.0',
        border: 'none',
      }
    }
  }
};
