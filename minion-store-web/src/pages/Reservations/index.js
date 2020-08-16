import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import { API } from 'aws-amplify';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './style.css';

const theme = createMuiTheme({
    typography: {
        fontSize: '0.2rem'
    }
});

function Reservations() {
    const [reservations, setReservations] = useState([]);
    const { isAuthenticated } = useAppContext();

    useEffect(() => {
        async function onLoad() {
            if (!isAuthenticated) {
                return;
            }

            try {
                const reservations = await loadReservations();
                setReservations(reservations);
            } catch (e) {
                onError(e);
            }
        }

        onLoad();
    }, [isAuthenticated]);

    function loadReservations() {
        return API.get("reservations", "/reservations");
    }
    return (
        <div id="page-reservations" className="container">
            <Navbar />
            <main>
                <header className="page-reservations-header">
                    <div className="imagem-left"></div>
                    <div className="body-text">Aqui você pode conferir os diversos e divertidos minions que você já reservou</div>
                    <div className="imagem-right"></div>
                </header>
                <section>
                    <ThemeProvider theme={theme}>
                        <Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Data</TableCell>
                                            <TableCell align="right">Nome</TableCell>
                                            <TableCell align="right">Telefone</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Minions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {reservations.map((reservation) => (
                                            <TableRow key={reservation.reservationId}>
                                                <TableCell theme component="th" scope="row">
                                                    {new Date(reservation.createdAt).toLocaleString()}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {reservation.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {reservation.number}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {reservation.email}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {reservation.minions.map(minion => minion + "/")}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>
                    </ThemeProvider>
                </section>
            </main>
        </div >
    )
}

export default Reservations;