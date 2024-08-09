import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const fetchTransactions = async () => {
        const response = await axios("http://localhost:8001/transactions")
        setTransactions(response.data)
      }

      fetchTransactions()
    } catch (error) {
      setError(error.message)
    }
    
  },[])
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
