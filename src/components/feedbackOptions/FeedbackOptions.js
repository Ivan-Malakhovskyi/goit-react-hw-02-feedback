import { ItemButton } from "./FeedbackOptions.styled";


export const FeedBackOptions = ({ title, options, onLeaveFeedback }) => {
  
   const optionLabels = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad'
  };

      return (
        <div>
          <h2>{title}</h2>
              <div>
                 
            {options.map((option,idx) => 
              <ItemButton key={idx} type="button" onClick={() => onLeaveFeedback(option)}>{ optionLabels[option]}</ItemButton >
            ) }
              </div>
        </div>
      )
    
} 