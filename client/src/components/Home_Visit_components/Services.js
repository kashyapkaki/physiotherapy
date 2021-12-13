import React from 'react';
import DryNeedlingImage from '../../images/DryNeedlingImage.jpg';
import ExerciseTherapyImage from '../../images/ExerciseTherapyImage.jpg';
import MusculoskeletalImage from '../../images/MusculoskeletalImage.jpg';
import PostRehabImage from '../../images/PostRehabImage.jpg';
import SportsInjuriesImage from '../../images/SportsInjuriesImage.jpg';

function Services(props) {
    return (
        <div className="clinic-services">
            <div className="clinic-services__title">
            Home Visit Services   
            </div>
            <div id={"musculoskeletal"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="musculoskeletal__img" src={MusculoskeletalImage} alt="Muculoskeletal icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Aged care, balance, falls prevention and rehabilitation</div>
                    <div className="tiles__content">
                        <p>Musculoskeletal physiotherapy is the management of acute and overuse injuries and impairments of the musculoskeletal system, with the primary goal of getting the patient back to being pain-free with full function as soon as possible, as well as maintaining the ability to self-manage their health going forward.</p>
                        <p>At our clinic, our chartered physiotherapist is specialised in the treatment of muscle and joint injuries. Typical musculoskeletal injuries may include carpel tunnel syndrome, tendinitis and bursitis and can be caused by prolonged sitting, overloading of particular muscle groups, repetitive movements, and more.</p>
                        <p>Treatment can help improve your flexibility, muscle strength, quality of movement and co-ordination in order to help prevent further injuries from occurring. Based on the severity of your injury, our physiotherapist can prescribe you with an exercise program to complete at home to enhance your recovery.</p>
                    </div>
                </div>
            </div>
            <div id={"sports-injuries"} className="clinic-services__body">
                <div className="sports-injuries__image clinic-services__logo">
                    <img className="sportsinjuries__img" src={SportsInjuriesImage} alt="Clinic page icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Neurological Physiotherapy and Rehabilitation </div>
                    <div className="tiles__content">
                        <p>Sports physiotherapy specialises in the treatment, rehabilitation and further prevention of injuries and complaints sustained during sporting activities.</p>
                        <p>Sports injuries differ from everyday injuries due to the greater stress put on muscles, joints, and bones through participation in sports.</p>
                        <p>The most common injuries associated with sports include ligament sprains, strains, tears, joint injuries, and over-use injuries. Our physiotherapists will assess and treat the cause of your injury allowing you to build the strength, mobility, balance, and co-ordination required to return to your sport pain free and to help prevent further injury.</p>
                    </div>
                </div>
            </div>
            <div id={"post-operative"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="postrehab__img" src={PostRehabImage} alt="Clinic page icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Orthopaedic Physiotherapy & Rehabilitation</div>
                    <div className="tiles__content">
                        <p>Following an orthopaedic surgery, it is likely that you will require physiotherapy to avoid certain complications, such as DVT, but also to re-introduce strength and a range of motion movements. You will be prescribed a progressive exercise program in order to build up flexibility, strength, and function. Our physiotherapists will tailor a programme specific to your surgery in order to aid you through the rehabilitation process to get you back to your everyday activities as soon as possible.</p>
                        <p>If you have injured yourself (either acute injuries or chronic) or you have had an orthopaedic surgery - YOU MUST DO REHAB TO STRENGTHEN THE AREA! This is so you return to full normal function, with no symptoms, and as low a risk as possible for re-injury. Rest and passive treatments are not enough. If you do not rehabilitate the injured tissue or surgically repaired tissue with exercise, you will be left with weak, non-remodelled scar tissue which is vulnerable and will fail in the future causing re-injury.</p>
                        <p>You will also address deficiencies and imbalances that may have contributed to the injury/impairment with targeted corrective and rehab exercises. You will be guided back to exercise and your sport or physical activity (or just back to normal life function) with careful progressions, based on tissue and surgery healing timeframes and achievement of certain progression criteria e.g., strength/capacity/ROM testing results.</p>
                        <p>You will eventually be fully cleared to return to your sport or physical activity and have a maintenance program for ongoing injury prevention.</p>
                    </div>
                </div>
            </div>
            <div id={"dry-needling"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="dryneedling__img" src={DryNeedlingImage} alt="Clinic page icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Pain Management Physiotherapy</div>
                    <div className="tiles__content">
                        <p>Dry Needling can be used to treat pain, caused by injuries, by inserting dry needles into trigger points which encourages tight muscles to relax. It can be useful in the treatment of both chronic and acute injuries. Our chartered physiotherapists are trained in dry needling and we offer this in conjunction with our regular physiotherapy service.</p>
                        <p>Dry needling penetrates a muscle into a trigger point (basically a knotted section in a muscle belly), with the goal of eliminating the trigger point to restore normal muscle length and tension.</p>
                        <p>Occasionally trigger point therapy with the hands is not as effective as desired, so we use a needle to penetrate deeper right into the heart of the issue.</p>
                        <p>Dry needling can also be used to unload and de-tension a generally tight muscle group, such as tight calves or hamstring, through deregulation of the neural system to cause muscle relaxation. Dry needling can also be used to stimulate a healing area, namely ligaments, which can promote blood flow and hence tissue healing.</p>
                    </div>
                </div>
            </div>
            <div id={"exercise-therapy"} className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img className="exercisetherapy__img" src={ExerciseTherapyImage} alt="Clinic page icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Pre- and Post-Operative Physiotherapy and Rehabilitation</div>
                    <div className="tiles__content">
                        <p>Exercise therapy is a vital element of injury rehabilitation to help prevent the re-occurrence of an injury. </p>
                        <p>Exercises can focus on an individual area, for example to strengthen an ankle after a sprain to prevent further injury, or your exercises may focus on a whole muscle group, such as glute and core strengthening to minimise and prevent lower back and hip pain.</p>
                        <p>Your exercise program will be progressed over time as your strength improves.</p>
                    </div>
                </div>
            </div>
            {/* <div id="musculoskeletal" className="clinic-services__body">
                <div className="clinic-services__logo">
                    <img src={ClinicPageIcon} alt="Clinic page icon"/>
                </div>
                <div className="tiles clinic-services__intro-tile">
                    <div className="tiles__header">Musculoskeletal</div>
                    <div className="tiles__content">At 365 Physiotherapy, we improve your quality of life by looking at all the details. Our philosophy is to enable freedom of mind and movement through physiotherapy. By intervening early you‘ll see better results; we work to prevent problems, not just fix them. We look at the whole you to determine how to influence change. By intervening early you‘ll see better results; we work to prevent problems, not just fix them.</div>
                </div>
            </div> */}
        </div>

    );
}

export default Services;