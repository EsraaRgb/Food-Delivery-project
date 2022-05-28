import styles from "../Admin.module.css";
export default function OrdersList() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody >
              <tr className={styles.trTitle}>
                <td>order id</td>
                <td>customer 1</td>
                <td>100$</td>
                {/* order state */}
                <td>preparing</td>
                <td>
                  {/* Handle order state */}
                  <button className={styles.button} >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}
