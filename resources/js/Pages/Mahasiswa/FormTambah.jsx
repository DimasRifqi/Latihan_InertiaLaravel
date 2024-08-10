import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

export default function FormTambah() {
    const [tnpm, setTnpm] = useState("");
    const [tnama, setTnama] = useState("");
    const [talamat, setTalamat] = useState("");
    const [tjk, setTjk] = useState("");

    const [loading, setLoading] = useState(false);

    const saveData = (e) => {
        e.preventDefault();
        setLoading(true);

        const mahasiswa = { tnpm, tnama, talamat, tjk };
        Inertia.post("/mahasiswa", mahasiswa, {
            onFinish: () => setLoading(false),
        });
    };

    const { errors } = usePage().props;

    return (
        <div>
            <h3> Form Tambah Mahasiswa</h3>
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
                                placeholder="Inputkan NPM Mahasiswa...."
                            />

                            {errors.tnpm && (
                                <div
                                    style={{
                                        color: "red",
                                        fontStyle: "italic",
                                    }}
                                >
                                    {errors.tnpm}
                                </div>
                            )}
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
                                <option value="" selected={true}>
                                    -Pilih-
                                </option>
                                <option value="L">Laki - Laki</option>
                                <option value="P">Perempuan</option>
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
                                {loading ? "Tunggu..." : "Simpan Data"}
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
