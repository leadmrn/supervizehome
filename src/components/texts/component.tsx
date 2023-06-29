import { useSelector } from 'react-redux';
import './styles.scss';

export default function TitleMedium(props: { title: string; number?: number }) {
  const role = useSelector((state: any) => state.userInfo.type);

  return (
    <h2 className={role === 'artisan' ? 'TitleMedium artisan' : 'TitleMedium'}>
      {props.title} {props.number ? <div>{props.number}</div> : null}
    </h2>
  );
}
