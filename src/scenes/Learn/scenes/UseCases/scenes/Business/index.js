import React, { Component } from 'react';
import UseCasesCard from '../../components/Card';

const ImgBusiness1 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FBusiness1.webp?alt=media&token=06209159-e83c-41cc-a8a3-9718189db664"
const ImgBusiness2 = "https://firebasestorage.googleapis.com/v0/b/udaplandev.appspot.com/o/Artworks%2FLearn%2FUseCases%2FBusiness2.webp?alt=media&token=0b7d424d-f7c2-4b1b-a52c-dd82e108248c"

class LearnUseCasesBusiness extends Component {
    render() {
        return (
            <div>
                <UseCasesCard
                    img={ImgBusiness1}
                    title={"Product & Services Promotions"}
                    solution={`
                    Promote to a specific category without
                    being intrusive. Users that search our
                    pages have a high chance of intent to discover
                    things to participate in, not
                    just scrolling for fun
                    `}
                />
                <UseCasesCard
                    img={ImgBusiness2}
                    title={"Custom Pages"}
                    solution={`
                    We offer pages where you can post pictures
                    and links with customizable Call-To-Action
                    button. Most importantly, we are a web app so
                    SEO is available for you too. 
                    `}
                />
            </div>
        );
    }
}

export default LearnUseCasesBusiness;