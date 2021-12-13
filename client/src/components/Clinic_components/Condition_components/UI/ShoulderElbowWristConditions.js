import ElbowConditionsImage from '@/images/ElbowConditionsImage.jpg';
import ShoulderConditionsImage from '@/images/ShoulderConditionsImage.jpg';
import WristHandConditionsImage from '@/images/WristHandConditionsImage.jpg';
import React from 'react';


function ShoulderElbowWristConditions() {
    return (
        <div className="clinic-background-page conditions__container">
            <div id={"shoulderconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={ShoulderConditionsImage}
                        alt="ShoulderConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Shoulder Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Rotator Cuff Tears or Tendinopathy
                        </li>
                        <li className="tiles__item">Shoulder Impingement</li>
                        <li className="tiles__item">Frozen Shoulder
                        </li>
                        <li className="tiles__item">Sub Acromial Bursitis</li>
                        <li className="tiles__item">Dislocations and Instability
                        </li>
                        <li className="tiles__item">A/C Joint Sprains
                        </li>
                        <li className="tiles__item">SLAP and Labral Tears
                        </li>
                        <li className="tiles__item">Sports Training Injuries
                        </li>
                        <li className="tiles__item">Post-operative Repair Surgery
                        </li>
                    </ul>
                </div>
            </div>
            <div id={"elbowconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={ElbowConditionsImage}
                        alt="ElbowConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Elbow Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Medial Epicondylitis (Golfers Elbow)</li>
                        <li className="tiles__item">Lateral Epicondylitis (Tennis Elbow)
                        </li>
                        <li className="tiles__item">Muscle Tears and Tendinopathy of Biceps and Triceps
                        </li>
                        <li className="tiles__item">Elbow Arthritis</li>
                        <li className="tiles__item">Carpal Tunnel Syndrome</li>
                        <li className="tiles__item">Sports Training Injuries
                        </li>
                        <li className="tiles__item">Ligament/Muscle Pathology
                        </li>
                        <li className="tiles__item">Ulnar Nerve Problems</li>
                        <li className="tiles__item">Radial Nerve Problems</li>
                        <li className="tiles__item">Post-operative Elbow Surgery
                        </li>
                    </ul>

                </div>
            </div>
            <div id={"wristandhandconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={WristHandConditionsImage}
                        alt="WristHandConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Wrist and Hand Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Fingers Sprains
                        </li>
                        <li className="tiles__item">Wrist and Hand Arthriti</li>
                        <li className="tiles__item">Wrist Joint Sprains and Dysfunctions
                        </li>
                        <li className="tiles__item">Sports Training Injuries
                        </li>
                        <li className="tiles__item">De Quatrain’s Disease</li>
                        <li className="tiles__item">Un -displaced Wrist and Forearm Fractures
                        </li>
                        <li className="tiles__item">Extensor Carpi Ulnaris Tendonitis</li>
                        <li className="tiles__item">Post-operative Wrist and Hand Surgery
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default ShoulderElbowWristConditions
