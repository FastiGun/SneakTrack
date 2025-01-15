import './Home.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  return (
    <>
        <h1 className="title">Bienvenue sur SneakTrack</h1>
        <div className='home'>
            <h3>Prenez le contrôle de votre collection de sneakers !</h3>
            <div className="line">
                <PlayArrowIcon/>
                <p>Ajoutez vos sneakers, marquez-les comme portées, et restez motivé avec des rappels pour les entretenir.</p>
            </div>
            <div className="line">
                <PlayArrowIcon/>
                <p>Découvrez vos stats, relevez des défis et faites vivre chaque paire de votre collection. Prêt à donner un nouveau souffle à votre collection ? Inscrivez-vous et commencez dès maintenant !</p>
            </div>
            <h3>Prêt à donner un nouveau souffle à votre collection ? <h onClick={() => navigate('/register')}>Inscrivez-vous</h>  et commencez dès maintenant !</h3>
        </div>
    </>
    
  );
};

export default Home;
