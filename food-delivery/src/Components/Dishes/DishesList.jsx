import styles from "../tables.css";
export default function DishesList() {
  return (
    <>
      <div  className={`${styles.admin} `}>
        <div >
          <table className={`${styles.table} table table-head text-center`}>
            <tbody>
              <tr className={`${styles.trTitle}`}>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>

                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
              <tr className={`${styles.trTitle}`}>
                <td>1</td>
                <td>pizza</td>
                <td>category</td>
                <td>10$</td>
                <td>
                  <button >Edit</button>
                  <button
                    
                    // onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            
          </table>
        </div>{" "}
      </div>
    </>
  );
}
