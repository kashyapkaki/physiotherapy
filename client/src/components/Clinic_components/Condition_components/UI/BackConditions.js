import LowerBackConditionsImage from '@/images/LowerBackConditionsImage.jpg';
import UpperbackConditionsImage from '@/images/UpperBackConditionsImage.png';
import React from 'react';


function BackConditions() {
    return (
        <div className="clinic-background-page conditions__container">
            <div id={"upperbackconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={UpperbackConditionsImage}
                        alt="Upper Back icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Upper-Back Conditions</div>
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
            <div id={"lowerbackconditions"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img
                        className="musculoskeletal__img"
                        src={LowerBackConditionsImage}
                        alt="LowerBackConditionsImage icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="conditions__tile-header">Lower Back and Sacro Iliac Joint Conditions</div>
                    <ul className="tiles__list no-border">
                        <li className="tiles__item">Lumbar Disc Bulge and Herniation
                        </li>
                        <li className="tiles__item">Low back Facet joints strain/degeneration</li>
                        <li className="tiles__item">Instability (Spondylolisthesis/Spondylolysis)</li>
                        <li className="tiles__item">Muscle Pathologies (Lumbago/Mechanical</li>
                        <li className="tiles__item">Piriformis Syndrome</li>
                        <li className="tiles__item">Sacro Iliac Joint Strain</li>
                        <li className="tiles__item">Degenerative Disc Disease
                        </li>
                        <li className="tiles__item">Discectomy and Fusion Surgery
                        </li>
                        <li className="tiles__item">Back and Core Strengthening
                        </li>
                        <li className="tiles__item">Post-operative Low back Surgery
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BackConditions
