import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '../../components/TextField';
import { setCalories } from '../../store/calories';

import styles from './styles.module.css';

export const Home = () => {
  const [caloriesValue, setCaloriesValue] = useState('');
  
  const { calories } = useSelector((state) => state.calories);
  const dispatch = useDispatch();

  const handleCaloriesChange = (e) => setCaloriesValue(e.target.value);

  const countCalories = (e) => {
    if (e.key === 'Enter') {
      const calories = Number(caloriesValue);
      dispatch(setCalories(calories));
      setCaloriesValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.caloriesString}>Общее кол-во калорий: {calories}</div>
        <TextField 
          value={caloriesValue}
          type="number"
          containerStyle={styles.textField} 
          placeholder="Введите кол-во полученных калорий..."
          onChange={handleCaloriesChange}
          onKeyDown={countCalories}
        />
      </div>
    </div>
  )
}
