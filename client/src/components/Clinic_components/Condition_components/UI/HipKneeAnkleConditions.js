import AnkleConditionsImage from '@/images/AnkleConditionsImage.jpg';
import HipConditionsImage from '@/images/HipConditionsImage.jpg';
import KneeConditionsImageSVG from '@/images/KneeConditionsImageSVG.svg';
import React from 'react';


function HipKneeAnkleConditions(props) {
    return (
        <div>
            <div id={"hipconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={HipConditionsImage}
                        alt="HipConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Hip Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Labral Tears
                        </li>
                        <li className="tiles__item">Gluteal Weakness and Strengthening
                        </li>
                        <li className="tiles__item">Groin Pain and Adductor Tendinopathy
                        </li>
                        <li className="tiles__item">Arthritis and Bursitis
                        </li>
                        <li className="tiles__item">Hip Flexor Tendinopathy and Weakness
                        </li>
                        <li className="tiles__item">Impingement</li>
                        <li className="tiles__item">Bursitis</li>
                    </ul>

                </div>
            </div>
            <div id={"kneeconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={KneeConditionsImageSVG}
                        alt="KneeConditionsImageSVG icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Knee Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Patello-femoral or Anterior Knee Pain</li>
                        <li className="tiles__item">ACL Reconstructive Surgery
                        </li>
                        <li className="tiles__item">Post-operative Arthroscopic Surgery
                        </li>
                        <li className="tiles__item">Meniscal and Ligament Injuries
                        </li>
                        <li className="tiles__item">Muscle Tears and Strains
                        </li>
                        <li className="tiles__item">Runners ITB Syndrome
                        </li>
                        <li className="tiles__item">Hamstring Tendinopathies
                        </li>
                    </ul>

                </div>
            </div>
            <div id={"ankleconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={AnkleConditionsImage}
                        alt="AnkleConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Ankle and Foot Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Plantar Fasciitis/Heel Spur</li>
                        <li className="tiles__item">Calf Muscle Tears
                        </li>
                        <li className="tiles__item">Tarsal tunnel syndrome</li>
                        <li className="tiles__item">Undisplaced and Stress Fractures
                        </li>
                        <li className="tiles__item">Ligament Strain</li>
                        <li className="tiles__item">Bunions/sesamoiditis</li>
                        <li className="tiles__item">Ankle Reconstructive Surgery
                        </li>
                        <li className="tiles__item">Custom Foot Orthotics
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default HipKneeAnkleConditions;