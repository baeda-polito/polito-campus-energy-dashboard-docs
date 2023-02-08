import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Measure',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Measuring energy consumption accurately is crucial for the successful management of resources and the reduction of waste.
      </>
    ),
  },
  {
    title: 'Track',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        By tracking energy consumption, organizations can identify areas where energy is being wasted and make adjustments to improve efficiency.
      </>
    ),
  },
  {
    title: 'Act',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Make informed decisions and act to optimize energy use, reduce costs, and promote sustainability.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
