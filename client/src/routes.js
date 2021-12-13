import DryNeedling from "./components/Clinic_components/Service_components/UI/DryNeedling";
import ExerciseTherapy from "./components/Clinic_components/Service_components/UI/ExerciseTherapy";
import Musculoskeletal from "./components/Clinic_components/Service_components/UI/Musculoskeletal";
import PostOperative from "./components/Clinic_components/Service_components/UI/PostOperative";
import SportsInjuries from "./components/Clinic_components/Service_components/UI/SportsInjuries";
import About from "./components/About";
import Booking from "./components/Booking";
import Clinic from "./components/Clinic";
import AnkleConditions from "./components/Clinic_components/Condition_components/UI/AnkleConditions";
import ElbowConditions from "./components/Clinic_components/Condition_components/UI/ElbowConditions";
import HipConditions from "./components/Clinic_components/Condition_components/UI/HipConditions";
import KneeConditions from "./components/Clinic_components/Condition_components/UI/KneeConditions";
import MiddleLowerBackCondtions from "./components/Clinic_components/Condition_components/UI/MiddleLowerBackCondtions";
import NeckConditions from "./components/Clinic_components/Condition_components/UI/NeckConditions";
import PaediatricConditon from "./components/Clinic_components/Condition_components/UI/PaediatricConditon";
import ShoulderConditions from "./components/Clinic_components/Condition_components/UI/ShoulderConditions";
import UpperBackConditions from "./components/Clinic_components/Condition_components/UI/UpperBackConditions";
import WristHandConditions from "./components/Clinic_components/Condition_components/UI/WristHandConditions";
import Contact_Us from "./components/Contact_Us";
import Covid19 from "./components/Covid19";
import Fees from "./components/Fees";
import Home from "./components/Home";
import Home_Visit from "./components/Home_Visit";
import AgedCareConditions from "./components/Home_Visit_components/Conditions_components/UI/AgedCareRehab";
import NeurologicalConditions from "./components/Home_Visit_components/Conditions_components/UI/NeurologicalRehab";
import PostOperativeRehab from "./components/Home_Visit_components/Conditions_components/UI/OperativeRehab";
import OrthopaedicCondition from "./components/Home_Visit_components/Conditions_components/UI/OrthopaedicRehab";
import PainConditions from "./components/Home_Visit_components/Conditions_components/UI/PainManagment";
import AgedCareRehab from "./components/Home_Visit_components/Services_components/UI/AgedCareRehab";
import NeurologicalRehab from "./components/Home_Visit_components/Services_components/UI/NeurologicalRehab";
import OperativeRehab from "./components/Home_Visit_components/Services_components/UI/OperativeRehab";
import OrthopaedicRehab from "./components/Home_Visit_components/Services_components/UI/OrthopaedicRehab";
import PainManagment from "./components/Home_Visit_components/Services_components/UI/PainManagment";
import Testimonials from "./components/Testimonials";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/clinic",
    exact: true,
    component: Clinic,
  },
  {
    path: "/clinic/services/musculoskeletal",
    exact: true,
    component: Musculoskeletal,
  },
  {
    path: "/clinic/services/postoperative",
    exact: true,
    component: PostOperative,
  },
  {
    path: "/clinic/services/exercisetherapy",
    exact: true,
    component: ExerciseTherapy,
  },
  {
    path: "/clinic/services/sportsinjuries",
    exact: true,
    component: SportsInjuries,
  },
  {
    path: "/clinic/services/dryneedling",
    exact: true,
    component: DryNeedling,
  },
  {
    path: "/clinic/conditions/hip-conditions",
    exact: true,
    component: HipConditions,
  },
  {
    path: "/clinic/conditions/shoulder-conditions",
    exact: true,
    component: ShoulderConditions,
  },
  {
    path: "/clinic/conditions/wrist-conditions",
    exact: true,
    component: WristHandConditions,
  },
  {
    path: "/clinic/conditions/elbow-conditions",
    exact: true,
    component: ElbowConditions,
  },
  {
    path: "/clinic/conditions/paediatricconditions",
    exact: true,
    component: PaediatricConditon,
  },
  {
    path: "/clinic/conditions/neckconditions",
    exact: true,
    component: NeckConditions,
  },
  {
    path: "/clinic/conditions/kneeconditions",
    exact: true,
    component: KneeConditions,
  },
  {
    path: "/clinic/conditions/ankleconditions",
    exact: true,
    component: AnkleConditions,
  },
  {
    path: "/clinic/conditions/upper-backconditions",
    exact: true,
    component: UpperBackConditions,
  },
  {
    path: "/clinic/conditions/middle-backconditions",
    exact: true,
    component: MiddleLowerBackCondtions,
  },
  {
    path: "/homevisit/services/agedCareRehab",
    exact: true,
    component: AgedCareRehab,
  },
  {
    path: "/homevisit/services/operativerehab",
    exact: true,
    component: OperativeRehab,
  },
  {
    path: "/homevisit/services/orthopaedicrehab",
    exact: true,
    component: OrthopaedicRehab,
  },
  {
    path: "/homevisit/services/painmanagement",
    exact: true,
    component: PainManagment,
  },
  {
    path: "/homevisit/conditions/agedCareRehab",
    exact: true,
    component: AgedCareConditions,
  },
  {
    path: "/homevisit/conditions/neurologicalRehab",
    exact: true,
    component: NeurologicalConditions,
  },
  {
    path: "/homevisit/conditions/operativerehab",
    exact: true,
    component: PostOperativeRehab,
  },
  {
    path: "/homevisit/conditions/orthopaedicrehab",
    exact: true,
    component: OrthopaedicCondition,
  },
  {
    path: "/homevisit/conditions/painmanagement",
    exact: true,
    component: PainConditions,
  },
  {
    path: "/homevisit/services/neurologicalRehab",
    exact: true,
    component: NeurologicalRehab,
  },
  {
    path: "/homevisit",
    exact: true,
    component: Home_Visit,
  },
  {
    path: "/fees",
    exact: true,
    component: Fees,
  },
  {
    path: "/covid19",
    exact: true,
    component: Covid19,
  },
  {
    path: "/contactus",
    exact: true,
    component: Contact_Us,
  },
  {
    path: "/booking",
    exact: true,
    component: Booking,
  },
  {
    path: "/testimonials",
    exact: true,
    component: Testimonials,
  },
  {
    path: "/aboutus",
    exact: true,
    component: About,
  },
  {
    path: "/privacy-policy",
    exact: true,
    component: PrivacyPolicy,
  },
  {
    path: "/terms-conditions",
    exact: true,
    component: TermsConditions,
  },
];

export default routes;
