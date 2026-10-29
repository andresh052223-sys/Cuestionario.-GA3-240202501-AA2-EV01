import { QuestionCategory } from '../types/quiz';

export interface GrammarTopic {
  id: string;
  categoryKey: QuestionCategory;
  title: string;
  subtitle: string;
  definition: string;
  structure: string;
  whenToUse: string[];
  positiveExamples: string[];
  negativeExamples: string[];
  commonMistakes: string[];
  spanishExplanation: string;
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'topic-modal-verbs',
    categoryKey: 'modal_verbs',
    title: 'Modal Verbs & Obligations',
    subtitle: 'Must, Mustn’t, Should, Shouldn’t, Have to, Don’t have to, Can',
    definition: 'Auxiliary verbs that express ability, permission, obligation, prohibition, lack of necessity, or advice without changing their form.',
    structure: 'Subject + Modal Verb + Base Verb (Infinitive without "to")',
    whenToUse: [
      'Must: Strong personal obligation or strict official rule (e.g., You must wear safety boots).',
      'Mustn’t: Strict prohibition; something is forbidden or dangerous (e.g., You mustn’t smoke here).',
      'Have to: External obligation from laws, rules, or work guidelines (e.g., He has to show his badge).',
      'Don’t have to: Lack of necessity or obligation; action is optional (e.g., You don’t have to pay; it’s free).',
      'Should / Shouldn’t: Helpful advice or recommendations (e.g., You should get some rest).',
      'Can / Can’t: Ability, possibility, or permission (e.g., Authorized staff can enter).'
    ],
    positiveExamples: [
      'Apprentices must wear protective equipment in the mechanical workshop.',
      'You should review the grammar rules before taking the official test.',
      'Employees have to present their credentials at the security checkpoint.'
    ],
    negativeExamples: [
      'You mustn’t use mobile phones during the proctored evaluation. (Prohibited)',
      'Tomorrow is Sunday, so you don’t have to wake up early. (Not required)',
      'She shouldn’t skip meals when studying for long hours. (Bad idea)'
    ],
    commonMistakes: [
      '❌ Confusing "mustn’t" (prohibited) with "don’t have to" (optional). Remember: "You don’t have to come" means you may come if you wish, but "You mustn’t come" means you are forbidden from coming.',
      '❌ Adding "to" after modal verbs (e.g., writing "should to study" instead of "should study").',
      '❌ Adding an -s to modal verbs in 3rd person (e.g., writing "he musts" instead of "he must").'
    ],
    spanishExplanation: 'En español: Los verbos modales modifican el significado del verbo principal. "Must" y "Have to" expresan obligación. "Mustn\'t" expresa prohibición terminante ("no debes / está prohibido"). "Don\'t have to" indica que algo no es obligatorio ni necesario ("no tienes que"). "Should" expresa recomendación o consejo ("deberías").'
  },
  {
    id: 'topic-first-conditional',
    categoryKey: 'first_second_conditionals',
    title: 'First Conditional',
    subtitle: 'Real Future Possibilities & Probable Results',
    definition: 'Used to talk about realistic events and probable results in the future if a specific condition is fulfilled in the present.',
    structure: 'If + Present Simple, ... will + base verb (or will not / won’t + base verb)',
    whenToUse: [
      'To predict realistic future consequences based on current conditions.',
      'To make promises, warnings, or conditional agreements.',
      'To state natural cause-and-effect relationships in everyday and work situations.'
    ],
    positiveExamples: [
      'If the team completes the code review today, the software will launch on Friday.',
      'If you practice with this simulator, you will achieve a higher score on the SENA assessment.'
    ],
    negativeExamples: [
      'If we don’t calibrate the sensors properly, the system will produce inaccurate readings.',
      'You will not pass the evaluation if you don’t submit the evidence portfolio.'
    ],
    commonMistakes: [
      '❌ Using "will" inside the if-clause (e.g., saying "If it will rain..." instead of "If it rains...").',
      '❌ Forgetting the third-person -s in the present simple if-clause (e.g., saying "If he arrive" instead of "If he arrives").'
    ],
    spanishExplanation: 'En español: El primer condicional se usa para situaciones reales y probables en el futuro. Regla de oro: en la cláusula con "if" siempre va el presente simple, nunca "will". El "will" va en la cláusula principal del resultado.'
  },
  {
    id: 'topic-second-conditional',
    categoryKey: 'first_second_conditionals',
    title: 'Second Conditional',
    subtitle: 'Hypothetical, Imaginary, or Unlikely Situations in the Present',
    definition: 'Used to talk about imaginary, hypothetical, or improbable situations in the present or future and their theoretical outcomes.',
    structure: 'If + Past Simple, ... would + base verb (or wouldn’t + base verb)',
    whenToUse: [
      'To speculate about contrary-to-fact present circumstances.',
      'To give gentle advice using "If I were you, I would...".',
      'To imagine dreams, wishes, or theoretical alternatives to reality.'
    ],
    positiveExamples: [
      'If I had more free time, I would learn full-stack web development.',
      'If she were fluent in English, she would apply for that international position.',
      'If I were in your shoes, I would consult the SENA instructor directly.'
    ],
    negativeExamples: [
      'If the laboratory weren’t so noisy, the technicians wouldn’t lose concentration.',
      'If we didn’t have this practical guide, we would feel lost during the assessment.'
    ],
    commonMistakes: [
      '❌ Using "would" inside the if-clause (e.g., saying "If I would have money..." instead of "If I had money...").',
      '❌ Using "was" instead of the formal subjunctive "were" for all subjects in tests (prefer "If I were you", "If she were here").'
    ],
    spanishExplanation: 'En español: El segundo condicional plantea hipótesis irreales o poco probables en el presente. La condición va en pasado simple ("If I had", "If she were") y el resultado hipotético con "would + verbo base".'
  },
  {
    id: 'topic-third-conditional',
    categoryKey: 'third_mixed_conditionals',
    title: 'Third Conditional',
    subtitle: 'Unreal Past Situations & Counterfactual Past Results',
    definition: 'Used to talk about impossible past situations that never happened and imagine their different past consequences (often expressing regret or relief).',
    structure: 'If + Past Perfect (had + past participle), ... would have + past participle',
    whenToUse: [
      'To express regret about past decisions or mistakes.',
      'To explain historical or completed consequences of unfulfilled conditions.',
      'To imagine alternate realities in the completed past.'
    ],
    positiveExamples: [
      'If she had studied harder for the technical exam, she would have graduated with honors.',
      'If the mechanic had inspected the brake pads yesterday, the truck would have been safe to drive.'
    ],
    negativeExamples: [
      'We wouldn’t have missed our flight if our supervisor hadn’t given us a ride to the terminal.',
      'The company wouldn’t have lost the database if the administrator had performed automated backups.'
    ],
    commonMistakes: [
      '❌ Putting "would have" in the if-clause (e.g., saying "If I would have known..." instead of "If I had known...").',
      '❌ Using the simple past instead of the past participle after "had" or "would have".'
    ],
    spanishExplanation: 'En español: El tercer condicional se refiere a hechos ya ocurridos en el pasado que no se pueden cambiar. Estructura: "If + had + participio pasado" en la condición, y "would have + participio pasado" en el resultado.'
  },
  {
    id: 'topic-mixed-conditionals',
    categoryKey: 'third_mixed_conditionals',
    title: 'Mixed Conditionals',
    subtitle: 'Past Condition with Present Result (or vice versa)',
    definition: 'Connects a past hypothetical action or decision with its direct consequence in the present (or an ongoing general trait with a past outcome).',
    structure: 'If + Past Perfect (had + V3), ... would + base verb (or would be + -ing) + now/today',
    whenToUse: [
      'When a decision or event in the past determines your current situation or feelings right now.',
      'Look for time keywords: "yesterday / last year" in the condition + "now / today / right now" in the result.'
    ],
    positiveExamples: [
      'If I had accepted that software engineering job in Toronto last year, I would be living in Canada right now.',
      'If Carlos had learned German during his exchange program, he would be able to translate these manuals today.'
    ],
    negativeExamples: [
      'If Mariana had saved her internship stipend, she wouldn’t be financially struggling right now.',
      'If you had paid close attention to the instructor yesterday, you wouldn’t be so confused now.'
    ],
    commonMistakes: [
      '❌ Forgetting that the result is in the PRESENT and mistakenly writing "would have been" instead of "would be" when "now" or "today" is present.',
      '❌ Confusing standard 3rd conditional (past -> past) with mixed conditional (past -> present).'
    ],
    spanishExplanation: 'En español: Los condicionales mixtos combinan tiempos: una acción no ocurrida en el pasado ("last year / yesterday") produce un efecto que se siente en el presente ("now / right now / today"). Por eso el resultado usa "would be" o "would + verbo" en lugar de "would have".'
  },
  {
    id: 'topic-word-order',
    categoryKey: 'scrambled_sentences',
    title: 'Word Order in English',
    subtitle: 'Declarative Clauses, Adverb Placement, & Modals',
    definition: 'English is an S-V-O (Subject-Verb-Object) language with strict ordering rules for modal auxiliaries, mid-position adverbs, and conditional clauses.',
    structure: 'Subject + Modal Auxiliary + Adverb (still/now/never) + Main Verb + Object + Place + Time',
    whenToUse: [
      'Placing modal verbs: Auxiliary modal always precedes the base verb (e.g., "must wear", "would feel").',
      'Mid-position adverbs: Place "still", "always", "already" between the modal auxiliary and the main verb (e.g., "would still be").',
      'Conditional clauses: If + Subject + Verb + Complement. No inversion in declarative sentences.'
    ],
    positiveExamples: [
      'If my family had had money, I would be an artist now.',
      'If my husband hadn’t died, he would still be a chef.',
      'You have to wear a uniform at work.'
    ],
    negativeExamples: [
      'You mustn’t smoke in the laboratory.',
      'If she hadn’t fallen asleep while driving, she wouldn’t have fallen from her motorcycle.'
    ],
    commonMistakes: [
      '❌ Inverting subject and auxiliary in declarative sentences (e.g., writing "would be the restaurant closed now" instead of "the restaurant would be closed now").',
      '❌ Putting the direct object before the verb (e.g., writing "I the army if liked" instead of "If I liked the army").',
      '❌ Misplacing adverbs like "still" or "now" into ungrammatical positions.'
    ],
    spanishExplanation: 'En español: El orden de palabras en inglés es estricto. El sujeto va antes del verbo. Si hay un modal ("would", "must"), este va antes del verbo principal. Adverbios como "still" van en medio ("would still be"). La cláusula condicional no invierte sujeto y verbo.'
  },
  {
    id: 'topic-reading-strategies',
    categoryKey: 'reading_comprehension',
    title: 'Reading Comprehension Strategies',
    subtitle: 'Skimming, Scanning, Fact Checking, & True/False Analysis',
    definition: 'Techniques for processing English informational texts efficiently, verifying specific biographical facts, and identifying distractor traps.',
    structure: '1. Read Title & First Sentence -> 2. Read Question Prompt -> 3. Scan for Keywords (Dates, Names, Places) -> 4. Check Complete Truth Value',
    whenToUse: [
      'Skimming: Read the first and last sentence of each paragraph to get the central thesis and outline.',
      'Scanning: Rapidly scan for capital letters (proper nouns like "Harvard", "Rutgers", "Amherst") and dates ("1984", "1995").',
      'True/False Verification: A statement is only TRUE if ALL parts are factual. If a single detail is wrong (e.g., "sports reporter" instead of "science reporter"), the entire statement is FALSE.'
    ],
    positiveExamples: [
      'Statement: "Goleman published his book Emotional Intelligence in 1995." -> Scan for "1995" -> Found: "...published his book Emotional Intelligence in 1995." -> TRUE.',
      'Statement: "Goleman graduated magna cum laude from Amherst College." -> Scan for "magna cum laude" -> Found in paragraph 1 -> TRUE.'
    ],
    negativeExamples: [
      'Statement: "He obtained his PhD from Yale." -> Scan for "PhD" -> Found: "...earned his PhD from Harvard..." -> Yale was for CASEL, not PhD -> FALSE.',
      'Statement: "The New York Times hired him as a sports editor." -> Scan for "New York Times" -> Found: "...science reporter specializing in psychology..." -> FALSE.'
    ],
    commonMistakes: [
      '❌ Answering based on personal assumptions or general world knowledge rather than what the text actually states.',
      '❌ Falling for partial truths: A statement that has the right date and place but the wrong title is completely FALSE.',
      '❌ Getting trapped by absolute qualifiers like "only", "always", or "never" when the text describes nuanced findings.'
    ],
    spanishExplanation: 'En español: En preguntas de Verdadero o Falso, busca palabras clave (nombres propios, años, instituciones). Recuerda que para que una afirmación sea VERDADERA, todos sus datos deben coincidir con la lectura. Si un solo detalle cambia (por ejemplo, reportero de deportes en vez de ciencias), la respuesta es FALSA.'
  }
];
