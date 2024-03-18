import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh / 3)',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
        background: '#f2f2f2',
        borderRadius: 8,
        padding: theme.spacing(0.5),
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    searchInput: {
        marginLeft: theme.spacing(1),
        flex: 1,
        '& .MuiInputBase-root': {
            borderRadius: 8,
            background: '#fff',
        },
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    },
    searchIcon: {
        color: theme.palette.primary.main,
        marginLeft: theme.spacing(1),
    },
    loading: {
        marginTop: theme.spacing(2),
    },
    resultsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "20px"
    },
    resultItem: {
        background: '#f9f9f9',
        borderRadius: 8,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            background: '#eaeaea',
        },
    },
}));

export { useStyles };