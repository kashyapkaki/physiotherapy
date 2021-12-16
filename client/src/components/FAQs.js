import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "Do I need a referral from my doctor or GP?",
      content:
        "No, GP referrals are not necessary for physiotherapy. <br /><br />If you do have any GP referral letters, or reports from scans such as an MRI or an x-ray, please bring a copy for inclusion on your file. ",
    },
    {
      title:
        "I have an injury- how soon should I come and see you for assessment and treatment?",
      content:
        "This is up to you, but generally we would try and see you as soon as possible after your injury to advise you and start treatment. If you have recently had surgery, your consultant should advise you on when it is best to start your physiotherapy.",
    },
    {
      title:
        "I've got a problem; do I see a physiotherapist or massage therapist?",
      content:
        "We get this query a lot especially from people who are just passing by the clinic and haven’t received a specific recommendation. <br /><br />We generally advise people that if they have a specific pain or injury, they might benefit from seeing a physiotherapist first for a full assessment, diagnosis, and treatment. The physiotherapist will then refer on to the massage therapist if they think that this is appropriate.<br /><br />If the problem is tired/tense muscles (fairly generalised without a specific pain feature), often the massage therapist may be the most appropriate therapist to see in the first instance.",
    },
    {
      title: "When should I see a physiotherapist?",
      content:
        "There are many circumstances that you should see a physiotherapist for, some of the most common include:<br /><br />If you have any bruising, swelling, stiffness or a deformity<br /><br />If you have sustained an injury (at work, in a car accident or playing sport)<br /><br />If you’re experiencing muscle or joint aches or pains<br /><br />If you have pins and needles or numbness<br /><br />If you would like advice on weight loss and exercise programmes<br /><br />If you experience muscle weakness or joints giving way<br /><br />If you have problems with your balance or falling<br /><br />If you need advice on exercise or improving strength, fitness, or flexibility<br /><br />If you are returning to work or sport from an injury or surgery<br /><br />If you want to improve your sporting performance<br /><br />If you’ve recently had a baby, and are experiencing pain<br /><br />If you have a gradual niggling ache that gets worse with exercise<br /><br />If you have a niggling ache that eases as you exercise, only to come back once you have stopped your activity, or the next morning<br /><br />If your pain has lasted longer than 1 week<br /><br />If you have pain that restricts your normal activities of daily living<br /><br />If you have pain that wakes you up from your sleep every night<br /><br />If you have pain that is getting worse, causing numbness or pins and needles or limb weakness<br /><br />Feel free to contact us if you have any questions, or if you’re not sure if we can help.",
    },
    {
      title: "How long does initial consultation and treatment take?",
      content:
        "The length of treatment depends on a few factors including:<br /><br />The area of injury,<br /><br />The type of injury,<br /><br />Your stage of recovery,<br /><br />How much pain you are in, <br /><br />How irritable your symptoms are.<br /><br />Initial consultations often take longer than follow-up sessions as your physiotherapist will want to perform a few extra assessment techniques and ask a few extra questions to ensure they make the most accurate diagnosis of your problem.<br /><br />Generally, initial consults will take between 20-40 minutes. One of our physiotherapists can give you a more accurate estimation of consultation time by asking you these questions over the phone.",
    },
    {
      title: "How many appointments will I need?",
      content:
        "The number of appointments you will need depends on your condition and diagnosis. Some acute conditions may resolve quickly over a couple of appointments. Other conditions, which may be as a result of your job, sport, or lifestyle, may require regular treatment to help you make the best of your life.<br /><br />As we know each patient, each condition, each mechanism of injury and each injury history is different, these can all affect the prognosis of your condition.<br /><br />Based on your assessment, your physiotherapist will discuss the expected number of treatments and how you can expect your symptoms to resolve. We will fully explain all options to you as progress is made, as this is a team effort. You will be reassessed on each visit to check your progress.<br /><br />Please note that your therapist is genuinely interested in helping you resolve or manage your condition.",
    },
    {
      title: "Should I bring anything to my treatment session?",
      content:
        "If you have a referral, any scans (X-rays, MRI’s, ultrasounds etc.) or any important information related to your complaint/injury, bring them, and give it to your Physio.<br /><br />Try to think about what caused your injury, when it started, how it is progressing (better or worse), and comfort levels in different activities.",
    },
    {
      title: "Do you treat children?",
      content:
        "Yes, our physiotherapist treats children. Parents are required to be present in the treatment room to ensure the diagnosis and treatment is understood and agreed to. And of course, for the child’s comfort.",
    },
    {
      title: "Do you do home visits?",
      content:
        "Yes. We do provide a home visiting service in Dublin 9 and the surrounding area of our clinic location. Please contact us for more information.",
    },
    {
      title:
        "Is the cost of physiotherapy covered by medical insurance or private medical insurance – am I covered with you?",
      content:
        "A. Yes, our physiotherapist is chartered and registered with the Irish Chartered Physiotherapists and is CORU registered.<br /><br />All major Irish Health Insurance providers offer refunds for treatment by a Chartered Physiotherapist. <br /><br />To check your level of cover, please refer to your own policy for its terms and conditions.<br /><br />It is recommended to check with your insurance company before starting treatment as they may need to pre-authorise it.",
    },
    {
      title: "Is there a parking slot available for your client?",
      content:
        "Yes. We have a parking slot in front of the clinic for our clients.",
    },
    {
      title: "What about payment? What forms of payment do you accept?",
      content:
        "We accept cash and card. You must pay after each appointment by cash or card unless you have made other arrangements with your treating physiotherapist. You will get a receipt at the end of each session which can be used for tax or health insurance companies.",
    },
  ],
};

const FAQs = () => {
  return (
    <div className="faqs-main">
      <Faq data={data} />
    </div>
  );
};

export default FAQs;
