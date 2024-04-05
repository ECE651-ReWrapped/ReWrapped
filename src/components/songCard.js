import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

function SongCard({ row }) { // NOSONAR
    return (
        <TableRow
            data-testid="song-card"
            key={row.track_name} // NOSONAR
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell style={{ fontFamily: "Work Sans Variable, sans-serif" }} component="th" scope="row">
                {row.track_name} {/* NOSONAR */}
            </TableCell>
            <TableCell style={{ fontFamily: "Work Sans Variable, sans-serif", color: "#61758A" }}>{row.artists}</TableCell> {/* NOSONAR */}
            <TableCell style={{ fontFamily: "Work Sans Variable, sans-serif", fontWeight: 'bold', color: "#121417" }} align="right"><Chip label={row.genres} /></TableCell> {/* NOSONAR */}
        </TableRow>
    );
}

export default SongCard;