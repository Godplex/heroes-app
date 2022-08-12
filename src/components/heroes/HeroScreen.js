import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';
//import batman from '../../assets/heroes/dc-batman.jpg';

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        if (history.lenght <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;
    return (
        <div className="row">
            <div className="col-4">
                <img 
                    //src={`../assets/heroes/${heroeId}.jpg`} desde assets
                    //src={batman}
                    src={heroImages(`./${heroeId}.jpg`).default}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero} />
                    
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-white">
                        <b>Alter ego:{alter_ego}</b>
                    </li>
                    <li className="list-group-item text-white">
                        <b>Publisher:{publisher}</b>
                    </li>
                    <li className="list-group-item text-white">
                        <b>First Appearance:{first_appearance}</b>
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-primary"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
