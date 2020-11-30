import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FirebaseService from '../../services/firebase';
import useStyles from './styles';
import './table.css';

const BellowGradeTable = () => {
    const [students, setStudents] = useState([]);
    const styles = useStyles();

    const getData = async () => {
        try {
            const response = await FirebaseService.readData();
            setStudents(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="table-container">
            <div className="title">Students</div>
            <TableContainer component={Paper}>
                <Table className={styles.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Final Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value) => {
                            console.log(value.g1);
                            console.log(value.g2);
                            const finalGrade = (value.g1 + value.g2) / 2;
                            if (finalGrade < 7) {
                                return (
                                    <TableRow key={value.lastName}>
                                        <TableCell align="right">{value.name}</TableCell>
                                        <TableCell align="right">{value.lastName}</TableCell>
                                        <TableCell align="right">{finalGrade}</TableCell>
                                    </TableRow>
                                );
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BellowGradeTable;
