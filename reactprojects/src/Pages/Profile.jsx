export default function Profile() {
    return (
        <div className="border p-3 mt-4">
            <h3>My Profile</h3>

            <div className="d-flex">
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="profile"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%" }}
                />

                <table className="table table-bordered ms-3">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>Mahak</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>Mahak@indxpert.com</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>778 899 2897</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}