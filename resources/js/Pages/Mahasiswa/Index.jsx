import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';

export default function Index({mahasiswa}){

    const {flash} = usePage().props

    return (
        <div>
            <h3>Data Mahasiswa</h3>
            <hr/>

            <Link as='button' type='button' href='/mahasiswa/add' style={{ color: 'black', marginBottom: 10 }}>
            Tambah Data
            </Link>

            {
                flash && flash.message && <div>{flash.message}</div>
            }


            <table cellPading={5} border={1} style={{
                borderCollaps: 'collapse',
             }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NPM</th>
                        <th>Nama Lengkap</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        mahasiswa.length === 0 ? (
                            <tr>
                                <th colspan={5}>Data Kosong...</th>
                            </tr>
                        ):(mahasiswa.map((mhs,index)=> (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{mhs.npm}</td>
                                <td>{mhs.nama_lengkap}</td>
                                <td>
                                    {mhs.jk == 'L' ? 'laki-laki' : 'Perempuan'}
                                </td>
                                <td>{mhs.alamat}</td>
                            </tr>
                        ))

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
