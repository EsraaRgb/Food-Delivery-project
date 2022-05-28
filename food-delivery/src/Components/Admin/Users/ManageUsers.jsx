
import styles from"../Admin.module.css"
export default function MAnageUsers() {
  
    return (
        <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Users List</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
              <th>Name</th>
                <th>Id</th>
                <th>user type</th>
                <th>Address</th>
                <th>phone</th>
                <th>Email</th>
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
                    <button className={styles.button} >
                      suspend user
                    </button>
                    <button className={styles.button}>
                      remove user
                    </button>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    );
  }