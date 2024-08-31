import AddTransactionForm from './transaction/AddTransactionForm';
import TransactionList from './transaction/TransactionList';

function HomePage() {
  return (
    <div>
      <h2>My Transactions</h2>
      <AddTransactionForm/>
      <TransactionList/>
    </div>
  );
}

export default HomePage;
