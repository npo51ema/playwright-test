import cn from 'classnames';
import styles from './styles.module.css';

export const TextField = ({ 
  value,
  onChange,
  onKeyDown,
  placeholder,
  containerStyle,
  style,
  type,
}) => {
  
  return (
    <div className={cn(styles.container, containerStyle)}>
      <input 
        value={value} 
        type={type}
        className={cn(styles.textField, style)}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
