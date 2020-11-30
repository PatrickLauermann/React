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
import Button from '../Button';

const StudentTable = () => {
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

    const deleteStudent = async (docId) => {
        try {
            await FirebaseService.deleteDocument(docId);
            alert('Refresh the page to update the data')
        } catch (error) {
            alert('Something went wrong');
        }
    }

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
                            <TableBody align="right"></TableBody>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value) => {
                            console.log(value.g1);
                            console.log(value.g2);
                            const finalGrade = (value.g1 + value.g2) / 2;
                            return (
                                <TableRow key={value.lastName}>
                                    <TableCell align="right">{value.name}</TableCell>
                                    <TableCell align="right">{value.lastName}</TableCell>
                                    <TableCell align="right">{finalGrade}</TableCell>
                                    <TableCell align="right">
                                        <Button label="Delete" onClick={() => deleteStudent(value.id)} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default StudentTable;
