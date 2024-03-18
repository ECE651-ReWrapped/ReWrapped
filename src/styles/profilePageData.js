import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  listItem: {
    backgroundColor: '#EDEDED',  
    borderRadius: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '@media (min-width: 320px) and (max-width: 500px)': {
      padding: 2, 
      marginLeft: '5%'
    },
    '@media (min-width: 501px)': {
      padding: 2, 
      marginLeft: '25%'
    },
  },
  avatar: {
    marginLeft: 5,
    width: 70, 
    height: 70, 
    '@media (min-width: 600px)': {
      width: 60, 
      height: 60, 
    },
    '@media (min-width: 960px)': {
      width: 70, 
      height: 70, 
    },
  },
  textContainer: {
    marginLeft: 10, 
    '@media (min-width: 600px)': {
      marginLeft: 14, 
    },
    '@media (min-width: 960px)': {
      marginLeft: 20, 
    },
  },
  primaryText: {
    fontWeight: 'bold',
    color: 'black',  
    fontFamily: 'Spotify, Arial, sans-serif',  
    fontSize: 15, 
    '@media (min-width: 600px)': {
      fontSize: 16, 
    },
    '@media (min-width: 960px)': {
      fontSize: 18, 
    },
  },
  secondaryText: {
    color: 'black',  
    fontFamily: 'Spotify, Roboto, sans-serif',  
    fontSize: 12, 
    '@media (min-width: 600px)': {
      fontSize: 13, 
    },
    '@media (min-width: 960px)': {
      fontSize: 13, 
    },
  },
}));

export { useStyles };