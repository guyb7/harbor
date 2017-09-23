import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import companyLogo1 from '../../../assets/company-1.jpg'
import companyLogo2 from '../../../assets/company-2.jpg'
import companyLogo3 from '../../../assets/company-3.jpg'
import { Card } from 'semantic-ui-react'
import OpportunityCard from '../../Opportunities/Card'
import style from './style'

class Opportunities extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setTitle('Perks and Opportunities'))
  }

  render() {
    return (
      <div style={style.container}>
        <Card.Group>
          <OpportunityCard
            title="Azure Startup Grant"
            provider="Microsoft"
            logo={companyLogo1}
            description="Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students."
            />
          <OpportunityCard
            title="Watson"
            provider="IBM"
            logo={companyLogo2}
            description="Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language."
            />
          <OpportunityCard
            title="Storage"
            provider="Oracle"
            logo={companyLogo3}
            description="Get a 2 year storage and support services with various Oracle products for free."
            />
          <OpportunityCard
            title="Azure Startup Grant"
            provider="Microsoft"
            logo={companyLogo1}
            description="Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students."
            />
          <OpportunityCard
            title="Watson"
            provider="IBM"
            logo={companyLogo2}
            description="Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language."
            />
          <OpportunityCard
            title="Storage"
            provider="Oracle"
            logo={companyLogo3}
            description="Get a 2 year storage and support services with various Oracle products for free."
            />
          <OpportunityCard
            title="Azure Startup Grant"
            provider="Microsoft"
            logo={companyLogo1}
            description="Azure provides free development tools and access to Azure services for students and educators. Use the latest tools Microsoft offers with Azure for students."
            />
          <OpportunityCard
            title="Watson"
            provider="IBM"
            logo={companyLogo2}
            description="Get 10k monthly queries with IBM Watson, a question answering computer system capable of answering questions posed in natural language."
            />
          <OpportunityCard
            title="Storage"
            provider="Oracle"
            logo={companyLogo3}
            description="Get a 2 year storage and support services with various Oracle products for free."
            />
        </Card.Group>
      </div>
    )
  }
}

export default connect()(Opportunities)
