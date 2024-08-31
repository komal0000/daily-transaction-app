// src/components/AddTransactionForm.js
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

function AddTransactionForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'transactions'), {
        description: data.description,
        amount: parseFloat(data.amount),
        date: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
      reset();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Description"
        {...register('description', { required: true })}
      />
      <input
        type="number"
        placeholder="Amount"
        {...register('amount', { required: true })}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
