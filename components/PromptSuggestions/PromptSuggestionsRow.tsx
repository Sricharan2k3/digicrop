import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick }) => {
const prompts = [
  //  'How does DigiCrop perform crop analysis?',
    //'What features does DigiCrop offer for monitoring crop health?',
    //'How does DigiCrop help in identifying crop diseases?',
    //'How can farmers use DigiCrop to improve crop yield?',
    //'What types of crop data can be accessed through DigiCrop?',

     ' What are the steps to prepare mango pulp?',
    'Tell me about Paddy Crop Calendar?',
    'Crop Calendar of Sesame?',
    'What Factors Contribute to Indias dominant position as a supplier of moringa globally?',
    'What are the essential steps to manage stem borer infestation in paddy from nursery preparation to harvesting?'
    
];


  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
