function CustomerDb() {
  // State for storing customers array
  let [customers, setCustomers] = React.useState([
    { id: 1, name: "james" },
    { id: 2, name: "paul" },
  ]);

  // State for storing the name input by user
  let [name, setName] = React.useState("");

  // Function to add a new customer
  const add = () => {
    let cust = customers[customers.length - 1]; // Get the last customer
    let id = cust.id; // Extract ID of last customer
    id++; // Increment ID for new customer

    // Update customers state by adding new customer
    setCustomers((prevCustomers) => [...prevCustomers, { name: name, id: id }]);
  };

  // Function to handle input changes
  const inputGiven = (event) => {
    setName(event.target.value); // Update name state with input value
  };

  // Function to delete a customer
  const deleteCust = (id) => {
    let newArr = customers.filter((cust) => cust.id !== id); // Filter out customer with given ID
    setCustomers(newArr); // Update customers state with filtered array
  };

  // Generate UI for each customer
  let ui = customers.map((cust) => (
    <tr key={cust.id}>
      <td>{cust.id}</td>
      <td>{cust.name}</td>
      <td>
        <button
          onClick={() => {
            deleteCust(cust.id); // Call deleteCust function on click
          }}
        >
          delete
        </button>
      </td>
    </tr>
  ));

  // Render the UI
  return (
    <div>
      <table border="1">
        <tbody>
          {ui}
          <tr>
            <td>
              <input
                type="text"
                onChange={inputGiven} // Handle input change
                placeholder="give name"
              />
            </td>
            <td colspan="2">
              <button onClick={add}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
