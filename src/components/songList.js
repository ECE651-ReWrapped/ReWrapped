import React from 'react';
import SongCard from './songCard';
import { List, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

function SongList({ musicData }) {
    return (
        <TableContainer style={{ borderRadius: '10px', border: '1px solid #ccc' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Track</TableCell>
                        <TableCell >Artist</TableCell>
                        <TableCell align="right">Genres</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {musicData.map((row) => (
                        <TableRow
                            key={row.track_name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.track_name}
                            </TableCell>
                            <TableCell>{row.artists}</TableCell>
                            <TableCell align="right"><Chip label="Alt Rock, Metal" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
     
      
    );
}

export default SongList;