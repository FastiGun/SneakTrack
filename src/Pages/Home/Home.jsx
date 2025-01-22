import './Home.scss'
import { useContext } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../Contexts/AccountContext';

const Home = () => {

  const navigate = useNavigate();
  const context = useContext(AccountContext); // Stocker la valeur du contexte
  const account = context?.account; // Utiliser l'optional chaining

  return (
    <>
        <h1 className="title">Bienvenue { account ?  account.username : "sur SneakTrack"}</h1>
        <div className='home'>
            <h3>Prends le contrôle de ta collection de sneakers !</h3>
            <div className="line">
                <PlayArrowIcon/>
                <p>Ajoute tes sneakers, marque-les comme portées, et reste motivé avec des rappels pour les entretenir.</p>
            </div>
            <div className="line">
                <PlayArrowIcon/>
                <p>Découvre tes stats, relève des défis et faits vivre chaque paire de ta collection. Prêt à donner un nouveau souffle à ta collection ? Inscris-toi et commence dès maintenant !</p>
            </div>
            <h3>Prêt à donner un nouveau souffle à ta collection ? <h onClick={() => navigate('/register')}>Inscrivez-vous</h>  et commencez dès maintenant !</h3>
        </div>
    </>
    
  );
};

export default Home;
