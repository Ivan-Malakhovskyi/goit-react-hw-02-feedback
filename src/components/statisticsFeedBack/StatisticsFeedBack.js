

export const StatisticsFeedBack =({good,neutral,bad,totalFeedback,calcPositiveFeedback,title}) => {

  return (
      <div>
          <h2>{ title}</h2>
          <p>Good: { good}</p>
          <p>Neutral: { neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {calcPositiveFeedback}% </p>
            </div>
        )

}