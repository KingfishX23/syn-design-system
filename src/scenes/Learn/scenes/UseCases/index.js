import React, { Component } from 'react';
import LearnHeader from '../../components/Header';
import LearnFooter from '../../components/Footer';
import LearnAppBar from '../../components/AppBar';
import LearnUseCasesBusiness from './scenes/Business';
import LearnUseCasesEvents from './scenes/Events';
import LearnUseCasesProjects from './scenes/Projects';

class LearnUseCases extends Component {

    renderSegments = () => {
        const { location } = this.props
        console.log(location.pathname.replace('/learn/usecases/', ""))
        switch (location.pathname.replace('/learn/usecases/', "")) {
            case 'business':
                return <LearnUseCasesBusiness />
            case 'events':
                return <LearnUseCasesEvents />
            case 'projects':
                return <LearnUseCasesProjects />
            default:
                return null
        }
    }

    render() {
        const { history } = this.props
        return (
            <div>
                <LearnHeader onClick={()=>history.push("/")}/>
                <LearnAppBar />
                {this.renderSegments()}
                <LearnFooter />
            </div>
        );
    }
}

export default LearnUseCases;