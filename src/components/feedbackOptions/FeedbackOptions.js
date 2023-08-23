

export const FeedBackOptions = ({title,options,onLeaveFeedback}) => {
      return (
        <div>
          <h2>{title}</h2>
              <div>
                  <button type="button" onClick={() => onLeaveFeedback(options[0])}>Good</button>
                  <button type="button"  onClick={() => onLeaveFeedback(options[1])}>Neutral</button>
                  <button type="button"  onClick={() => onLeaveFeedback(options[2])}>Bad</button>
              </div>
        </div>
      )
    
} 