import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div>
      <h2 className={css.title}>Register your account</h2>
      <RegistrationForm />
    </div>
  );
}
