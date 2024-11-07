import "./Heroines.css";
import { useHeroines } from "../../HeroinesContext";

const Heroines = () => {
	const heroines = useHeroines();

	return (
		<div className="heroines-page">
			<h1>Héroïnes de la Tech</h1>
			<p>Découvrez les femmes qui ont marqué le monde de la technologie !</p>
			<div className="heroines-container">
				{heroines.map((heroine) => (
					<a
						href={heroine.wikiUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="heroines-box"
						key={heroine.name}
					>
						<img
							src={heroine.image}
							alt={`Portrait de ${heroine.name}`}
							className="heroines-image"
						/>
						<div className="heroines-title">{heroine.name}</div>
						<p className="heroines-description">{heroine.description}</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default Heroines;
