// src/components/TransactionList.js
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'transactions'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let transactionsArray = [];
      querySnapshot.forEach((doc) => {
        transactionsArray.push({ id: doc.id, ...doc.data() });
      });
      setTransactions(transactionsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
