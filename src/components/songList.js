import React from 'react';
import SongCard from './songCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function SongList({ musicData }) { // NOSONAR
    return (
        <TableContainer data-testid="table-container" style={{ borderRadius: '10px', border: '1px solid #ccc' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontFamily: "Work Sans Variable, sans-serif" }}>Track</TableCell>
                        <TableCell style={{ fontFamily: "Work Sans Variable, sans-serif", color: "#61758A" }} >Artist</TableCell>
                        <TableCell style={{ fontFamily: "Work Sans Variable, sans-serif", fontWeight: 'bold' }} align="right">Genres</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {musicData.map((row) => ( // NOSONAR
                        <SongCard row={row} /> // NOSONAR
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


    );
}

export default SongList;