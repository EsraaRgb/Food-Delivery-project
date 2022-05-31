import styles from "../tables.css";
export default function OrdersList() {
  return (
    <div className={styles.admin}>
      <div className={styles.item}>
        <table className={`${styles.table} table table-head text-center  bg-white`}>
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
                  <button >
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
