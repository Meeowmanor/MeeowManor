import { stayPlans, stayPolicies } from '../data/siteData'
import PricingCard from './PricingCard'
import SectionHeading from './SectionHeading'

function StayPlans({ onSelectPlan }) {
  return (
    <section id="stay-plans" className="section" aria-labelledby="stay-plans-heading">
      <div className="container">
        <SectionHeading
          id="stay-plans-heading"
          eyebrow="Stay Options"
          title="Stay Plans"
          subtitle="Choose the stay that suits your cat’s comfort and routine."
        />
        <div className="pricing-grid">
          {stayPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              icon={plan.icon}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              unit={plan.unit}
              benefit={plan.benefit}
              featured={plan.featured}
              onSelect={() => onSelectPlan(plan.name)}
            />
          ))}
        </div>
        <div className="info-panel stay-policies">
          <h3 className="stay-policies__title">{stayPolicies.discountsTitle}</h3>
          <ul>
            {stayPolicies.discounts.map((discount) => (
              <li key={discount}>{discount}</li>
            ))}
          </ul>
          <p className="info-highlight">{stayPolicies.advancePayment}</p>
        </div>
      </div>
    </section>
  )
}

export default StayPlans
