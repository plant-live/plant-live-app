import { Button, styled } from '@mui/material';
import { IButton, ICustomButtonProps } from './types';

export const StyledButton = styled(Button)<IButton>(
  ({
    fontColor,
    backgroundColor,
    theme,
    backgroundOnHover,
    fontOnHover,
    variant
  }) => ({
    backgroundColor,
    color: fontColor,
    width: '100%',
    fontSize: theme.spacing(2),
    textTransform: 'initial',
    fontWeight: 600,
    fontStyle: 'normal',
    height: '4.8rem',
    borderRadius: '1.2rem',
    borderColor: `${variant === 'outlined' ? fontOnHover : null}`,

    '&:hover': {
      backgroundColor: backgroundOnHover,
      color: fontOnHover,
      borderColor: `${variant === 'outlined' ? fontOnHover : null}`
    }
  })
);
