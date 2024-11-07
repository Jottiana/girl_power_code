import './Apprendre.css';
import { useLearningSites } from "../../LearningContext";

const Apprendre = () => {
  const learningSites = useLearningSites();

  return (
    <div className="apprendre-page">
      <h1>Apprendre</h1>
      <p>Ici tu trouveras tout ce qu'il faut pour commencer à coder !</p>
      <div className="apprendre-container">
        {learningSites.map((site) => (
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="apprendre-box" key={site.name}>
            <img 
              src={site.logo} 
              alt={`Logo de ${site.name}`} 
              className="apprendre-image" 
            />
            <div className="apprendre-title">{site.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Apprendre;
