import React from 'react';
import NeckConditionsImage from '../../images/NeckConditionsImage.jpg';
import UpperbackConditionsImage from '../../images/UpperbackConditionsImage.jpg';
import LowerBackConditionsImage from '../../images/LowerBackConditionsImage.jpg';
import HipConditionsImage from '../../images/HipConditionsImage.jpg';
import KneeConditionsImageSVG from '../../images/KneeConditionsImageSVG.svg';
import AnkleConditionsImage from '../../images/AnkleConditionsImage.jpg';
import PaediatricConditionsImage from '../../images/PaediatricConditionsImage.jpg';

function Conditions(props) {
    return (
        <div className="clinic-conditions__container">
            <div className="clinic-services__title">
                Conditions/Treatments   
            </div>
            <div id={"neckconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={NeckConditionsImage} alt="NeckConditions Image icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Neck Pain and Headaches</div>
                    <div className="tiles__content">
                        <ul className="tiles__list conditions__list no-border">
                            <li className="tiles__item">Cervical Spine Disc Bulge and Herniation  </li>
                            <li className="tiles__item">Degenerative Disc Disease </li>
                            <li className="tiles__item">Cervical Radiculopathy  </li>
                            <li className="tiles__item">Facet Joint degeneration</li>
                            <li className="tiles__item">Thoracic Outlet Syndrome</li>
                            <li className="tiles__item">Deep Neck Muscle Strengthening  </li>
                            <li className="tiles__item">Chronic Neck Tension </li>
                            <li className="tiles__item">Cervicogenic Headaches and Migraines</li>
                            <li className="tiles__item">Tension Headache</li>
                            <li className="tiles__item">Myogenic Headache</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"upperbackconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={UpperbackConditionsImage} alt="Upper Back icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Upper-Back Conditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list no-border">
                            <li className="tiles__item">Thoraco-Lumbar Junction Syndrome</li>
                            <li className="tiles__item">Costochondritis</li>
                            <li className="tiles__item">T4 Syndrome</li>
                            <li className="tiles__item">Scapular Pathology</li>
                            <li className="tiles__item">Thoracic Disc Herniation</li>
                            <li className="tiles__item">Individual Muscle Pathology with Nerve Irritation</li>
                            <li className="tiles__item">Post-operative Upper Back Surgery</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"lowerbackconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={LowerBackConditionsImage} alt="LowerBackConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Lower Back and Sacro Iliac Joint Conditions</div>
                    <div className="tiles__content">
                        <ul className="tiles__list no-border">
                            <li className="tiles__item">Lumbar Disc Bulge and Herniation  </li>
                            <li className="tiles__item">Low back Facet joints strain/degeneration</li>
                            <li className="tiles__item">Instability (Spondylolisthesis/Spondylolysis)</li>
                            <li className="tiles__item">Muscle Pathologies (Lumbago/Mechanical</li>
                            <li className="tiles__item">Piriformis Syndrome</li>
                            <li className="tiles__item">Sacro Iliac Joint Strain</li>
                            <li className="tiles__item">Degenerative Disc Disease </li>
                            <li className="tiles__item">Discectomy and Fusion Surgery </li>
                            <li className="tiles__item">Back and Core Strengthening  </li>
                            <li className="tiles__item">Post-operative Low back Surgery </li>
                        </ul>
                    </div>
                </div>
            </div>
         <div id={"hipconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={HipConditionsImage} alt="HipConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Hip Conditions</div>
                    <div className="tiles__content">
                    <ul className="tiles__list no-border">
                            <li className="tiles__item">Labral Tears  </li>
                            <li className="tiles__item">Gluteal Weakness and Strengthening </li>
                            <li className="tiles__item">Groin Pain and Adductor Tendinopathy  </li>
                            <li className="tiles__item">Arthritis and Bursitis  </li>
                            <li className="tiles__item">Hip Flexor Tendinopathy and Weakness  </li>
                            <li className="tiles__item">Impingement</li>
                            <li className="tiles__item">Bursitis</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"kneeconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={KneeConditionsImageSVG} alt="KneeConditionsImageSVG icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Knee Conditions</div>
                    <div className="tiles__content">
                    <ul className="tiles__list no-border">
                            <li className="tiles__item">Patello-femoral or Anterior Knee Pain</li>
                            <li className="tiles__item">ACL Reconstructive Surgery  </li>
                            <li className="tiles__item">Post-operative Arthroscopic Surgery  </li>
                            <li className="tiles__item">Meniscal and Ligament Injuries  </li>
                            <li className="tiles__item">Muscle Tears and Strains  </li>
                            <li className="tiles__item">Runners ITB Syndrome  </li>
                            <li className="tiles__item">Hamstring Tendinopathies </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"ankleconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={AnkleConditionsImage} alt="AnkleConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Ankle and Foot Conditions</div>
                    <div className="tiles__content">
                    <ul className="tiles__list no-border">
                            <li className="tiles__item">Plantar Fasciitis/Heel Spur</li>
                            <li className="tiles__item">Calf Muscle Tears </li>
                            <li className="tiles__item">Tarsal tunnel syndrome</li>
                            <li className="tiles__item">Undisplaced and Stress Fractures </li>
                            <li className="tiles__item">Ligament Strain</li>
                            <li className="tiles__item">Bunions/sesamoiditis</li>
                            <li className="tiles__item">Ankle Reconstructive Surgery   </li>
                            <li className="tiles__item">Custom Foot Orthotics </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id={"paediatricconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={PaediatricConditionsImage} alt="PaediatricConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Paediatric Conditions</div>
                    <div className="tiles__content">
                    <ul className="tiles__list no-border">
                            <li className="tiles__item">Flat Feet</li>
                            <li className="tiles__item">Back pain</li>
                            <li className="tiles__item">Joint pains</li>
                            <li className="tiles__item">Neck pain</li>
                            <li className="tiles__item">Shoulder pain</li>
                            <li className="tiles__item">Knee pain </li>
                            <li className="tiles__item">Ankle and foot pain </li>
                            <li className="tiles__item">Childhood Walking Abnormalities</li>
                            <li className="tiles__item">Growing Pains</li>
                            <li className="tiles__item">Torticollis</li>
                            <li className="tiles__item">Osgood-Schlatter’s disease</li> 
                            <li className="tiles__item">Osteochondritis dissecans</li>
                            <li className="tiles__item">Postural problems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conditions;