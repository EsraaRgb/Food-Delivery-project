
import styles from "../tables.css";
export default function MAnageUsers() {
  
    return (
        <div className={styles.container}>
        <div className={styles.item}>
          <table className={`${styles.table} table table-head text-center`}>
            <tbody>
              <tr className={styles.trTitle}>
              <th>Name</th>
                <th>Id</th>
                <th>type</th>
                <th>Address</th>
                <th>phone</th>
                <th>Email</th>
                <th>Action</th>

              </tr>
            </tbody>
            <tbody >
                <tr className={styles.trTitle}>
                  <td>Ahmed</td>
                  <td>12654</td>
                  <td>user</td>
                  <td>street name </td>
                  <td>0121648501</td>
                  <td>user@mail</td>
                  <td>
                    {/* Handle order state */}
                    <button >
                      suspend
                    </button>
                    <button className={` mx-2`}>
X                    </button>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    );
  }