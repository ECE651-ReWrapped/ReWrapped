import React from 'react';
import SongCard from './songCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

function SongList({ musicData }) {
    return (
        <TableContainer style={{ borderRadius: '10px', border: '1px solid #ccc' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontFamily: "Work Sans Variable, sans-serif"}}>Track</TableCell>
                        <TableCell style={{fontFamily: "Work Sans Variable, sans-serif", color:"#61758A"}} >Artist</TableCell>
                        <TableCell style={{fontFamily: "Work Sans Variable, sans-serif", fontWeight: 'bold'}} align="right">Genres</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {musicData.map((row) => (
                        <TableRow
                            key={row.track_name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{fontFamily: "Work Sans Variable, sans-serif"}} component="th" scope="row">
                                {row.track_name}
                            </TableCell>
                            <TableCell style={{fontFamily: "Work Sans Variable, sans-serif", color:"#61758A"}}>{row.artists}</TableCell>
                            <TableCell style={{fontFamily: "Work Sans Variable, sans-serif", fontWeight: 'bold', color: "#121417"}} align="right"><Chip label="Alt Rock, Metal" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
     
      
    );
}

export default SongList;