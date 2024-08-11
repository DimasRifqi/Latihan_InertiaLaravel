import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

export default function FormEdit({ id, mhs }) {
    const [tnpm, setTnpm] = useState(mhs.npm);
    const [tnama, setTnama] = useState(mhs.nama_lengkap);
    const [talamat, setTalamat] = useState(mhs.alamat);
    const [tjk, setTjk] = useState(mhs.jk);

    const [loading, setLoading] = useState(false);

    const saveData = (e) => {
        e.preventDefault();
        setLoading(true);

        const mahasiswa = { tnama, talamat, tjk };
        Inertia.put(`/mahasiswa/${id}`, mahasiswa, {
            onFinish: () => setLoading(false),
        });
    };

    const { errors } = usePage().props;

    return (
        <div>
            <h3> Form Edit Mahasiswa</h3>
            <hr />

            <Link
                as="button"
                type="button"
                href="/mahasiswa"
                style={{ color: "black", marginBottom: 10 }}
            >
                Kembali
            </Link>
            <form onSubmit={saveData}>
                <table border={0}>
                    <tr>
                        <td>Input Npm : </td>
                        <td>
                            <input
                                maxLength={7}
                                type="text"
                                value={tnpm}
                                onChange={(e) => setTnpm(e.target.value)}
                                disabled={true}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Input Nama: </td>
                        <td>
                            <input
                                type="text"
                                value={tnama}
                                onChange={(e) => setTnama(e.target.value)}
                                placeholder="Inputkan Nama Lenkap...."
                                size={50}
                            />

                            {errors.tnama && (
                                <div
                                    style={{
                                        color: "red",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {errors.tnama}
                                </div>
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td>Jenis Kelamin: </td>
                        <td>
                            <select onChange={(e) => setTjk(e.target.value)}>
                                <option value="">-Pilih-</option>
                                <option value="L" selected={tjk =='L' && true }>Laki - Laki</option>
                                <option value="P" selected={tjk =='P' && true }>Perempuan</option>
                            </select>

                            {errors.tjk && (
                                <div
                                    style={{
                                        color: "red",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {errors.tjk}
                                </div>
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td>Alamat: </td>
                        <td>
                            <textarea
                                value={talamat}
                                onChange={(e) => setTalamat(e.target.value)}
                                placeholder="Inputkan Alamat...."
                                cols={50}
                                rows={5}
                            ></textarea>
                        </td>

                        {errors.talamat && (
                            <div style={{ color: "red", fontStyle: "italic" }}>
                                {errors.talamat}
                            </div>
                        )}
                    </tr>

                    <tr>
                        <td>
                            <button type="submit" disabled={loading}>
                                {loading ? "Tunggu..." : "Update Data"}
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
