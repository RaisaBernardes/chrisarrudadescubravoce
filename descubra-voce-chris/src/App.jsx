import styles from './style';

import { Hero, ForWho, Learning, Benefits, HowWorks, Investment, Chris, Faq, Ending, Footer } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero /></div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ForWho />
        <Learning />
        <Benefits />
        <HowWorks />
        <Investment />
        <Chris />
        <Faq />
        <Ending />
      </div>
    </div>
    <Footer />
    </div>

  )
}

export default App