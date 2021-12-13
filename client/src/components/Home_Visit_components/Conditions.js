import React from 'react';
import AgedCareConditionsImage from '../../images/AgedCareConditionsImage.jpg';
import NeurologicalConditionsImage from '../../images/NeurologicalConditionsImage.jpg';
import OrthopedicConditionsImage from '../../images/OrthopedicConditionsImage.jpg';
import ShoulderConditionsImage from '../../images/ShoulderConditionsImage.jpg';
import ElbowConditionsImage from '../../images/ElbowConditionsImage.jpg';

function Conditions(props) {
    return (
        <div className="clinic-conditions__container">
            <div className="clinic-services__title">
                Conditions/Treatments
            </div>
            <div id={"agedcare"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={AgedCareConditionsImage}
                        alt="NeckConditions Image icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Aged Care, Balance, Falls Prevention and Rehabilitation Conditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list conditions__list no-border">
                            <li className="tiles__item">Balance Impairment, Falls Management and Prevention.
                            </li>
                            <li className="tiles__item">Reduced Quality of Life with difficulty to manage independently daily routine.
                            </li>
                            <li className="tiles__item">Functional difficulties with getting on and off chair.
                            </li>
                            <li className="tiles__item">Functional difficulties with getting on and off Toilet.</li>
                            <li className="tiles__item">Functional difficulties with getting into bed,
                                turning in bed and getting out of bed.</li>
                            <li className="tiles__item">Difficulty with Stairs Mobility
                            </li>
                            <li className="tiles__item">Difficulty with Sit to Stand and Stand to walk .</li>
                            <li className="tiles__item">Post Covid19 Maintain Bone Health or Osteoporosis.</li>
                            <li className="tiles__item">Post Covid19 Induced Osteopenia.</li>
                            <li className="tiles__item">Post Covid19 Induced Sarcopenia.</li>
                            <li className="tiles__item">Post Covid19 Physical Health Decondition.</li>
                            <li className="tiles__item">Generalized weakness.</li>
                            <li className="tiles__item">Aged Joints Pain.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"neuroconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={NeurologicalConditionsImage}
                        alt="Upper Back icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">NeurologicalConditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list no-border">
                            <li className="tiles__item">Stroke.</li>
                            <li className="tiles__item">Parkinson’s Disease.
                            </li>
                            <li className="tiles__item">Multiple Sclerosis.</li>
                            <li className="tiles__item">Acquired brain injury.y</li>
                            <li className="tiles__item">Spinal Cord Injuries.</li>
                            <li className="tiles__item">Neuropathy including nerve injuries – drop foot and wrist drop.</li>
                            <li className="tiles__item">Parkinson’s disease and Parkinsonism’s.</li>
                            <li className="tiles__item">Ataxias –Cerebellar lesions.</li>
                            <li className="tiles__item">Bell’s Palsy.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"orthopedicconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={OrthopedicConditionsImage}
                        alt="LowerBackConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Orthopaedic Care and Rehabilitation Conditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list no-border">
                            <li className="tiles__item">Frozen Shoulder.</li>
                            <li className="tiles__item">Muscle Strain, Sprain, or Tear.</li>
                            <li className="tiles__item">Ligament Strain, Sprain, or Tear.</li>
                            <li className="tiles__item">Repetitive Strain Injuries.</li>
                            <li className="tiles__item">Inflammation of Tendons or Bursa.</li>
                            <li className="tiles__item">Joints Instability.</li>
                            <li className="tiles__item">Accident or Work injuries.</li>
                            <li className="tiles__item">Rheumatoid–Arthritis joints.</li>
                            <li className="tiles__item">Osteo-Arthritis joints.</li>
                            <li className="tiles__item">Osteopenia and Osteoporosis.
                            </li>
                            <li className="tiles__item">Fracture Rehabilitation.
                            </li>
                            <li className="tiles__item">Back/ Neck Rehabilitation.
                            </li>
                            <li className="tiles__item">Spinal Stabilization Disorders.
                            </li>
                            <li className="tiles__item">Ankylosing Spondylitis.
                            </li>
                            <li className="tiles__item">Thoracic Outlet Syndrome.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"painmanagementconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={ShoulderConditionsImage}
                        alt="ShoulderConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Pain Management Conditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list no-border">
                            <li className="tiles__item">Arthritis Pain.</li>
                            <li className="tiles__item">Sport Injuries pain.</li>
                            <li className="tiles__item">Ligaments Pain.</li>
                            <li className="tiles__item">Postural Pain.</li>
                            <li className="tiles__item">Muscle Pain or Spasm.</li>
                            <li className="tiles__item">Tendinopathy or Tendon Pain.</li>
                            <li className="tiles__item">Referred Pain.</li>
                            <li className="tiles__item">Bursa Pain.</li>
                            <li className="tiles__item">Nerve impingement pain.</li>
                            <li className="tiles__item">Back and Neck pain.</li>
                            <li className="tiles__item">Shoulder, Elbow, Wrist and Hand Pain.</li>
                            <li className="tiles__item">Hip, Knee, Ankle and Foot Pain.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"operativeconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={ElbowConditionsImage}
                        alt="ElbowConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Pre and Post-Operative Care and Rehabilitation Conditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list no-border">
                            <li className="tiles__item">Post-Surgical Rehabilitation of Total Knee Replacement.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Total Hip Replacement.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Ankle and Foot Surgery.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Shoulder Surgery.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Elbow Surgery.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Wrist and Hand Surgery.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Spinal Surgery.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Cardiac Surgery.</li>
                            <li className="tiles__item">Post-Surgical Rehabilitation of Lung Surgery.</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conditions;