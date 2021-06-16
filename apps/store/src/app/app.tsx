import styles from './app.module.scss';
import Test from 'components/Test';

export function App() {
  return (
    <div className={styles.app}>
      <Test />
    </div>
  );
}

export default App;
