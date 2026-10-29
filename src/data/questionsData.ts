import { Question } from '../types/quiz';

export const questionsData: Question[] = [
  // ==========================================
  // CATEGORY 1: MODAL VERBS AND OBLIGATIONS (1-10)
  // ==========================================
  {
    id: 'mod-01-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'easy',
    prompt: "Santiago is working remotely from home today, so he ______ wear formal office attire.",
    options: [
      { id: 'A', text: "Santiago is working remotely today, so he must wear formal office attire." },
      { id: 'B', text: "Santiago is working remotely today, so he doesn't have to wear formal office attire." },
      { id: 'C', text: "Santiago is working remotely today, so he shouldn't wear formal office attire." },
      { id: 'D', text: "Santiago is working remotely today, so he has to wear formal office attire." }
    ],
    correctAnswer: 'B',
    explanationEnglish: "We use 'doesn't have to' to express lack of obligation. Since Santiago is working from home, dressing in formal office clothes is not required.",
    grammarStructure: "Subject + doesn't have to + base verb (lack of necessity / optional).",
    exampleSentences: [
      "She doesn't have to cook dinner tonight because we ordered delivery.",
      "Apprentices don't have to attend on national holidays."
    ],
    explanationSpanish: "En español: Usamos 'doesn't have to' (no tiene que / no es necesario que) para indicar falta de obligación. Como Santiago trabaja desde casa, no tiene la obligación de usar ropa formal.",
    commonDistractorNote: "Option C ('shouldn't') gives negative advice, whereas Option A and D indicate mandatory obligation, which contradicts teleworking.",
    rememberTip: "Remember: 'Doesn't have to' = lack of obligation (it's optional); 'Mustn't' = prohibition (it's forbidden)."
  },
  {
    id: 'mod-02-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'easy',
    prompt: "Excuse me sir, but passengers ______ bring flammable chemical substances into the passenger cabin.",
    options: [
      { id: 'A', text: "Passengers mustn't bring flammable chemical substances into the cabin." },
      { id: 'B', text: "Passengers don't have to bring flammable chemical substances into the cabin." },
      { id: 'C', text: "Passengers could bring flammable chemical substances into the cabin." },
      { id: 'D', text: "Passengers might bring flammable chemical substances into the cabin." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Mustn't' (must not) is used to express strict prohibition by aviation security regulations. Hazardous flammables are forbidden on planes.",
    grammarStructure: "Subject + mustn't + base verb (strict prohibition).",
    exampleSentences: [
      "Travelers mustn't carry sharp objects through security checkpoints.",
      "You mustn't enter the operating room without sterile footwear."
    ],
    explanationSpanish: "En español: 'Mustn't' expresa prohibición absoluta impuesta por normas de seguridad aérea ('está prohibido llevar sustancias inflamables').",
    commonDistractorNote: "Option B ('don't have to') would mean bringing flammables is optional, which contradicts safety laws.",
    rememberTip: "Safety and security rules that prohibit dangerous behavior always require 'must not / mustn't'."
  },
  {
    id: 'mod-03-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'easy',
    prompt: "If you want to achieve an international English certification, you ______ practice listening to varied accents every day.",
    options: [
      { id: 'A', text: "If you want to achieve certification, you should practice listening every day." },
      { id: 'B', text: "If you want to achieve certification, you shouldn't practice listening every day." },
      { id: 'C', text: "If you want to achieve certification, you can't practice listening every day." },
      { id: 'D', text: "If you want to achieve certification, you mustn't practice listening every day." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "We use 'should' to give helpful, positive advice and recommendations for academic success and language learning.",
    grammarStructure: "Subject + should + base verb (advice / recommendation).",
    exampleSentences: [
      "You should review your notes before taking the practical quiz.",
      "Learners should speak aloud to build oral fluency."
    ],
    explanationSpanish: "En español: Usamos 'should' (deberías) para dar un consejo o recomendación constructiva para alcanzar una meta.",
    commonDistractorNote: "Options B, C, and D are all negative forms that advise against studying, making them contextually absurd.",
    rememberTip: "Use 'should' for sound advice: Should + base form of the verb."
  },
  {
    id: 'mod-04-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'intermediate',
    prompt: "All apprentices ______ clock in their laboratory attendance before 8:00 AM; it is a mandatory institutional rule.",
    options: [
      { id: 'A', text: "All apprentices have to clock in their attendance before 8:00 AM." },
      { id: 'B', text: "All apprentices don't have to clock in their attendance before 8:00 AM." },
      { id: 'C', text: "All apprentices might not clock in their attendance before 8:00 AM." },
      { id: 'D', text: "All apprentices shouldn't clock in their attendance before 8:00 AM." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Have to' expresses an external obligation imposed by institutional policies and training regulations.",
    grammarStructure: "Subject + have to + base verb (external institutional rule).",
    exampleSentences: [
      "Employees have to scan their security badges at the entrance turnstile.",
      "Drivers have to stop when the traffic light turns red."
    ],
    explanationSpanish: "En español: 'Have to' expresa obligación externa obligatoria proveniente del reglamento institucional del SENA.",
    commonDistractorNote: "Option B ('don't have to') is the opposite of a mandatory institutional rule.",
    rememberTip: "When a formal schedule or external regulation is mentioned, 'have to' or 'must' is required."
  },
  {
    id: 'mod-05-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'intermediate',
    prompt: "The surgical instruments have already been sterilized by the morning staff. You ______ sanitize them again.",
    options: [
      { id: 'A', text: "You don't have to sanitize them again." },
      { id: 'B', text: "You mustn't sanitize them again." },
      { id: 'C', text: "You can't to sanitize them again." },
      { id: 'D', text: "You must sanitize them again." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Don't have to' signifies that the task is unnecessary because it was already completed by the previous team.",
    grammarStructure: "Subject + don't have to + base verb (absence of obligation).",
    exampleSentences: [
      "We already bought the plane tickets, so you don't have to worry about travel arrangements.",
      "He doesn't have to reprint the document because I already saved a digital copy."
    ],
    explanationSpanish: "En español: 'Don't have to' indica que no es necesario realizar la acción porque ya fue realizada previamente por el equipo de la mañana.",
    commonDistractorNote: "Option B ('mustn't') implies that cleaning them is forbidden, which is inaccurate. Option C incorrectly adds 'to' after 'can't'.",
    rememberTip: "Modal verbs like 'can', 'must', and 'should' are never followed by 'to'."
  },
  {
    id: 'mod-06-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'intermediate',
    prompt: "Test takers ______ open unauthorized browser tabs while taking the official proctored assessment.",
    options: [
      { id: 'A', text: "Test takers mustn't open unauthorized browser tabs." },
      { id: 'B', text: "Test takers don't have to open unauthorized browser tabs." },
      { id: 'C', text: "Test takers can open unauthorized browser tabs." },
      { id: 'D', text: "Test takers should open unauthorized browser tabs." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Mustn't' expresses strict academic prohibition against cheating and unauthorized browsing during exams.",
    grammarStructure: "Subject + mustn't + base verb (prohibition / strictly forbidden).",
    exampleSentences: [
      "Students mustn't communicate with other candidates during the exam.",
      "You mustn't use automated translation tools during the language proficiency test."
    ],
    explanationSpanish: "En español: 'Mustn't' indica prohibición estricta en el contexto de evaluaciones formales (está terminantemente prohibido abrir otras pestañas).",
    commonDistractorNote: "Option B ('don't have to') would mean it's optional, failing to convey the violation of exam integrity.",
    rememberTip: "Exam rules and anti-cheating guidelines always use 'mustn't'."
  },
  {
    id: 'mod-07-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'easy',
    prompt: "You have a decisive interview with the engineering manager tomorrow. You ______ postpone your preparation until late tonight.",
    options: [
      { id: 'A', text: "You shouldn't postpone your preparation until late tonight." },
      { id: 'B', text: "You must postpone your preparation until late tonight." },
      { id: 'C', text: "You don't have postpone your preparation until late tonight." },
      { id: 'D', text: "You can postpone your preparation until late tonight." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Shouldn't' provides sensible negative advice: leaving preparation until late at night before an interview is ill-advised.",
    grammarStructure: "Subject + shouldn't + base verb (negative recommendation).",
    exampleSentences: [
      "You shouldn't skip the safety demonstration before using heavy equipment.",
      "She shouldn't drive when she feels drowsy."
    ],
    explanationSpanish: "En español: 'Shouldn't' (no deberías) desaconseja una acción imprudente como dejar la preparación para última hora.",
    commonDistractorNote: "Option C misses 'to' ('don't have to') and gives the wrong meaning.",
    rememberTip: "Formula for negative advice: Subject + shouldn't + base verb."
  },
  {
    id: 'mod-08-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'intermediate',
    prompt: "Registered SENA apprentices with active institutional credentials ______ access the online research library 24 hours a day.",
    options: [
      { id: 'A', text: "Registered apprentices can access the online library 24 hours a day." },
      { id: 'B', text: "Registered apprentices mustn't access the online library 24 hours a day." },
      { id: 'C', text: "Registered apprentices have not to access the online library 24 hours a day." },
      { id: 'D', text: "Registered apprentices shouldn't access the online library 24 hours a day." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Can' expresses capability and institutional permission granted to credentialed apprentices.",
    grammarStructure: "Subject + can + base verb (capability / permission).",
    exampleSentences: [
      "Enrolled apprentices can download specialized engineering software for free.",
      "Authorized staff can reserve conference rooms online."
    ],
    explanationSpanish: "En español: 'Can' expresa permiso o facultad de los aprendices registrados para acceder a la biblioteca virtual en cualquier momento.",
    commonDistractorNote: "Option C ('have not to') is ungrammatical; the negative of have to is 'don't have to'.",
    rememberTip: "Remember: 'Can' expresses permission or capability. Never say 'have not to'."
  },
  {
    id: 'mod-09-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'intermediate',
    prompt: "According to workplace biosafety regulations, all laboratory technicians ______ wear certified eye protection when manipulating acid reagents.",
    options: [
      { id: 'A', text: "Laboratory technicians must wear certified eye protection." },
      { id: 'B', text: "Laboratory technicians don't have to wear certified eye protection." },
      { id: 'C', text: "Laboratory technicians shouldn't wear certified eye protection." },
      { id: 'D', text: "Laboratory technicians can't wear certified eye protection." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Must' expresses formal, binding obligation under official occupational health and biosafety laws.",
    grammarStructure: "Subject + must + base verb (mandatory regulation).",
    exampleSentences: [
      "Electricians must verify that circuits are disconnected before touching exposed wiring.",
      "Crane operators must perform a daily mechanical inspection."
    ],
    explanationSpanish: "En español: 'Must' expresa obligación legal y de bioseguridad laboral ineludible ('deben usar protección ocular').",
    commonDistractorNote: "Option B ('don't have to') is false because safety gear is never optional around dangerous acids.",
    rememberTip: "Legal biosafety and chemical standards require 'must' or 'have to'."
  },
  {
    id: 'mod-10-v2',
    category: 'modal_verbs',
    categoryLabel: 'Modal Verbs & Obligations',
    difficulty: 'advanced',
    prompt: "You ______ operate that industrial laser cutter without safety shields; you could suffer irreversible retinal damage!",
    options: [
      { id: 'A', text: "You mustn't operate that laser cutter without safety shields!" },
      { id: 'B', text: "You don't have to operate that laser cutter without safety shields!" },
      { id: 'C', text: "You could operate that laser cutter without safety shields!" },
      { id: 'D', text: "You might operate that laser cutter without safety shields!" }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Mustn't' expresses an urgent safety prohibition to avert severe, permanent physical harm.",
    grammarStructure: "Subject + mustn't + base verb (urgent safety prohibition).",
    exampleSentences: [
      "Workers mustn't enter the grain silo without an oxygen monitor.",
      "You mustn't bypass the machine's emergency cutoff switch."
    ],
    explanationSpanish: "En español: 'Mustn't' expresa prohibición absoluta ante peligros que amenazan la integridad física ('¡Bajo ninguna circunstancia debes operar ese láser sin protectores!').",
    commonDistractorNote: "Option B ('don't have to') would foolishly suggest operating without shields is merely optional rather than life-threatening.",
    rememberTip: "Immediate physical hazards always take 'mustn't' (must not)."
  },

  // ==========================================
  // CATEGORY 2: FIRST AND SECOND CONDITIONALS (11-20)
  // ==========================================
  {
    id: 'cond12-01-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'easy',
    prompt: "If the enterprise client ______ the system architecture tomorrow, our development sprint will finish ahead of schedule.",
    options: [
      { id: 'A', text: "If the client approves the architecture, our sprint will finish ahead of schedule." },
      { id: 'B', text: "If the client approved the architecture, our sprint will finish ahead of schedule." },
      { id: 'C', text: "If the client will approve the architecture, our sprint will finish ahead of schedule." },
      { id: 'D', text: "If the client would approve the architecture, our sprint will finish ahead of schedule." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "First Conditional: The result clause is 'will finish' (real future consequence). The condition clause requires Present Simple third-person singular ('approves').",
    grammarStructure: "If + Present Simple (approves), Subject + will + base verb (will finish).",
    exampleSentences: [
      "If the instructor signs the form, the apprentice will receive the scholarship.",
      "If the customer confirms the payment, the warehouse will ship the parts."
    ],
    explanationSpanish: "En español: Primer condicional para situaciones futuras reales. La cláusula con 'if' lleva el presente simple ('approves') y el resultado lleva 'will finish'.",
    commonDistractorNote: "Never put 'will' inside the if-clause (Option C). Use the present simple tense.",
    rememberTip: "First conditional rule: If + Present Simple, will + base verb."
  },
  {
    id: 'cond12-02-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'easy',
    prompt: "If I ______ fluent in French as well as English, I would apply for that diplomatic translator fellowship.",
    options: [
      { id: 'A', text: "If I were fluent in French, I would apply for that fellowship." },
      { id: 'B', text: "If I will be fluent in French, I would apply for that fellowship." },
      { id: 'C', text: "If I am being fluent in French, I would apply for that fellowship." },
      { id: 'D', text: "If I would be fluent in French, I would apply for that fellowship." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Second Conditional: For unreal or hypothetical present states with the verb 'to be', 'were' is standard for all grammatical persons (including 'I'). The result clause uses 'would apply'.",
    grammarStructure: "If + were (subjunctive past), Subject + would + base verb.",
    exampleSentences: [
      "If she were bilingual, she would work for international airlines.",
      "If I were older, I would run for municipal council."
    ],
    explanationSpanish: "En español: Segundo condicional formal. Para situaciones hipotéticas del presente, se utiliza 'were' con todas las personas (I, he, she, it) al plantear la condición.",
    commonDistractorNote: "Option D incorrectly uses 'would be' inside the if-clause. The if-clause requires the subjunctive past form 'were'.",
    rememberTip: "Use 'If I were...' (not 'If I would be') for hypothetical conditions in the second conditional."
  },
  {
    id: 'cond12-03-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'intermediate',
    prompt: "If our manufacturing plant invests in solar panels this quarter, we ______ our monthly grid electricity expenses by forty percent.",
    options: [
      { id: 'A', text: "If our plant invests in solar panels, we will reduce our electricity expenses." },
      { id: 'B', text: "If our plant invests in solar panels, we would reduce our electricity expenses." },
      { id: 'C', text: "If our plant invests in solar panels, we reduced our electricity expenses." },
      { id: 'D', text: "If our plant invests in solar panels, we would have reduced our electricity expenses." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "First Conditional: The condition is in the Present Simple ('invests'), so the realistic future outcome requires 'will + base verb' ('will reduce').",
    grammarStructure: "If + Present Simple, Subject + will + base verb.",
    exampleSentences: [
      "If we insulate the workshop roof, we will save on heating bills.",
      "If they upgrade the network servers, employees will work faster."
    ],
    explanationSpanish: "En español: Primer condicional. Como la condición está en presente simple ('invests'), el resultado futuro probable debe expresarse con 'will reduce'.",
    commonDistractorNote: "Option B ('would reduce') would require the past tense 'invested' in the condition clause.",
    rememberTip: "Pair Present Simple with 'will', and Past Simple with 'would'."
  },
  {
    id: 'cond12-04-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'intermediate',
    prompt: "If I lived closer to the technical training center, I ______ to class by bicycle every morning.",
    options: [
      { id: 'A', text: "If I lived closer to the center, I would commute by bicycle." },
      { id: 'B', text: "If I lived closer to the center, I will commute by bicycle." },
      { id: 'C', text: "If I lived closer to the center, I commuted will by bicycle." },
      { id: 'D', text: "If I lived closer to the center, I would commuted by bicycle." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Second Conditional: 'lived' is in the Past Simple representing a hypothetical present situation. The result clause requires 'would + base verb' ('would commute').",
    grammarStructure: "If + Past Simple (lived), Subject + would + base verb (commute).",
    exampleSentences: [
      "If she owned a laptop, she would study in the library garden.",
      "If we had a workshop vehicle, we would transport tools directly."
    ],
    explanationSpanish: "En español: Segundo condicional. Como el hablante no vive cerca (situación hipotética en pasado simple 'lived'), el resultado se forma con 'would commute'.",
    commonDistractorNote: "Option D incorrectly uses a past participle ('commuted') after the modal 'would'. Modals are always followed by the base form.",
    rememberTip: "Modal verbs are always followed by the BASE form of the verb: would commute (never 'would commuted')."
  },
  {
    id: 'cond12-05-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'intermediate',
    prompt: "Where ______ you travel if you were awarded a six-month international research scholarship?",
    options: [
      { id: 'A', text: "Where would you travel if you were awarded a scholarship?" },
      { id: 'B', text: "Where will you travel if you were awarded a scholarship?" },
      { id: 'C', text: "Where did you travel if you were awarded a scholarship?" },
      { id: 'D', text: "Where do you travel if you were awarded a scholarship?" }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Second Conditional interrogative: The if-clause uses the hypothetical past ('were awarded'), so the question requires 'would + subject + base verb' ('would you travel').",
    grammarStructure: "Question word + would + Subject + base verb + if + Past Simple?",
    exampleSentences: [
      "What would you do if your computer broke during an online exam?",
      "Which specialization would you choose if you had the opportunity?"
    ],
    explanationSpanish: "En español: Pregunta en segundo condicional. Como la condición es hipotética ('were awarded'), la interrogación se formula con 'would you travel'.",
    commonDistractorNote: "Option B ('will') is incorrect because 'will' cannot pair with the past subjunctive 'were awarded'.",
    rememberTip: "Question order in second conditional: Wh-word + would + Subject + base verb."
  },
  {
    id: 'cond12-06-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'easy',
    prompt: "The backup diesel generator will activate automatically if the municipal power grid ______ off.",
    options: [
      { id: 'A', text: "The generator will activate if the municipal power grid cuts off." },
      { id: 'B', text: "The generator will activate if the municipal power grid will cut off." },
      { id: 'C', text: "The generator will activate if the municipal power grid cutted off." },
      { id: 'D', text: "The generator will activate if the municipal power grid would cut off." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "First Conditional with reversed clause order: Result clause first ('will activate') followed by 'if + Present Simple' ('cuts off') for third-person singular ('the municipal power grid').",
    grammarStructure: "Subject + will + base verb + if + Present Simple (cuts off).",
    exampleSentences: [
      "The sprinkler system will turn on if smoke registers in the sensor.",
      "The alarm will sound if an unauthorized person opens the exit door."
    ],
    explanationSpanish: "En español: Primer condicional con orden invertido. La cláusula principal va primero ('will activate') y la condición con 'if' va después en presente simple ('cuts off').",
    commonDistractorNote: "Option B puts 'will' after 'if', which is a classic grammar error.",
    rememberTip: "Even when 'if' comes in the middle of the sentence, it still takes the simple present in the first conditional!"
  },
  {
    id: 'cond12-07-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'intermediate',
    prompt: "If Camila had more practical experience with industrial automation, she ______ the robotics engineering team.",
    options: [
      { id: 'A', text: "If Camila had more experience, she would lead the robotics team." },
      { id: 'B', text: "If Camila had more experience, she will lead the robotics team." },
      { id: 'C', text: "If Camila had more experience, she led the robotics team." },
      { id: 'D', text: "If Camila had more experience, she would have led the robotics team." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Second Conditional: 'had' is in the Past Simple (expressing current hypothetical state), so the main clause requires 'would + base verb' ('would lead').",
    grammarStructure: "If + Past Simple (had), Subject + would + base verb (lead).",
    exampleSentences: [
      "If he had better communication skills, he would manage client relations.",
      "If we had a 3D scanner, we would create reverse-engineered blueprints."
    ],
    explanationSpanish: "En español: Segundo condicional. Describe una situación hipotética del presente ('had more experience'); su consecuencia se expresa con 'would lead'.",
    commonDistractorNote: "Option D ('would have led') belongs to the third conditional, which would require 'had had' in the condition.",
    rememberTip: "A single 'had' before a noun is Past Simple -> requires 'would + base verb'."
  },
  {
    id: 'cond12-08-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'intermediate',
    prompt: "You will not receive your vocational competence certificate if you ______ your final practical evidence portfolio.",
    options: [
      { id: 'A', text: "You will not receive your certificate if you don't submit your evidence." },
      { id: 'B', text: "You will not receive your certificate if you won't submit your evidence." },
      { id: 'C', text: "You will not receive your certificate if you didn't submit your evidence." },
      { id: 'D', text: "You will not receive your certificate if you wouldn't submit your evidence." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Negative First Conditional: Main clause is future negative ('will not receive'), so the negative if-clause uses Present Simple with 'don't submit'.",
    grammarStructure: "Subject + will not + base verb + if + don't + base verb.",
    exampleSentences: [
      "You will not pass the safety audit if you don't keep digital maintenance logs.",
      "The engine will fail if you don't replace the motor oil."
    ],
    explanationSpanish: "En español: Primer condicional negativo. La condición con 'if' se niega en presente simple con 'don't submit' para coordinarse con el resultado futuro 'will not receive'.",
    commonDistractorNote: "Option B ('won't submit') places future tense in the condition clause, which is grammatically incorrect.",
    rememberTip: "Express negative conditions in the present with 'don't / doesn't', never 'won't'."
  },
  {
    id: 'cond12-09-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'intermediate',
    prompt: "If I ______ in your position, I would ask the technical instructor for clarification before submitting the project.",
    options: [
      { id: 'A', text: "If I were in your position, I would ask the instructor for clarification." },
      { id: 'B', text: "If I was to be in your position, I would ask the instructor for clarification." },
      { id: 'C', text: "If I am in your position, I would ask the instructor for clarification." },
      { id: 'D', text: "If I will be in your position, I would ask the instructor for clarification." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'If I were in your position' is a standard idiom for offering advice using the Second Conditional subjunctive 'were'.",
    grammarStructure: "If I were in your position, I would + base verb.",
    exampleSentences: [
      "If I were you, I would back up the database before installing the update.",
      "If she were in charge, she would implement agile methodology."
    ],
    explanationSpanish: "En español: 'If I were in your position' (Si estuviera en tu lugar) es la fórmula estándar de consejo en el segundo condicional con subjuntivo 'were'.",
    commonDistractorNote: "Option C ('am') creates an impossible tense clash with the conditional modal 'would ask'.",
    rememberTip: "Remember the advice formula: 'If I were in your position, I would...'"
  },
  {
    id: 'cond12-10-v2',
    category: 'first_second_conditionals',
    categoryLabel: 'First & Second Conditionals',
    difficulty: 'advanced',
    prompt: "If the diagnostic test ______ no mechanical defects, the technical supervisor will sign the release document.",
    options: [
      { id: 'A', text: "If the diagnostic test shows no defects, the supervisor will sign." },
      { id: 'B', text: "If the diagnostic test showed no defects, the supervisor will sign." },
      { id: 'C', text: "If the diagnostic test will show no defects, the supervisor will sign." },
      { id: 'D', text: "If the diagnostic test would show no defects, the supervisor will sign." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "First Conditional: Subject is third-person singular ('the diagnostic test'), requiring Present Simple with -s ('shows') to pair with 'will sign'.",
    grammarStructure: "If + Subject (singular) + verb-s (shows), Subject + will + base verb.",
    exampleSentences: [
      "If the sensor detects a gas leak, the alarm will sound immediately.",
      "If the software passes unit tests, the engineer will deploy the build."
    ],
    explanationSpanish: "En español: Primer condicional con sujeto singular en tercera persona ('the diagnostic test' = it), por lo que el verbo en presente simple requiere -s ('shows').",
    commonDistractorNote: "Option B ('showed') is past tense and would require 'would sign' instead of 'will sign'.",
    rememberTip: "Always verify third-person singular agreement (-s) in the Present Simple condition!"
  },

  // ==========================================
  // CATEGORY 3: THIRD CONDITIONAL AND MIXED CONDITIONALS (21-30)
  // ==========================================
  {
    id: 'cond3m-01-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'intermediate',
    prompt: "If the flight crew had detected the hydraulic malfunction earlier, the emergency landing ______ avoided.",
    options: [
      { id: 'A', text: "If the crew had detected the malfunction, the landing would have been avoided." },
      { id: 'B', text: "If the crew had detected the malfunction, the landing would be avoided." },
      { id: 'C', text: "If the crew had detected the malfunction, the landing will have been avoided." },
      { id: 'D', text: "If the crew had detected the malfunction, the landing had been avoided." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third Conditional passive voice: Both condition and result occurred in the completed past. Structure: 'If + Past Perfect (had detected), would have been + past participle (would have been avoided)'.",
    grammarStructure: "If + had + past participle, Subject + would have been + past participle (past counterfactual passive).",
    exampleSentences: [
      "If the alarm had rung on time, the building would have been evacuated sooner.",
      "If the road had been cleared, the accident would have been avoided."
    ],
    explanationSpanish: "En español: Tercer condicional en voz pasiva referido a un suceso del pasado. Estructura: If + past perfect ('had detected'), would have been + participio pasado ('would have been avoided').",
    commonDistractorNote: "Option B ('would be avoided') refers to a present result, but here the emergency landing was already completed in the past.",
    rememberTip: "Third Conditional Passive: would have been + past participle."
  },
  {
    id: 'cond3m-02-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'advanced',
    prompt: "If Mateo had completed that cloud architecture certification two years ago, he ______ as a senior systems architect right now.",
    options: [
      { id: 'A', text: "If Mateo had completed that certification, he would be working as an architect right now." },
      { id: 'B', text: "If Mateo had completed that certification, he will be working as an architect right now." },
      { id: 'C', text: "If Mateo had completed that certification, he had worked as an architect right now." },
      { id: 'D', text: "If Mateo had completed that certification, he would have worked as an architect right now." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Mixed Conditional: An unfulfilled action in the past ('two years ago' -> 'had completed') that has an ongoing consequence in the present ('right now' -> 'would be working').",
    grammarStructure: "If + Past Perfect (past condition), Subject + would be + -ing (present result) + right now.",
    exampleSentences: [
      "If I had learned to drive last year, I would be driving my own car right now.",
      "If they had moved to Canada, they would be enjoying the winter festival now."
    ],
    explanationSpanish: "En español: Condicional mixto (Condición pasada con resultado presente). Una acción que no se hizo hace dos años influye en la ocupación actual ('right now'), por lo que se usa 'would be working'.",
    commonDistractorNote: "Option D ('would have worked') refers strictly to past time and ignores the present time anchor 'right now'.",
    rememberTip: "Look for 'right now' or 'now' in the result clause: it signals a mixed conditional with 'would be + verb-ing'!"
  },
  {
    id: 'cond3m-03-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'intermediate',
    prompt: "If the laboratory analyst ______ the temperature calibration yesterday, the chemical reaction wouldn't have failed.",
    options: [
      { id: 'A', text: "If the analyst had verified the calibration, the reaction wouldn't have failed." },
      { id: 'B', text: "If the analyst verified the calibration, the reaction wouldn't have failed." },
      { id: 'C', text: "If the analyst would verify the calibration, the reaction wouldn't have failed." },
      { id: 'D', text: "If the analyst has verified the calibration, the reaction wouldn't have failed." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "The result clause is in the Third Conditional ('wouldn't have failed'), which requires the Past Perfect ('had verified') in the if-clause.",
    grammarStructure: "If + had + past participle (verified), Subject + wouldn't have + past participle (failed).",
    exampleSentences: [
      "If the mechanic had tightened the bolt, the wheel wouldn't have come loose.",
      "If she had saved the spreadsheet, she wouldn't have lost the calculations."
    ],
    explanationSpanish: "En español: Tercer condicional. La cláusula de resultado contiene 'wouldn't have failed', por lo que la condición con 'if' debe usar el pasado perfecto 'had verified'.",
    commonDistractorNote: "Option B ('verified') is simple past, which cannot pair with 'wouldn't have failed' in a standard third conditional.",
    rememberTip: "Never use 'would' in the 'if' clause: use 'had + past participle'."
  },
  {
    id: 'cond3m-04-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'advanced',
    prompt: "If our team had secured that international innovation grant in 2023, we ______ our manufacturing operations in Germany today.",
    options: [
      { id: 'A', text: "If we had secured that grant, we would be running operations in Germany today." },
      { id: 'B', text: "If we had secured that grant, we will be running operations in Germany today." },
      { id: 'C', text: "If we had secured that grant, we had run operations in Germany today." },
      { id: 'D', text: "If we had secured that grant, we would have run operations in Germany today." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Mixed Conditional: Past event ('in 2023' -> 'had secured') with a present result ('today' -> 'would be running').",
    grammarStructure: "If + Past Perfect, Subject + would be + -ing (present result) + today.",
    exampleSentences: [
      "If Carlos had accepted the transfer last semester, he would be studying in Madrid today.",
      "If we hadn't sold the patent, we would be receiving royalty payments today."
    ],
    explanationSpanish: "En español: Condicional mixto: La concesión del grant ocurrió en el pasado ('in 2023'), pero la consecuencia se evalúa en el presente ('today'), por lo que se utiliza 'would be running'.",
    commonDistractorNote: "Option D ('would have run') would describe a completed action in the past, disregarding 'today'.",
    rememberTip: "Past action + 'today' = Mixed conditional (would be + -ing)."
  },
  {
    id: 'cond3m-05-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'intermediate',
    prompt: "The manufacturing assembly line wouldn't have shut down if the operators ______ the preventive maintenance checklist.",
    options: [
      { id: 'A', text: "The line wouldn't have shut down if the operators had followed the checklist." },
      { id: 'B', text: "The line wouldn't have shut down if the operators followed the checklist." },
      { id: 'C', text: "The line wouldn't have shut down if the operators would follow the checklist." },
      { id: 'D', text: "The line wouldn't have shut down if the operators would have followed the checklist." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third Conditional with inverted clause order: The result clause is first ('wouldn't have shut down'), so the if-clause requires the Past Perfect ('had followed').",
    grammarStructure: "Main clause (wouldn't have + past participle) + if + Past Perfect (had followed).",
    exampleSentences: [
      "The engine wouldn't have seized if the driver had checked the oil level.",
      "The server wouldn't have crashed if the technicians had applied the patch."
    ],
    explanationSpanish: "En español: Tercer condicional con cláusula principal al inicio. La condición con 'if' que sigue debe llevar 'had followed' (pasado perfecto).",
    commonDistractorNote: "Option D ('would have followed') repeats 'would have' inside the condition, which is a major error in English syntax.",
    rememberTip: "'Would have' never goes in the 'if' clause!"
  },
  {
    id: 'cond3m-06-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'advanced',
    prompt: "If Sofia had saved a portion of her internship stipend every month, she ______ in financial distress right now.",
    options: [
      { id: 'A', text: "If Sofia had saved her stipend, she wouldn't be in financial distress right now." },
      { id: 'B', text: "If Sofia had saved her stipend, she wouldn't have been in distress right now." },
      { id: 'C', text: "If Sofia had saved her stipend, she won't be in financial distress right now." },
      { id: 'D', text: "If Sofia had saved her stipend, she hadn't been in financial distress right now." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Mixed conditional with negative present result: Past habit ('had saved') affecting current financial condition ('right now' -> 'wouldn't be').",
    grammarStructure: "If + Past Perfect, Subject + wouldn't be + complement + right now.",
    exampleSentences: [
      "If we had fixed the plumbing yesterday, the floor wouldn't be flooded right now.",
      "If he had slept eight hours last night, he wouldn't be exhausted right now."
    ],
    explanationSpanish: "En español: Condicional mixto negativo con estado presente ('right now'): se usa 'wouldn't be' para describir la situación actual.",
    commonDistractorNote: "Option B ('wouldn't have been') is past-past, which contradicts 'right now'.",
    rememberTip: "When you see 'right now' describing a present state, use 'wouldn't be'."
  },
  {
    id: 'cond3m-07-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'intermediate',
    prompt: "If our software team had pushed our code to the remote cloud repository, we ______ all our source files when the local hard drive failed.",
    options: [
      { id: 'A', text: "If we had pushed our code, we wouldn't have lost our source files." },
      { id: 'B', text: "If we had pushed our code, we wouldn't lose our source files." },
      { id: 'C', text: "If we had pushed our code, we won't lose our source files." },
      { id: 'D', text: "If we had pushed our code, we didn't lose our source files." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third Conditional: A past unreal condition ('had pushed') and its past counterfactual result ('wouldn't have lost').",
    grammarStructure: "If + Past Perfect (had pushed), Subject + wouldn't have + past participle (lost).",
    exampleSentences: [
      "If the driver had seen the red signal, he wouldn't have collided with the van.",
      "If they had calibrated the scales, they wouldn't have miscalculated the dosage."
    ],
    explanationSpanish: "En español: Tercer condicional. La pérdida de los archivos ocurrió en el pasado cuando falló el disco duro, por lo que requiere 'wouldn't have lost'.",
    commonDistractorNote: "Option B ('wouldn't lose') is used for present hypothetical results, not a past data loss event.",
    rememberTip: "Both events in the past = Standard Third Conditional (wouldn't have + V3)."
  },
  {
    id: 'cond3m-08-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'advanced',
    prompt: "If I hadn't sprained my ankle during football training yesterday, I ______ in today's regional athletics tournament.",
    options: [
      { id: 'A', text: "If I hadn't sprained my ankle, I would be competing in today's tournament." },
      { id: 'B', text: "If I hadn't sprained my ankle, I will be competing in today's tournament." },
      { id: 'C', text: "If I hadn't sprained my ankle, I would have competed in today's tournament." },
      { id: 'D', text: "If I hadn't sprained my ankle, I am competing in today's tournament." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Mixed Conditional: An injury in the past ('yesterday' -> 'hadn't sprained') that prevents an ongoing activity happening today ('today' -> 'would be competing').",
    grammarStructure: "If + had + past participle (past), Subject + would be + -ing (present activity) + today.",
    exampleSentences: [
      "If she hadn't caught a cold yesterday, she would be presenting her research today.",
      "If we hadn't missed the flight, we would be attending the symposium today."
    ],
    explanationSpanish: "En español: Condicional mixto: La lesión ocurrió ayer ('yesterday'), pero la competencia tiene lugar hoy ('today'), por lo que se usa 'would be competing'.",
    commonDistractorNote: "Option C ('would have competed') refers to a tournament that finished in the past, whereas 'today's tournament' is ongoing.",
    rememberTip: "Action yesterday -> hypothetical activity today = would be + -ing."
  },
  {
    id: 'cond3m-09-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'intermediate',
    prompt: "The cybersecurity department would have prevented the ransomware breach if the engineers ______ the critical system patch last weekend.",
    options: [
      { id: 'A', text: "The department would have prevented the breach if they had deployed the patch." },
      { id: 'B', text: "The department would have prevented the breach if they deployed the patch." },
      { id: 'C', text: "The department would have prevented the breach if they would deploy the patch." },
      { id: 'D', text: "The department would have prevented the breach if they have deployed the patch." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third Conditional: Result clause is 'would have prevented' with past time anchor ('last weekend'), requiring Past Perfect ('had deployed') in the if-clause.",
    grammarStructure: "Main clause (would have prevented) + if + had + past participle (deployed).",
    exampleSentences: [
      "The ship would have avoided the iceberg if the lookout had spotted it sooner.",
      "The company would have avoided bankruptcy if management had restructured debt."
    ],
    explanationSpanish: "En español: Tercer condicional. El resultado 'would have prevented' exige en la cláusula condicional con 'if' el pasado perfecto 'had deployed'.",
    commonDistractorNote: "Option B ('deployed') is simple past, creating an ungrammatical mismatch.",
    rememberTip: "Always use 'had + past participle' in the if-clause of third conditionals."
  },
  {
    id: 'cond3m-10-v2',
    category: 'third_mixed_conditionals',
    categoryLabel: 'Third & Mixed Conditionals',
    difficulty: 'advanced',
    prompt: "If you had double-checked the flight departure gate on your digital boarding pass, you ______ waiting in the wrong terminal right now.",
    options: [
      { id: 'A', text: "If you had double-checked your pass, you wouldn't be waiting in the wrong terminal right now." },
      { id: 'B', text: "If you had double-checked your pass, you wouldn't have been waiting right now." },
      { id: 'C', text: "If you had double-checked your pass, you won't be waiting right now." },
      { id: 'D', text: "If you had double-checked your pass, you hadn't been waiting right now." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Mixed conditional: Past oversight ('had double-checked') + present continuous hypothetical consequence ('right now' -> 'wouldn't be waiting').",
    grammarStructure: "If + Past Perfect, Subject + wouldn't be + -ing + right now.",
    exampleSentences: [
      "If we had read the map earlier, we wouldn't be driving in circles right now.",
      "If he had set his alarm, he wouldn't be rushing to work right now."
    ],
    explanationSpanish: "En español: Condicional mixto: El error ocurrió antes en el pasado, pero el acto de estar esperando ocurre en este momento ('right now'), requiriendo 'wouldn't be waiting'.",
    commonDistractorNote: "Option B ('wouldn't have been waiting') is used for past durations, which conflicts with 'right now'.",
    rememberTip: "Right now + ongoing action = wouldn't be waiting."
  },

  // ==========================================
  // CATEGORY 4: SCRAMBLED SENTENCES AND WORD ORDER (31-40)
  // ==========================================
  {
    id: 'scram-01-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'intermediate',
    prompt: "Choose the correct option to complete the scrambled sentence:",
    contextText: "If our company had expanded earlier, _______ . (a / be / market / now / leader / would / we)",
    options: [
      { id: 'A', text: "If our company had expanded earlier, we would be a market leader now." },
      { id: 'B', text: "If our company had expanded earlier, we would a market leader now be." },
      { id: 'C', text: "If our company had expanded earlier, a market leader we would be now." },
      { id: 'D', text: "If our company had expanded earlier, now would we be a market leader." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Declarative sentence order: Subject ('we') + modal auxiliary ('would') + base verb ('be') + predicate noun phrase ('a market leader') + time adverb ('now').",
    grammarStructure: "Subject + would + base verb + noun phrase + time adverb.",
    exampleSentences: [
      "If we had launched the product, we would be a market leader now.",
      "If they had hired an engineer, they would be ready for production now."
    ],
    explanationSpanish: "En español: El orden canónico en inglés es: Sujeto ('we') + modal ('would') + verbo base ('be') + complemento ('a market leader') + adverbio de tiempo ('now').",
    commonDistractorNote: "Option B puts 'be' at the very end of the clause, copying German word order rather than English.",
    rememberTip: "English word order: Subject + would + be + complement + now."
  },
  {
    id: 'scram-02-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'intermediate',
    prompt: "Choose the correct option to complete the scrambled sentence:",
    contextText: "If the electrician hadn't replaced the main fuse, _______ . (the / be / now / would / dark / laboratory)",
    options: [
      { id: 'A', text: "If the electrician hadn't replaced the fuse, the laboratory would be dark now." },
      { id: 'B', text: "If the electrician hadn't replaced the fuse, the laboratory dark would now be." },
      { id: 'C', text: "If the electrician hadn't replaced the fuse, now dark the laboratory would be." },
      { id: 'D', text: "If the electrician hadn't replaced the fuse, would be the laboratory now dark." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Standard clause syntax: Subject ('the laboratory') + modal ('would') + linking verb ('be') + predicate adjective ('dark') + time adverb ('now').",
    grammarStructure: "Subject + would + be + adjective + now.",
    exampleSentences: [
      "If the mechanic hadn't fixed the headlights, the road would be dark now.",
      "If the chef hadn't cooked, the kitchen would be empty now."
    ],
    explanationSpanish: "En español: La oración declarativa sigue la estructura: Sujeto ('the laboratory') + 'would' + 'be' + adjetivo predicativo ('dark') + adverbio ('now').",
    commonDistractorNote: "Option D incorrectly inverts the subject and auxiliary ('would be the laboratory'), which only belongs in questions.",
    rememberTip: "Do not invert subject and auxiliary in declarative conditional clauses!"
  },
  {
    id: 'scram-03-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'intermediate',
    prompt: "Choose the correct option to complete the scrambled sentence:",
    contextText: "_______ , I would have applied for that scholarship. (I / known / If / had / about / program / the)",
    options: [
      { id: 'A', text: "If I had known about the program, I would have applied for that scholarship." },
      { id: 'B', text: "I had known if about the program, I would have applied for that scholarship." },
      { id: 'C', text: "If had I known about the program, I would have applied for that scholarship." },
      { id: 'D', text: "About the program if I had known, I would have applied for that scholarship." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "The conditional clause opens with the conjunction 'If', followed by Subject ('I'), auxiliary ('had'), past participle ('known'), and prepositional object ('about the program').",
    grammarStructure: "If + Subject (I) + had + past participle (known) + prepositional phrase.",
    exampleSentences: [
      "If I had known about the workshop, I would have registered yesterday.",
      "If she had heard about the vacancy, she would have sent her resume."
    ],
    explanationSpanish: "En español: La cláusula condicional comienza obligatoriamente con 'If', seguido del sujeto 'I', el auxiliar 'had', el participio 'known' y el complemento.",
    commonDistractorNote: "Option C inverts subject and auxiliary ('If had I known'), which is ungrammatical.",
    rememberTip: "Formula: If + Subject + had + past participle."
  },
  {
    id: 'scram-04-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'intermediate',
    prompt: "Choose the correct option to complete the scrambled sentence:",
    contextText: "If my sister hadn't changed careers, _______ . (she / be / architect / still / an / would)",
    options: [
      { id: 'A', text: "If my sister hadn't changed careers, she would still be an architect." },
      { id: 'B', text: "If my sister hadn't changed careers, she be would still an architect." },
      { id: 'C', text: "If my sister hadn't changed careers, an architect she still would be." },
      { id: 'D', text: "If my sister hadn't changed careers, would she still an architect be." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Adverb position with modal verbs: The adverb of continuity 'still' is positioned between the modal auxiliary ('would') and the main verb ('be'): 'she would still be an architect'.",
    grammarStructure: "Subject (she) + modal (would) + adverb (still) + base verb (be) + complement (an architect).",
    exampleSentences: [
      "If he hadn't retired, he would still be a chief engineer.",
      "If they hadn't moved away, they would still be our neighbors."
    ],
    explanationSpanish: "En español: El adverbio 'still' (todavía / aún) debe colocarse exactamente entre el modal 'would' y el verbo principal 'be': 'she would still be'.",
    commonDistractorNote: "Option B puts 'be' before 'would', breaking standard modal syntax.",
    rememberTip: "Position of 'still': Modal + STILL + Main Verb (e.g. would still be)."
  },
  {
    id: 'scram-05-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'intermediate',
    prompt: "Choose the correct option to complete the scrambled sentence:",
    contextText: "If they hadn't bought that house in the suburbs, _______ . (would / now / stressed / feel / they)",
    options: [
      { id: 'A', text: "If they hadn't bought that house, they would feel stressed now." },
      { id: 'B', text: "If they hadn't bought that house, would they feel stressed now." },
      { id: 'C', text: "If they hadn't bought that house, they would feel now stressed." },
      { id: 'D', text: "If they hadn't bought that house, now stressed they would feel." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Standard word order: Subject ('they') + modal ('would') + linking verb ('feel') + predicate adjective ('stressed') + time adverb ('now').",
    grammarStructure: "Subject + would + feel + adjective (stressed) + time adverb (now).",
    exampleSentences: [
      "If she hadn't taken the medication, she would feel sick now.",
      "If we hadn't finished early, we would feel rushed now."
    ],
    explanationSpanish: "En español: El adjetivo predicativo ('stressed') va inmediatamente tras el verbo copulativo ('feel'), y el adverbio de tiempo ('now') se coloca al final.",
    commonDistractorNote: "Option C splits the verb and adjective ('feel now stressed'), which is unnatural in English.",
    rememberTip: "Linking verbs connect directly to adjectives: feel stressed, feel happy."
  },
  {
    id: 'scram-06-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'easy',
    prompt: "Choose the correctly ordered sentence using these scrambled words:",
    contextText: "(resources / If / more / had / we / would / prototype / a / build / we)",
    options: [
      { id: 'A', text: "If we had more resources, we would build a prototype." },
      { id: 'B', text: "If had we more resources, we build would a prototype." },
      { id: 'C', text: "We would if more resources had build a prototype." },
      { id: 'D', text: "If we would have more resources, we built a prototype." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Second Conditional syntax: [If + Subject + Past Simple Verb + Object], [Subject + would + base verb + Object].",
    grammarStructure: "If we had more resources, we would build a prototype.",
    exampleSentences: [
      "If we had more budget, we would hire a senior developer.",
      "If they had better tools, they would assemble the machine faster."
    ],
    explanationSpanish: "En español: La opción A respeta la sintaxis del segundo condicional: If + Sujeto + verbo en pasado ('had') + complemento, Sujeto + would + verbo base ('build').",
    commonDistractorNote: "Option D incorrectly uses 'would have' inside the condition clause.",
    rememberTip: "Never put 'would' in the if-clause: If we had..., we would build..."
  },
  {
    id: 'scram-07-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'easy',
    prompt: "Choose the correctly ordered sentence using these scrambled words:",
    contextText: "(touch / in / You / mustn't / the / server room / cables / the)",
    options: [
      { id: 'A', text: "You mustn't touch the cables in the server room." },
      { id: 'B', text: "In the server room you touch mustn't the cables." },
      { id: 'C', text: "You touch mustn't the cables in the server room." },
      { id: 'D', text: "Mustn't you touch the cables in the server room." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Modal prohibition statement: Subject ('You') + Modal auxiliary ('mustn't') + Main verb ('touch') + Direct Object ('the cables') + Place phrase ('in the server room').",
    grammarStructure: "Subject + mustn't + base verb + object + place phrase.",
    exampleSentences: [
      "Apprentices mustn't open the electrical cabinet without permission.",
      "Visitors mustn't touch the museum exhibits."
    ],
    explanationSpanish: "En español: El verbo modal 'mustn't' debe anteceder directamente al verbo principal 'touch'.",
    commonDistractorNote: "Options B and C place 'mustn't' after the main verb, which is incorrect in English.",
    rememberTip: "Modal verbs always come before the main verb: Subject + modal + verb."
  },
  {
    id: 'scram-08-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'easy',
    prompt: "Choose the correctly ordered sentence using these scrambled words:",
    contextText: "(studies / If / she / will / the / exam / pass / she)",
    options: [
      { id: 'A', text: "If she studies, she will pass the exam." },
      { id: 'B', text: "If she will study, she passes the exam." },
      { id: 'C', text: "She the exam pass will if she studies." },
      { id: 'D', text: "If studies she, pass will she the exam." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "First Conditional: Condition clause with Present Simple [If + she + studies], Main clause with future [she + will + pass + the exam].",
    grammarStructure: "If + Subject + Present Simple, Subject + will + base verb + Object.",
    exampleSentences: [
      "If he practices daily, he will master the pronunciation.",
      "If we prepare thoroughly, we will pass the audit."
    ],
    explanationSpanish: "En español: La opción A presenta el orden correcto del primer condicional: presente simple tras 'if' y 'will pass' en el resultado.",
    commonDistractorNote: "Option B puts 'will' in the if-clause ('If she will study'), which is a classic grammar mistake.",
    rememberTip: "Remember: 'If she studies...' (never 'If she will study')."
  },
  {
    id: 'scram-09-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'intermediate',
    prompt: "Choose the correct option to complete the scrambled sentence:",
    contextText: "If the pilot hadn't noticed the storm clouds, _______ . (into / flown / have / would / turbulence / he)",
    options: [
      { id: 'A', text: "If the pilot hadn't noticed the clouds, he would have flown into turbulence." },
      { id: 'B', text: "If the pilot hadn't noticed the clouds, he will have flown into turbulence." },
      { id: 'C', text: "If the pilot hadn't noticed the clouds, into turbulence flown he would have." },
      { id: 'D', text: "If the pilot hadn't noticed the clouds, would he have into turbulence flown." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third conditional affirmative result: Subject ('he') + modal ('would') + auxiliary ('have') + past participle ('flown') + prepositional phrase ('into turbulence').",
    grammarStructure: "Subject + would have + past participle (flown) + prepositional phrase.",
    exampleSentences: [
      "If he hadn't braked, he would have crashed into the barrier.",
      "If she hadn't turned the wheel, she would have hit the pothole."
    ],
    explanationSpanish: "En español: Estructura del resultado en el tercer condicional: Sujeto ('he') + would have + participio pasado ('flown') + complemento ('into turbulence').",
    commonDistractorNote: "Option B uses 'will have' (future perfect), which is wrong for counterfactual past events.",
    rememberTip: "Counterfactual past result = Subject + would have + past participle."
  },
  {
    id: 'scram-10-v2',
    category: 'scrambled_sentences',
    categoryLabel: 'Scrambled Sentences & Word Order',
    difficulty: 'easy',
    prompt: "Choose the correctly ordered sentence using these scrambled words:",
    contextText: "(wear / boots / You / to / safety / workshop / have / the / in)",
    options: [
      { id: 'A', text: "You have to wear safety boots in the workshop." },
      { id: 'B', text: "You wear have to safety boots in the workshop." },
      { id: 'C', text: "Have to you wear safety boots in the workshop." },
      { id: 'D', text: "In the workshop have you safety boots to wear." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Semi-modal structure: Subject ('You') + semi-modal ('have to') + base verb ('wear') + direct object ('safety boots') + place phrase ('in the workshop').",
    grammarStructure: "Subject + have to + base verb + object + place phrase.",
    exampleSentences: [
      "Employees have to wear ear protection in the stamping area.",
      "Students have to carry their identification cards on campus."
    ],
    explanationSpanish: "En español: Estructura de semi-modal de obligación: Sujeto ('You') + 'have to' + verbo base ('wear') + objeto directo ('safety boots') + lugar ('in the workshop').",
    commonDistractorNote: "Option B separates 'have to' incorrectly and puts 'wear' ahead of it.",
    rememberTip: "'Have to' stays united before the base verb: have to wear, have to study."
  },

  // ==========================================
  // CATEGORY 5: READING COMPREHENSION - DANIEL GOLEMAN (41-50)
  // ==========================================
  {
    id: 'read-01-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'easy',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Daniel Goleman was born in the state of California in the United States.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'True',
    explanationEnglish: "The statement is TRUE. Paragraph 1 explicitly states: 'Born in Stockton, California in 1946 to university professor parents...'",
    exampleSentences: [
      "Evidence from text: 'Born in Stockton, California in 1946 to university professor parents...'",
      "Stockton is a city located in California, United States."
    ],
    explanationSpanish: "En español: Verdadero. El párrafo 1 afirma explícitamente que nació en Stockton, California, en 1946.",
    rememberTip: "Scanning tip: Locate the proper geographical nouns 'Stockton, California' in the first paragraph.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-02-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman graduated magna cum laude from Amherst College after attending both Amherst and UC Berkeley.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'True',
    explanationEnglish: "The statement is TRUE. Paragraph 1 records: 'After attending Amherst College and the University of California at Berkeley, Goleman graduated magna cum laude from Amherst.'",
    exampleSentences: [
      "Evidence from text: 'After attending Amherst College and the University of California at Berkeley, Goleman graduated magna cum laude from Amherst.'",
      "He completed his undergraduate education with magna cum laude honors."
    ],
    explanationSpanish: "En español: Verdadero. El texto confirma que tras estudiar en Amherst y la Universidad de California en Berkeley, se graduó magna cum laude de Amherst.",
    rememberTip: "Scan for the Latin academic distinction 'magna cum laude' in the first paragraph.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-03-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman received a Ford Foundation fellowship that allowed him to pursue doctoral studies at Harvard University.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'True',
    explanationEnglish: "The statement is TRUE. Paragraph 1 affirms: 'He subsequently received a prestigious Ford Foundation fellowship to pursue doctoral studies at Harvard University...'",
    exampleSentences: [
      "Evidence from text: 'He subsequently received a prestigious Ford Foundation fellowship to pursue doctoral studies at Harvard University...'",
      "The fellowship provided crucial funding for his doctoral training."
    ],
    explanationSpanish: "En español: Verdadero. El texto corrobora que recibió una beca de la Fundación Ford para cursar estudios doctorales en la Universidad de Harvard.",
    rememberTip: "Proper names of foundations like 'Ford Foundation' are easy landmarks to scan in the text.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-04-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "David C. McClelland rejected Goleman's application and refused to recommend him for writing jobs.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'False',
    explanationEnglish: "The statement is FALSE. The passage states the exact opposite: 'Upon McClelland's recommendation, Goleman began writing for Psychology Today magazine.' McClelland mentored him and actively endorsed his writing career.",
    exampleSentences: [
      "Evidence from text: '...where he earned his PhD in clinical psychology under the mentorship of David C. McClelland. Upon McClelland's recommendation, Goleman began writing for Psychology Today magazine.'",
      "McClelland supported Goleman's transition into journalism."
    ],
    explanationSpanish: "En español: Falso. El texto señala exactamente lo contrario: Goleman comenzó a escribir en la revista Psychology Today gracias a la recomendación positiva de su mentor David McClelland.",
    commonDistractorNote: "Always check relationship verbs: McClelland supported and recommended Goleman, rather than rejecting him.",
    rememberTip: "Contradictory negative statements about supportive mentors are clearly False.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-05-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'easy',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman conducted research in India and Sri Lanka, which inspired his first published book.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'True',
    explanationEnglish: "The statement is TRUE. Paragraph 2 explains: 'He also spent extended periods conducting research in India and Sri Lanka on scholarship grants, which inspired his first book on contemplative mental practices.'",
    exampleSentences: [
      "Evidence from text: '...spent extended periods conducting research in India and Sri Lanka on scholarship grants, which inspired his first book on contemplative mental practices.'",
      "His travel in South Asia directly produced his debut book."
    ],
    explanationSpanish: "En español: Verdadero. El texto confirma que sus investigaciones en India y Sri Lanka inspiraron su primer libro sobre prácticas mentales contemplativas.",
    rememberTip: "Geographic references like 'India and Sri Lanka' pinpoint the key evidence in paragraph 2.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-06-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "The New York Times hired Goleman as a political correspondent covering government elections.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'False',
    explanationEnglish: "The statement is FALSE. Paragraph 2 states: 'In 1984, The New York Times hired Goleman as a science reporter specializing in psychology and neurology...', not as a political election reporter.",
    exampleSentences: [
      "Evidence from text: 'In 1984, The New York Times hired Goleman as a science reporter specializing in psychology and neurology, a position he held for twelve years.'",
      "His beat was neurological science and human behavior."
    ],
    explanationSpanish: "En español: Falso. El periódico The New York Times lo contrató en 1984 como reportero de ciencias especializado en psicología y neurología, no como corresponsal político.",
    commonDistractorNote: "A statement matching the company name (New York Times) is still FALSE if the job beat is misrepresented.",
    rememberTip: "Verify the job specialization: science/psychology, not politics.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-07-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman's 1995 book argued that cognitive IQ is the only determinant of personal and professional success.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'False',
    explanationEnglish: "The statement is FALSE. Paragraph 3 emphasizes the opposite: the book demonstrated that 'self-awareness, empathy, and emotional self-regulation often predict personal and professional success more accurately than cognitive intelligence alone.'",
    exampleSentences: [
      "Evidence from text: '...demonstrating that self-awareness, empathy, and emotional self-regulation often predict personal and professional success more accurately than cognitive intelligence alone.'",
      "Emotional competence was shown to be equally or more decisive than IQ."
    ],
    explanationSpanish: "En español: Falso. El libro argumentó lo contrario: demostró que factores como la empatía, la autoconciencia y la autorregulación emocional predicen el éxito con mayor precisión que el coeficiente intelectual (IQ) por sí solo.",
    commonDistractorNote: "Watch out for extreme absolute words like 'the only determinant' which distort scientific theses.",
    rememberTip: "Extreme wording ('only determinant') usually flags an inaccurate summary of the passage.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-08-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman co-founded the Collaborative for Academic, Social, and Emotional Learning (CASEL) at Yale University.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'True',
    explanationEnglish: "The statement is TRUE. Paragraph 4 confirms: 'Beyond his writing, Goleman co-founded the Collaborative for Academic, Social, and Emotional Learning (CASEL) at Yale University...'",
    exampleSentences: [
      "Evidence from text: '...Goleman co-founded the Collaborative for Academic, Social, and Emotional Learning (CASEL) at Yale University...'",
      "CASEL remains a global pioneer in social-emotional learning curricula."
    ],
    explanationSpanish: "En español: Verdadero. El párrafo 4 confirma que cofundó la organización CASEL en la Universidad de Yale.",
    rememberTip: "Look for institutional acronyms like CASEL and partner universities like Yale.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-09-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'easy',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman grew up in an academic household where both of his parents were university professors.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'True',
    explanationEnglish: "The statement is TRUE. Paragraph 1 states: 'Born in Stockton, California in 1946 to university professor parents, he developed an early interest in human behavior and scholarship.'",
    exampleSentences: [
      "Evidence from text: 'Born in Stockton, California in 1946 to university professor parents...'",
      "His parents' profession as university professors influenced his academic upbringing."
    ],
    explanationSpanish: "En español: Verdadero. El texto señala expresamente que nació de padres que eran profesores universitarios, lo que fomentó su temprano interés por la conducta humana.",
    rememberTip: "Direct family details appear in the introductory biographical lines.",
    readingPassageId: 'passage-daniel-goleman'
  },
  {
    id: 'read-10-v2',
    category: 'reading_comprehension',
    categoryLabel: 'Reading Comprehension: Daniel Goleman',
    difficulty: 'intermediate',
    prompt: "Based on the text, choose the correct option:",
    contextText: "Goleman is currently disconnected from any academic or organizational research initiatives.",
    options: [
      { id: 'True', text: "True (Verdadero)" },
      { id: 'False', text: "False (Falso)" }
    ],
    correctAnswer: 'False',
    explanationEnglish: "The statement is FALSE. Paragraph 4 explains that he currently 'co-directs the Consortium for Research on Emotional Intelligence in Organizations at Rutgers University' and his frameworks continue to guide education and leadership worldwide.",
    exampleSentences: [
      "Evidence from text: '...and co-directs the Consortium for Research on Emotional Intelligence in Organizations at Rutgers University. Today, his empirical frameworks continue to shape contemporary leadership...'",
      "He remains actively engaged in organizational research."
    ],
    explanationSpanish: "En español: Falso. El texto aclara que actualmente codirige el Consorcio para la Investigación sobre Inteligencia Emocional en las Organizaciones en la Universidad de Rutgers.",
    commonDistractorNote: "Statements claiming a prominent scholar is inactive or disconnected contradict paragraph 4's description of his ongoing leadership at Rutgers.",
    rememberTip: "Check current activities in the concluding paragraph: co-directs at Rutgers University.",
    readingPassageId: 'passage-daniel-goleman'
  },

  // ==========================================
  // CATEGORY 6: MIXED GRAMMAR CHALLENGE (51-60)
  // ==========================================
  {
    id: 'mix-01-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'intermediate',
    prompt: "If there's an active chemical vapor leak in the clean room, the laboratory staff ______ evacuate the wing immediately.",
    options: [
      { id: 'A', text: "If there's an active vapor leak, the staff will evacuate immediately." },
      { id: 'B', text: "If there's an active vapor leak, the staff would evacuate immediately." },
      { id: 'C', text: "If there's an active vapor leak, the staff won't evacuate immediately." },
      { id: 'D', text: "If there's an active vapor leak, the staff wouldn't evacuate immediately." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "First Conditional with logical safety response: The condition is Present Simple ('there's' = there is). The correct positive emergency response is future affirmative: 'the staff will evacuate immediately'.",
    grammarStructure: "If + Present Simple ('there's'), Subject + will + base verb (evacuate).",
    exampleSentences: [
      "If the smoke detector beeps, the residents will exit the building.",
      "If the fire alarm rings, workers will assemble at the meeting point."
    ],
    explanationSpanish: "En español: Primer condicional en contexto de emergencia. La condición está en presente simple ('there's') y la acción de seguridad lógica en el futuro es afirmativa: 'the staff will evacuate immediately' (el personal evacuará de inmediato).",
    commonDistractorNote: "Option B ('would evacuate') creates an ungrammatical mismatch with the present condition 'there's'. Option C gives the dangerous negative meaning.",
    rememberTip: "Check both grammatical tense agreement (present -> will) and contextual safety logic."
  },
  {
    id: 'mix-02-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'intermediate',
    prompt: "Apprentices ______ touch high-voltage circuit breakers unless the supervisor has certified that the system is de-energized.",
    options: [
      { id: 'A', text: "Apprentices mustn't touch high-voltage circuit breakers." },
      { id: 'B', text: "Apprentices don't have to touch high-voltage circuit breakers." },
      { id: 'C', text: "Apprentices shouldn't to touch high-voltage circuit breakers." },
      { id: 'D', text: "Apprentices might not to touch high-voltage circuit breakers." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Mustn't' expresses an imperative safety prohibition against handling live high-voltage electricity without supervisor clearance.",
    grammarStructure: "Subject + mustn't + base verb + unless + condition.",
    exampleSentences: [
      "Technicians mustn't open energized control boxes.",
      "You mustn't operate electrical switches with wet hands."
    ],
    explanationSpanish: "En español: 'Mustn't' expresa prohibición absoluta de seguridad eléctrica ('los aprendices no deben / tienen prohibido tocar disyuntores de alto voltaje').",
    commonDistractorNote: "Option B ('don't have to') would foolishly imply that touching high-voltage breakers is merely optional rather than life-threatening.",
    rememberTip: "Safety prohibitions against electrocution or physical danger always take 'mustn't'."
  },
  {
    id: 'mix-03-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'advanced',
    prompt: "If the civil engineers had reinforced the concrete retaining wall before the rainy season, the hillside ______ during last November's storm.",
    options: [
      { id: 'A', text: "The hillside wouldn't have collapsed during last November's storm." },
      { id: 'B', text: "The hillside wouldn't collapse during last November's storm." },
      { id: 'C', text: "The hillside won't collapse during last November's storm." },
      { id: 'D', text: "The hillside hadn't collapsed during last November's storm." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third Conditional: A past condition ('had reinforced') and a counterfactual past consequence anchored by 'last November' ('wouldn't have collapsed').",
    grammarStructure: "If + had + past participle, Subject + wouldn't have + past participle (past result).",
    exampleSentences: [
      "If they had checked the bridge cables, the structure wouldn't have failed.",
      "If the levee had held, the town wouldn't have flooded."
    ],
    explanationSpanish: "En español: Tercer condicional referido a un evento del pasado ('last November'). Requiere 'wouldn't have collapsed'.",
    commonDistractorNote: "Option B ('wouldn't collapse') expresses a present consequence, which contradicts the past time anchor 'last November'.",
    rememberTip: "Past condition + past event ('last November') = wouldn't have + past participle."
  },
  {
    id: 'mix-04-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'intermediate',
    prompt: "Unless our software development team resolves the critical database vulnerabilities by Friday, we ______ able to launch the application.",
    options: [
      { id: 'A', text: "We won't be able to launch the application." },
      { id: 'B', text: "We wouldn't be able to launch the application." },
      { id: 'C', text: "We wouldn't have been able to launch the application." },
      { id: 'D', text: "We are not been able to launch the application." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Unless' introduces a First Conditional condition in the Present Simple ('resolves'). The main clause requires future negative: 'won't be able to'.",
    grammarStructure: "Unless + Present Simple, Subject + won't be able to + base verb.",
    exampleSentences: [
      "Unless the client signs the contract, we won't be able to purchase the materials.",
      "Unless it stops snowing, planes won't be able to take off."
    ],
    explanationSpanish: "En español: 'Unless' (a menos que / si no) funciona como primer condicional. La cláusula principal expresa el resultado futuro con 'won't be able to'.",
    commonDistractorNote: "Option B ('wouldn't be') is second conditional and does not match the real present condition 'resolves'.",
    rememberTip: "Unless + Present Simple -> won't + base verb."
  },
  {
    id: 'mix-05-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'intermediate',
    prompt: "If Felipe ______ more disciplined with his weekly study calendar, he wouldn't feel so overwhelmed on assessment days.",
    options: [
      { id: 'A', text: "If Felipe were more disciplined, he wouldn't feel so overwhelmed." },
      { id: 'B', text: "If Felipe will be more disciplined, he wouldn't feel so overwhelmed." },
      { id: 'C', text: "If Felipe is being more disciplined, he wouldn't feel so overwhelmed." },
      { id: 'D', text: "If Felipe would be more disciplined, he wouldn't feel so overwhelmed." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Second Conditional: The consequence is 'wouldn't feel' (hypothetical present state), which requires the subjunctive Past Simple 'were' in the if-clause.",
    grammarStructure: "If + were (hypothetical character trait), Subject + wouldn't + base verb (feel).",
    exampleSentences: [
      "If she were more patient, she wouldn't get frustrated with complex code.",
      "If he were more punctual, he wouldn't miss the team standup meetings."
    ],
    explanationSpanish: "En español: Segundo condicional. Como el resultado hipotético es 'wouldn't feel', la condición sobre su hábito actual debe usar el pasado subjuntivo 'were'.",
    commonDistractorNote: "Option D incorrectly uses 'would be' inside the if-clause.",
    rememberTip: "Second conditional if-clause: use 'were' (never 'would be')."
  },
  {
    id: 'mix-06-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'easy',
    prompt: "Colombian citizens ______ pay any tuition fees to enroll in vocational technical programs at SENA; education is fully state-funded.",
    options: [
      { id: 'A', text: "Citizens don't have to pay any tuition fees." },
      { id: 'B', text: "Citizens mustn't pay any tuition fees." },
      { id: 'C', text: "Citizens shouldn't to pay any tuition fees." },
      { id: 'D', text: "Citizens can't pay any tuition fees." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Don't have to' expresses lack of financial obligation because SENA vocational training is completely free of charge.",
    grammarStructure: "Subject + don't have to + base verb (absence of obligation).",
    exampleSentences: [
      "Visitors don't have to pay for parking at the botanical garden on weekdays.",
      "Apprentices don't have to purchase textbook licenses."
    ],
    explanationSpanish: "En español: 'Don't have to' indica ausencia de obligación económica: la formación en el SENA es gratuita, por lo que los ciudadanos no tienen que pagar matrícula.",
    commonDistractorNote: "Option B ('mustn't') implies paying is a criminal offense, rather than simply unnecessary.",
    rememberTip: "Free service = You don't have to pay."
  },
  {
    id: 'mix-07-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'advanced',
    prompt: "If our software startup had secured that venture capital investment last spring, we ______ struggling to hire senior developers right now.",
    options: [
      { id: 'A', text: "If our startup had secured funding, we wouldn't be struggling right now." },
      { id: 'B', text: "If our startup had secured funding, we wouldn't have been struggling right now." },
      { id: 'C', text: "If our startup had secured funding, we won't be struggling right now." },
      { id: 'D', text: "If our startup had secured funding, we hadn't been struggling right now." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Mixed conditional: An unreal past action ('last spring' -> 'had secured') that determines the present circumstance marked by 'right now' ('wouldn't be struggling').",
    grammarStructure: "If + Past Perfect, Subject + wouldn't be + -ing + right now.",
    exampleSentences: [
      "If we had bought that equipment last year, we wouldn't be renting it right now.",
      "If she had taken the train, she wouldn't be stuck in traffic right now."
    ],
    explanationSpanish: "En español: Condicional mixto: La decisión ocurrió en el pasado ('last spring'), pero el estado de dificultad se experimenta en este momento ('right now' -> 'wouldn't be struggling').",
    commonDistractorNote: "Option B ('wouldn't have been struggling') ignores the present time anchor 'right now'.",
    rememberTip: "Past action + 'right now' in consequence = wouldn't be + -ing."
  },
  {
    id: 'mix-08-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'easy',
    prompt: "Choose the correctly ordered sentence:",
    contextText: "(consult / I / If / were / would / you / I / mentor / the)",
    options: [
      { id: 'A', text: "If I were you, I would consult the mentor." },
      { id: 'B', text: "If you were I, consult I would the mentor." },
      { id: 'C', text: "I would consult the mentor if I you were." },
      { id: 'D', text: "Were I you if, I would to the mentor consult." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Standard advice formula in the second conditional: 'If I were you, I would consult the mentor.'",
    grammarStructure: "If I were you, I would + base verb + object.",
    exampleSentences: [
      "If I were you, I would review the irregular verb list.",
      "If I were you, I would ask the supervisor for feedback."
    ],
    explanationSpanish: "En español: La fórmula estándar para aconsejar en segundo condicional es: 'If I were you, I would consult the mentor' (Si yo fuera tú, consultaría con el mentor).",
    commonDistractorNote: "All other options contain scrambled syntax that violates English word order.",
    rememberTip: "Memorize the advice pattern: 'If I were you, I would...'"
  },
  {
    id: 'mix-09-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'easy',
    prompt: "You look visibly fatigued after driving continuously for six hours. You ______ pull over at the next rest station.",
    options: [
      { id: 'A', text: "You should pull over at the next rest station." },
      { id: 'B', text: "You mustn't pull over at the next rest station." },
      { id: 'C', text: "You have not to pull over at the next rest station." },
      { id: 'D', text: "You can't pull over at the next rest station." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "'Should' offers appropriate, caring advice to a tired driver to prevent traffic accidents.",
    grammarStructure: "Subject + should + base verb (advising safe behavior).",
    exampleSentences: [
      "You should take a break after working at a computer for four hours.",
      "Tired drivers should drink water and rest."
    ],
    explanationSpanish: "En español: 'Should' (deberías) se usa para aconsejar a un conductor fatigado que se detenga a descansar por seguridad.",
    commonDistractorNote: "Option B ('mustn't') gives the dangerous opposite meaning: forbidding the driver to rest.",
    rememberTip: "'Should' expresses helpful, sensible advice."
  },
  {
    id: 'mix-10-v2',
    category: 'mixed_grammar',
    categoryLabel: 'Mixed Grammar Challenge',
    difficulty: 'intermediate',
    prompt: "If the airline ______ passengers about the gate cancellation earlier, hundreds of travelers wouldn't have missed their connecting flights.",
    options: [
      { id: 'A', text: "If the airline had notified passengers earlier, they wouldn't have missed flights." },
      { id: 'B', text: "If the airline notified passengers earlier, they wouldn't have missed flights." },
      { id: 'C', text: "If the airline has notified passengers earlier, they wouldn't have missed flights." },
      { id: 'D', text: "If the airline would have notified passengers, they wouldn't have missed flights." }
    ],
    correctAnswer: 'A',
    explanationEnglish: "Third Conditional: The main clause is 'wouldn't have missed' (past counterfactual), so the if-clause strictly requires the Past Perfect ('had notified').",
    grammarStructure: "If + had + past participle (notified), Subject + wouldn't have + past participle (missed).",
    exampleSentences: [
      "If the conductor had warned passengers, they wouldn't have boarded the wrong train.",
      "If the bank had alerted the customer, the fraud wouldn't have occurred."
    ],
    explanationSpanish: "En español: Tercer condicional. El resultado es 'wouldn't have missed' (no habrían perdido), por lo que la condición debe usar el pasado perfecto 'had notified' (si la aerolínea hubiera avisado).",
    commonDistractorNote: "Option D ('would have notified') incorrectly repeats 'would have' inside the condition.",
    rememberTip: "Never use 'would have' in the if-clause: use 'had + past participle'."
  }
];

export const CATEGORY_INFO: Record<
  string,
  { title: string; description: string; count: number; badgeColor: string }
> = {
  modal_verbs: {
    title: 'Modal Verbs & Obligations',
    description: 'Must, mustn’t, should, shouldn’t, can, have to & lack of necessity.',
    count: 10,
    badgeColor: 'teal'
  },
  first_second_conditionals: {
    title: 'First & Second Conditionals',
    description: 'Real future possibilities vs hypothetical present & imaginary situations.',
    count: 10,
    badgeColor: 'violet'
  },
  third_mixed_conditionals: {
    title: 'Third & Mixed Conditionals',
    description: 'Past hypothetical scenarios & past conditions with present results.',
    count: 10,
    badgeColor: 'cyan'
  },
  scrambled_sentences: {
    title: 'Scrambled Sentences & Word Order',
    description: 'Ordering modal verbs, conditionals, and adverb placement accurately.',
    count: 10,
    badgeColor: 'indigo'
  },
  reading_comprehension: {
    title: 'Reading: Daniel Goleman & EI',
    description: 'Biographical reading passage with 10 fact-based True/False questions.',
    count: 10,
    badgeColor: 'emerald'
  },
  mixed_grammar: {
    title: 'Mixed Grammar Challenge',
    description: 'Comprehensive intermediate assessment combining all core topics.',
    count: 10,
    badgeColor: 'amber'
  }
};
